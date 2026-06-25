import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const endpoint = process.env.B2_ENDPOINT;
const region = process.env.B2_REGION || "eu-central-003";
const bucket = process.env.B2_BUCKET || "";

export const b2Configured = !!(
  endpoint &&
  process.env.B2_KEY_ID &&
  process.env.B2_APP_KEY &&
  bucket
);

export const B2_BUCKET = bucket;

const s3 = new S3Client({
  region,
  endpoint,
  // B2's S3 API works with virtual-hosted-style; path-style is the safe default.
  forcePathStyle: true,
  // AWS SDK v3 adds a default CRC32 checksum that breaks browser presigned PUTs
  // to non-AWS S3 (B2/R2/MinIO). Only add checksums when explicitly required.
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
  credentials: {
    accessKeyId: process.env.B2_KEY_ID || "placeholder",
    secretAccessKey: process.env.B2_APP_KEY || "placeholder",
  },
});

/** Presigned PUT URL so the browser uploads straight to B2 (private bucket). */
export function presignUpload(
  key: string,
  contentType: string,
  expiresIn = 600
) {
  return getSignedUrl(
    s3,
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      ContentType: contentType,
    }),
    { expiresIn }
  );
}

/** Presigned GET URL to download/view a private object. */
export function presignDownload(
  key: string,
  fileName?: string,
  expiresIn = 600
) {
  return getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: bucket,
      Key: key,
      ResponseContentDisposition: fileName
        ? `inline; filename="${fileName.replace(/"/g, "")}"`
        : undefined,
    }),
    { expiresIn }
  );
}

export async function deleteObject(key: string) {
  await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
}

/** Build a unique object key for a request attachment. */
export function buildAttachmentKey(requestId: string, fileName: string) {
  const safe = fileName.replace(/[^\w.\-]+/g, "_").slice(-80);
  return `requests/${requestId}/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}-${safe}`;
}

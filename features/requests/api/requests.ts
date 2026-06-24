import { fetchApi } from "@/lib/api";
import type {
  ServiceRequest,
  CreateRequestInput,
  UpdateRequestInput,
  StatusChangeInput,
  MessageInput,
} from "../schemas";

export async function listRequests(): Promise<ServiceRequest[]> {
  return fetchApi<ServiceRequest[]>("/api/requests");
}

export async function getRequest(id: string): Promise<ServiceRequest> {
  return fetchApi<ServiceRequest>(`/api/requests/${id}`);
}

export async function createRequest(
  data: CreateRequestInput
): Promise<ServiceRequest> {
  return fetchApi<ServiceRequest>("/api/requests", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateRequest(
  id: string,
  data: UpdateRequestInput
): Promise<ServiceRequest> {
  return fetchApi<ServiceRequest>(`/api/requests/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function changeRequestStatus(
  id: string,
  data: StatusChangeInput
): Promise<ServiceRequest> {
  return fetchApi<ServiceRequest>(`/api/requests/${id}/status`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function addRequestMessage(id: string, data: MessageInput) {
  return fetchApi(`/api/requests/${id}/messages`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

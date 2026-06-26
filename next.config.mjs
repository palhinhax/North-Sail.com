/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Redirect the bare root to the default locale at the edge.
   *
   * Doing this here (instead of an in-page `redirect()` in app/page.tsx)
   * emits a real HTTP redirect with a `Location` header. The App Router's
   * `redirect()` produced a 307 with an RSC body and *no* `Location`, which
   * browsers follow client-side but Googlebot reports as a "Redirect error"
   * (the page could not be indexed).
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false, // 307; switch to `true` (308) if /en is permanent
      },
    ];
  },
};

export default nextConfig;

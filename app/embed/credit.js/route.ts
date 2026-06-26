/**
 * Embeddable "Made by NorthSail" credit widget.
 *
 * A client site includes ONE line:
 *   <script src="https://www.north-sail.com/embed/credit.js" data-client="acme" async></script>
 *
 * The script (served from here) injects the badge. Because it's hosted by us,
 * any change to this file updates the badge on EVERY client site after the
 * cache TTL below — no need to touch each site.
 *
 * Optional attributes on the <script> tag:
 *   data-client="acme"     -> goes into utm_source (measure referral traffic)
 *   data-variant="dark"    -> "light" (default) or "dark" backgrounds
 *   data-label="..."       -> custom credit text
 *   data-target="el-id"    -> id of an element to render into (else inserted
 *                             right after the script tag)
 */

const SCRIPT = `(function () {
  var s =
    document.currentScript ||
    (function () {
      var all = document.querySelectorAll('script[src*="embed/credit"]');
      return all[all.length - 1];
    })();

  function attr(name, fallback) {
    var v = s && s.getAttribute(name);
    return v == null || v === "" ? fallback : v;
  }

  var client = attr("data-client", "client-site");
  var variant = attr("data-variant", "light");
  var label = attr("data-label", "Feito por NorthSail");
  var targetId = attr("data-target", "");

  if (!document.getElementById("ns-credit-style")) {
    var st = document.createElement("style");
    st.id = "ns-credit-style";
    st.textContent =
      "@keyframes nsCreditShimmer{to{background-position:-200% center}}" +
      ".ns-credit{display:inline-flex;align-items:center;gap:8px;text-decoration:none;padding:6px 4px;line-height:1;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;transition:transform .25s ease}" +
      ".ns-credit:hover{transform:translateY(-1px)}" +
      ".ns-credit__logo{border-radius:6px;transition:transform .3s ease}" +
      ".ns-credit:hover .ns-credit__logo{transform:scale(1.06) rotate(-2deg)}" +
      ".ns-credit__word{-webkit-background-clip:text;background-clip:text;color:transparent;background-size:200% auto;background-position:0% center;font-size:14px;font-weight:600;letter-spacing:-.01em;transition:letter-spacing .3s ease}" +
      ".ns-credit:hover .ns-credit__word{letter-spacing:.015em;animation:nsCreditShimmer 2.4s linear infinite}" +
      "@media (prefers-reduced-motion: reduce){.ns-credit,.ns-credit__logo,.ns-credit__word{transition:none!important;animation:none!important;transform:none!important}}";
    document.head.appendChild(st);
  }

  var gradLight =
    "linear-gradient(110deg,#0A2540,#2F6BFF 35%,#19B5A7 50%,#2F6BFF 65%,#0A2540)";
  var gradDark =
    "linear-gradient(110deg,#C2CCDA,#5B8DEF 35%,#19B5A7 50%,#5B8DEF 65%,#C2CCDA)";
  var grad = variant === "dark" ? gradDark : gradLight;

  var href =
    "https://north-sail.com/?utm_source=" +
    encodeURIComponent(client) +
    "&utm_medium=footer&utm_campaign=made-by-northsail";

  var a = document.createElement("a");
  a.className = "ns-credit";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", "Feito por NorthSail — north-sail.com");
  a.innerHTML =
    '<img class="ns-credit__logo" src="https://www.north-sail.com/android-chrome-192x192.png" width="20" height="20" alt="" aria-hidden="true" />' +
    '<span class="ns-credit__word" style="background-image:' +
    grad +
    '">' +
    label.replace(/</g, "&lt;") +
    "</span>";

  var target = targetId ? document.getElementById(targetId) : null;
  if (target) {
    target.appendChild(a);
  } else if (s && s.parentNode) {
    s.parentNode.insertBefore(a, s.nextSibling);
  } else {
    document.body.appendChild(a);
  }
})();`;

export async function GET() {
  return new Response(SCRIPT, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      // Updates propagate to every client site within ~5 minutes.
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

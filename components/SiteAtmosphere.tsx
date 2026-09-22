/**
 * Soft atmospheric layers — pure CSS, no client JS.
 */
export default function SiteAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="site-bg-base absolute inset-0" />
      <div className="site-bg-glow site-bg-glow-a absolute" />
      <div className="site-bg-glow site-bg-glow-b absolute" />
      <div className="site-bg-grid absolute inset-0" />
      <div className="site-bg-vignette absolute inset-0" />
    </div>
  );
}

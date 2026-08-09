export default function Loading() {
  return (
    <main className="route-state" aria-busy="true" aria-live="polite">
      <p className="eyebrow">Release Desk</p>
      <h1>Loading release evidence</h1>
      <p>Checking the design contract, required states, and review queue.</p>
      <div className="loading-line" aria-hidden="true" />
      <span className="sr-only">Release evidence is loading.</span>
    </main>
  );
}

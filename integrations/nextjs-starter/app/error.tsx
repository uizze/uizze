"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="route-state">
      <p className="eyebrow">Release Desk</p>
      <h1>The review could not be loaded</h1>
      <p>Your work is still safe. Retry the request or return after the service recovers.</p>
      <button className="button button-primary" type="button" onClick={reset}>
        Retry review
      </button>
    </main>
  );
}

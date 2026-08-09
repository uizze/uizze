import Link from "next/link";

export default function NotFound() {
  return (
    <main className="route-state">
      <p className="eyebrow">404 · Release Desk</p>
      <h1>This review does not exist</h1>
      <p>Check the release link or return to the current review queue.</p>
      <Link className="button button-primary" href="/">
        Open review queue
      </Link>
    </main>
  );
}

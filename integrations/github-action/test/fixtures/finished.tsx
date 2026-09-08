export function WorkspaceUsage() {
  const metrics = useQuery(['metrics']);

  if (metrics.isLoading) return <p role="status">Loading workspace usage…</p>;
  if (metrics.error) return <p role="alert">Workspace usage could not be loaded.</p>;
  if (!metrics.data || metrics.data.length === 0) return <p>No usage recorded for this workspace yet.</p>;

  return (
    <main className="bg-surface">
      <h1>Workspace usage</h1>
      <a href="/settings/usage">Manage usage limits</a>
      <ul>
        {metrics.data.map((metric) => (
          <li key={metric.id}>{metric.label}: {metric.value}</li>
        ))}
      </ul>
    </main>
  );
}

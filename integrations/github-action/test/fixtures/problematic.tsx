export function GenericDashboard() {
  const metrics = useQuery(['metrics']);

  return (
    <main className="dashboard grid grid-cols-3 bg-white">
      <a href="#">Overview</a>
      {metrics.data.map((metric) => (
        <article className="metric-card">Total Revenue: {metric.value}</article>
      ))}
    </main>
  );
}

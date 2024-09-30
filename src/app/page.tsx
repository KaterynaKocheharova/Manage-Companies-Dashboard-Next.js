import StatusLabel from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status="active">Active</StatusLabel>
      <StatusLabel status="not-active">Not active</StatusLabel>
      <StatusLabel status="pending">Pending</StatusLabel>
      <StatusLabel status="suspended">Suspended</StatusLabel>
    </main>
  );
}

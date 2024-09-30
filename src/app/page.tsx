import Label from './components/Label/Label';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Label status="active">Active</Label>
      <Label status="not-active">Not active</Label>
      <Label status="pending">Pending</Label>
      <Label status="suspended">Suspended</Label>
    </main>
  );
}

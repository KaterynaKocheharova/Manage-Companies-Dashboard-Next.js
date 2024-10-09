import StatusLabel from './components/StatusLabel';
import { Status } from './components/StatusLabel';
import { headers } from 'next/headers';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}

import Header from '@/app/components/Header';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <Header>{`Company (${params.id})`}</Header>;
}

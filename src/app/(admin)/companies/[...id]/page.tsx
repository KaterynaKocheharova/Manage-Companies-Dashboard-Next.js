import Header from '@/app/components/Header';

type PageProps = {
  params: {
    id: string[];
  };
};

export default function Page({ params }: PageProps) {
  console.log(params)
  return (
    <>
      <Header>DYNAMIC ROUTES PRACTICE {String(params.id)}</Header>
      <main>
        <p>{new Date().toTimeString()}</p>
      </main>
    </>
  );
}

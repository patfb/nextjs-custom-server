import { headers } from "next/headers";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ApplesPage = async (props: Props) => {
  const [params, headersList] = await Promise.all([props.params, headers()]);

  return (
    <div>
      <h1>Apples Page</h1>
      <pre>{JSON.stringify({ params, headersList }, null, 2)}</pre>
    </div>
  );
};

export default ApplesPage;

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import "@root/global.css";

interface Comic {
  alt: string;
  day: string;
  img: string;
  link: string;
  month: string;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: string;
}

export const getServerSideProps = (async (context) => {
  const id = context?.params?.id ?? 1;

  // Fetch data from external API
  const res = await fetch(`https://xkcd.com/${id}/info.0.json`);
  const comic: Comic = await res.json();
  // Pass data to the page via props
  return { props: { comic } };
}) satisfies GetServerSideProps<{ comic: Comic }>;

export default function xkcdIdPage({
  comic,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>xkcd #{comic.num}</h1>
      <p>{JSON.stringify(comic)}</p>
      <img src={comic.img} />
    </div>
  );
}

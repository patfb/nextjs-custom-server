import "@root/global.css";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ColorContext } from "components/Color/ColorContext";
import { useContext } from "react";
import Image from "next/image";

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
  const id = (context?.params?.id ?? "1") as string;

  try {
    // Fetch data from external API
    const res = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const comic: Comic = await res.json();
    // Pass data to the page via props
    return { props: { comic, id } };
  } catch (error) {
    return { props: { comic: null, id } };
  }
}) satisfies GetServerSideProps<{ comic: Comic | null; id: string }>;

export default function XkcdIdPage({
  comic,
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const color = useContext(ColorContext);

  const renderedComic = comic ? (
    <>
      <h2>{comic.title}</h2>

      <p>
        {comic.month}/{comic.day}/{comic.year}
      </p>

      <p>Transcript: {comic.transcript}</p>
      <p>Alt: {comic.alt}</p>

      <Image
        src={comic.img}
        alt={comic.alt}
        width={500}
        height={500}
        placeholder="empty"
        priority={true}
      />
    </>
  ) : (
    <p>could not find comic</p>
  );

  return (
    <div>
      <h1>xkcd #{id}</h1>
      <p>color context: {color}</p>
      {renderedComic}
    </div>
  );
}

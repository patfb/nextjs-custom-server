import { headers } from "next/headers";
import { delay } from "../../../lib/delay";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

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

const XKCDIdPage = async (props: Props) => {
  // console.log("props are", props);

  // alternatively we could await multiple promises at the same time
  // const [params, headersList] = await Promise.all([props.params, headers()]);

  const params = await props.params;
  const headersList = await headers();

  const userAgent = headersList.get("user-agent");
  const hello1 = headersList.get("x-hello-from-middleware1");

  console.log("hello1 is", hello1);
  console.log("userAgent", userAgent);

  // Fetch data from external API
  let comic: Comic | null = null;

  try {
    await delay();
    const res = await fetch(`https://xkcd.com/${params.id}/info.0.json`);
    comic = await res.json();
  } catch (error) {}

  const renderedComic = comic ? (
    <>
      <h2>{comic.title}</h2>

      <p>
        {comic.month}/{comic.day}/{comic.year}
      </p>

      <p>Transcript: {comic.transcript}</p>
      <p>Alt: {comic.alt}</p>

      <img src={comic.img} />
    </>
  ) : (
    <p>could not find comic</p>
  );

  return (
    <div>
      <h1>xkcd #{params.id}</h1>
      {renderedComic}
    </div>
  );
};

export default XKCDIdPage;

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import "@root/global.css";

const buildTime = new Date().toISOString();
console.log("buildTime is", buildTime);

export const getStaticProps = (async (context) => {
  console.log("pages/static.tsx getStaticProps context is", context);

  return { props: { buildTime } };
}) satisfies GetStaticProps<{
  buildTime: string;
}>;

export default function Page({
  buildTime,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return buildTime;
}

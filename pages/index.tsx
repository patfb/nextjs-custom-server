import Link from "next/link";
import "../global.css";

export const getServerSideProps = async (context) => {
  console.log("FETCHING!!!");

  // Fetch data from external API
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  console.log("repo is", repo);

  // Pass data to the page via props
  return { props: { data: repo } };
};

export default function MainNavigation(props) {
  // console.log("props are", props);
  console.log("loaded page", props);

  const { data } = props;

  console.log("data inside page is", data);

  return (
    <main>
      <h1>pages nav</h1>
      <ul>
        <p>APP ROUTER</p>
        <li>
          <Link href="/fruit">/fruit (App Router)</Link>
        </li>
        <li>
          <Link href="/xkcd-app/103">/xkcd-app/103 (App Router)</Link>
        </li>
        <p>PAGES ROUTER</p>
        <li>
          <Link href="/color">/color (Pages Router)</Link>
        </li>
        <li>
          <Link href="/xkcd/102">/xkcd/102 (Pages Router)</Link>
        </li>
        <p>ID is: "{JSON.stringify(props.data)}"</p>
      </ul>
    </main>
  );
}

import Link from "next/link";
import "../global.css";

export default function Nav() {
  return (
    <>
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
      </ul>
    </>
  );
}

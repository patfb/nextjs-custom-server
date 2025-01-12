import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const session = useSession();
  if (session.status === "authenticated") {
    return (
      <>
        <span>Signed in as: {session?.data?.user?.email}</span>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

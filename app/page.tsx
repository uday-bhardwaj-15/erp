import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session || !session.user?.email) {
    redirect("http://localhost:3000/auth/signIn");
  }

  return (
    <div className="p-10">
      {session && session.user?.email ? (
        <>
          <Link href="/auth/signout">Sign out</Link>
          <p>
            <b>Signed in as {session.user?.email}</b>
            <b>hello {session.user?.role}</b>
          </p>
        </>
      ) : (
        <>
          <Link href="/auth/signup">Sign up</Link>
        </>
      )}
    </div>
  );
}

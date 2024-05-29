import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="p-10">
      {session && session.user?.email ? (
        <>
          <Link href="/auth/signout">Sign out</Link>
          <p>
            <b>Signed in as {session.user?.email}</b>
            {/* <b>Signed in as {session.user?.role}</b> */}
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

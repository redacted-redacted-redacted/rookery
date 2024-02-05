import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { HeaderNavbar } from "~/app/_components/header-navbar";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  console.log(session)

  return (
    <main>
      <HeaderNavbar></HeaderNavbar>
    </main>
  );
}

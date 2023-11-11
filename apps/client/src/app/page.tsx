import { Login } from "./_components/Login";
import { redis } from "@/redis";
export default async function Home() {
  const ditto = await redis.get("Foo");
  console.log(ditto);
  return (
    <main className="">
      <Login />
      {ditto}
    </main>
  )
}
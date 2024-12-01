import { getSession } from "@/lib/session";
import { Logout } from "@/components/Logout";

const Home = async () => {
  const session = await getSession();

  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <p>
        ようこそ<span className="mx-1 font-medium">{session?.name}</span>さん
      </p>

      <div className="mt-10">
        <Logout />
      </div>
    </main>
  );
};

export default Home;

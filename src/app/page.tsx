import { Component, Tool, Website } from "@/types";

type HomeData = {
  websites: Website[];
  tools: Tool[];
  components: Component[];
};

async function GetHomeData() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/home-data`;

  const res = await fetch(url);
  const data: HomeData = await res.json();

  return data;
}

export default async function Home() {
  const data = await GetHomeData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.websites.map((item) => (
          <div key={item.title}>{item.title}</div>
        ))}
        {process.env.NEXT_PUBLIC_BASE_URL}
      </main>
    </div>
  );
}

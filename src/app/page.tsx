import Card from "@/components/card-simple";
import GridList from "@/components/grid-list";
import { ComponentCardIcon } from "@/components/icons";
import SectionTitle from "@/components/title-section";
import { GetHomeData } from "@/firebase/functions/GetHomeData";
import { Component, Tool, Website } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface HomeData {
  websites?: Website[];
  tools?: Tool[];
  components?: Component[];
}

interface CardProps {
  id: string;
  title: string;
  url: string;
  image: string;
}

export const revalidate = 3600; // cache: 1 hora

export default async function Home() {
  const data: HomeData = await GetHomeData();

  return (
    <div className="">
      <main className="">
        <div className="flex flex-col items-center px-5 md:px-0">
          <h1 className="w-full md:w-2/5 text-center text-3xl md:text-5xl font-semibold bg-gradient-to-r from-title-primary to-title-secundary text-transparent bg-clip-text">
            Get inspired and build beautiful websites
          </h1>
          <p className="text-paragraph w-full md:w-2/5 px-0 md:px-10 text-center text-lg md:text-2xl mt-2 md:mt-4">
            Ignite your creativity. Discover top-tier web designs, components,
            and tools.
          </p>
        </div>
        <section className="mt-20 flex flex-col gap-20 px-5 md:px-20">
          {/* WEBS */}
          <div>
            <div className="flex justify-between items-center">
              <SectionTitle title={"Best websites for inspiration"} />
              <Link href={"/websites"}>view all</Link>
            </div>
            <GridList>
              {data.websites?.map((item: CardProps) => (
                <Link href={item.url} target="_blank" key={item.title}>
                  <Card>
                    <Card.Image>
                      <Image
                        className="brightness-90 group-hover:brightness-100 scale-100 group-hover:scale-105 ease-in-out duration-200"
                        src={item.image}
                        alt={`sitio web de ${item.title}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Card.Image>
                    <Card.Title>{item.title}</Card.Title>
                  </Card>
                </Link>
              ))}
            </GridList>
          </div>

          {/* COMPONENTS */}
          <div>
            <div className="flex justify-between items-center">
              <SectionTitle title={"Beautiful components for webs"} />
              <Link href={"/components"}>view all</Link>
            </div>
            <GridList>
              {data.components?.map((item: Component) => (
                <Link href={`/components/${item.id}`} key={item.title}>
                  <Card>
                    <Card.Image>
                      <ComponentCardIcon />
                    </Card.Image>
                    <Card.Title>{item.title}</Card.Title>
                  </Card>
                </Link>
              ))}
            </GridList>
          </div>

          {/* TOOLS */}
          <div>
            <div className="flex justify-between items-center">
              <SectionTitle title={"Best tools for you"} />
              <Link href={"/tools"}>view all</Link>
            </div>
            <GridList>
              {data.tools?.map((item: CardProps) => (
                <Link href={item.url} target="_blank" key={item.title}>
                  <Card>
                    <Card.Image>
                      <Image
                        className="brightness-90 group-hover:brightness-100 scale-100 group-hover:scale-105 ease-in-out duration-200"
                        src={item.image}
                        alt={`sitio web de ${item.title}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Card.Image>
                    <Card.Title>{item.title}</Card.Title>
                  </Card>
                </Link>
              ))}
            </GridList>
          </div>
        </section>
      </main>
    </div>
  );
}

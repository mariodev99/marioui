import { ArrowIcon } from "./icons";
import { ReactNode } from "react";

// export interface CardProps {
//   key: string | number;
//   id: string;
//   title: string;
//   url: string;
//   image: string;
// }

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    // <Link href={url} target="_blank">
    <div className="flex flex-col gap-2 cursor-pointer group hover:transition-all ">
      {/* <CardImage image={image} title={title} /> */}

      {children}
    </div>
    // </Link>
  );
}

// eslint-disable-next-line react/display-name
Card.Image = ({ children }: CardProps) => (
  <div className="w-full h-48 bg-gradient-to-b from-card-primary to-card-secundary relative -z-10 overflow-hidden rounded-lg flex items-center justify-center">
    {children}
  </div>
);

// eslint-disable-next-line react/display-name
Card.Title = ({ children }: CardProps) => (
  <div className="flex items-center justify-between">
    <p className="text-paragraph text-base md:text-xl font-medium group-hover:text-white ease-in duration-100">
      {children}
    </p>
    <div className="p-1 bg-white rounded-full flex justify-center items-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-45  ease-in duration-100">
      <ArrowIcon />
    </div>
  </div>
);

export default Card;

import Link from "next/link";
import { LogoIcon, MarioUiIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="pt-24 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex  gap-2 items-center">
            <LogoIcon />
            <MarioUiIcon />
          </div>

          <p className="md:text-xl text-paragraph font-medium">
            Get inspired and build beautiful websites
          </p>
        </div>
        <div className="flex mt-5 md:mt-0 gap-5 md:gap-20 text-lg text-title-secundary font-medium justify-center md:justify-start">
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="hover:text-white">
              Home
            </Link>
            <Link href={"/websites"} className="hover:text-white">
              Inspiration
            </Link>
            <Link href={"/components"} className="hover:text-white">
              Components
            </Link>
            <Link href={"/tools"} className="hover:text-white">
              Tools
            </Link>
          </div>

          <div>
            <div>Get in touch</div>
            <div className="flex gap-2">
              <div>github</div>
              <div>linkedin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-sm text-title-secundary mt-20 mb-3">
        <Link
          href={"https://mariodev99.vercel.app/"}
          target="_blank"
          className="hover:text-[#A8FF78]"
        >
          built by mariodev
        </Link>
      </div>
    </footer>
  );
}

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = ({ locale, dict }: { locale?: string, dict: any }) => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          width={500}
          height={500}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-balance tracking-wide">
            {/* <span className="text-purple">Contact</span> me  */}
          {/* Got a question, <span className="text-purple">project</span> idea, or just want to <span className="text-purple">connect</span>?  */}
          {dict.footer.title}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {dict.footer.subtitle}
        </p>
        <a href="mailto:sinasahraeian780@gmail.com">
          <MagicButton
            title={dict.footer.button}
            icon={<FaLocationArrow />}
            position={locale === 'fa' ? 'left' : 'right'}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {dict.footer.copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

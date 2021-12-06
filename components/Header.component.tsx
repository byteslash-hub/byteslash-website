import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useRouter } from "next/router";

import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <div className=" gap-x-40 flex flex-row font-bold text-white items-center justify-between">
      <div className="ml-5">
        <img
          className="h-10 cursor-pointer"
          src="https://res.cloudinary.com/codegowdacloud/image/upload/v1635327710/image-removebg-preview_jq9vzi.png"
          onClick={() => router.push("/")}
          alt="Byteslash"
        ></img>
      </div>
      <div className="hidden xl:inline-flex gap-x-20 2xl:gap-x-40 items-center justify-center">
        <h1 className="hover:border-white hover:border-b-2 cursor-pointer text-md">
          Meet the team
        </h1>
        <h1 className="hover:border-white hover:border-b-2 cursor-pointer text-md">
          History
        </h1>
        <h1 className="hover:border-white hover:border-b-2 cursor-pointer text-md">
          Our Motive
        </h1>
        <h1 className="hover:border-white hover:border-b-2 cursor-pointer text-md">
          ByteSlash Blog
        </h1>
      </div>
      <div className="hidden sm:inline-flex items-center justify-center gap-10">
        <Link href="https://github.com/byteslash-hub/byteslash-website">
          <AiFillGithub
            size="40"
            className="cursor-pointer hover:opacity-50 transition duration-300"
          />
        </Link>
        <Link href="https://www.instagram.com/byteslash.hub/">
          <AiFillInstagram
            size="40"
            className="cursor-pointer hover:opacity-50 transition duration-300"
          />
        </Link>
        <Link href="https://twitter.com/ByteSlashHQ">
          <AiFillTwitterCircle
            size="40"
            className="cursor-pointer hover:opacity-50 transition duration-300"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;

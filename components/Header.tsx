import { AiFillGithub } from "react-icons/ai";

import Link from "next/link";

function Header() {
  return (
    <div className=" space-x-40 flex flex-row font-bold text-white items-center ">
      <div className="ml-5">
        <img
          className="h-10"
          src="https://res.cloudinary.com/codegowdacloud/image/upload/v1635327710/image-removebg-preview_jq9vzi.png"
        ></img>
      </div>
      <h1 className="hover:border-white hover:border-b-2 cursor-pointer">
        Meet the team
      </h1>
      <h1 className="hover:border-white hover:border-b-2 cursor-pointer">
        History
      </h1>
      <h1 className="hover:border-white hover:border-b-2 cursor-pointer">
        Our Motive
      </h1>
      <h1 className="hover:border-white hover:border-b-2 cursor-pointer">
        ByteSlash Blog
      </h1>
      <Link href="https://github.com/byteslash-hub/byteslash-website">
        <AiFillGithub size="35" className="cursor-pointer" />
      </Link>
    </div>
  );
}

export default Header;

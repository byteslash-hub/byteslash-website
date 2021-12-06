function Text() {
  return (
    <div className="mt-20 xl:mt-40 ml-6">
      <h1 className="text-primary text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        What is ByteSlash?
      </h1>
      <h1 className="text-white w-full mt-10 text-xl xl:text-2xl mb-14 lg:mb-16 xl:mb-18 2xl:mb-20 ml-1 lg:ml-2">
        ByteSlash is a community for developers, designers and people who are
        interested in tech. It is targetted for all sort of skill levels.
      </h1>
      <a
        href="https://discord.gg/G6VemATM"
        target="_blank"
        rel="noopener"
        className="border-primary border-2 rounded-full text-primary p-4 md:p-4 text-[11px] md:text-lg xl:text-xl hover:bg-primary hover:text-white cursor-pointer transition duration-300 xl:ml-1"
      >
        Join the Discord Community
      </a>
    </div>
  );
}

export default Text;

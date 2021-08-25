const Social = () => {
  return (
    <div className="fixed top-1/2 left-10  transform -translate-y-2/4 w-16 h-64 z-40 p-2 flex items-center justify-evenly flex-col">
      <a href="https://github.com/Ajal333" target="__blank">
        <i
          data-feather="github"
          color="white"
          className="cursor-pointer hover:text-reddish transition-colors duration-200"
        />
      </a>
      <a href="http://linkedin.com/in/ajal" target="__blank">
        <i
          data-feather="linkedin"
          color="white"
          className="cursor-pointer hover:text-reddish transition-colors duration-200"
        />
      </a>
      <a href="https://instagram.com/im_ajal" target="__blank">
        <i
          data-feather="instagram"
          color="white"
          className="cursor-pointer hover:text-reddish transition-colors duration-200"
        />
      </a>
      <a href="mailto:ajal.p1999@gmail.com">
        <i
          data-feather="send"
          color="white"
          className="cursor-pointer hover:text-reddish transition-colors duration-200"
        />
      </a>
      <a href="https://twitter.com/Ajal_333" target="__blank">
        <i
          data-feather="twitter"
          color="white"
          className="cursor-pointer hover:text-reddish transition-colors duration-200"
        />
      </a>
    </div>
  );
};

export default Social;

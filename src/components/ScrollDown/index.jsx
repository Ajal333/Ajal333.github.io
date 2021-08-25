function ScrollDown() {
  return (
    <div className="w-full flex mt-10 cursor-pointer  animate-bounce-slow">
      <a>
        <span className="cursor-pointer text-whitish hover:text-reddish transition-colors duration-200">
          Know more
        </span>
        <span>
          <a href="" target="__blank">
            <i
              data-feather="chevrons-down"
              // color="white"
              className="cursor-pointer text-whitish hover:text-reddish transition-colors duration-200"
            />
          </a>
        </span>
      </a>
    </div>
  );
}

export default ScrollDown;

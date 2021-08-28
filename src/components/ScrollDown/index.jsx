function ScrollDown() {
  return (
    <a
      href="#skills"
      className="w-full flex mt-10  text-whitish hover:text-reddish transition-colors duration-200 cursor-pointer items-center justify-center md:justify-start  animate-bounce-slow"
    >
      <span>Know more</span>
      <span>
        <i data-feather="chevrons-down" />
      </span>
    </a>
  );
}

export default ScrollDown;

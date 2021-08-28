import Styles from "./index.module.scss";

function Nav() {
  return (
    <nav
      className={`${Styles.glassmorph} w-11/12 h-16 md:w-3/4 xl:w-1/4 lg:w-2/4 md:h-20  rounded-xl fixed left-1/2 top-6 transform -translate-x-2/4 flex items-center justify-center z-50`}
    >
      <div className="hidden  flex-1 md:flex items-center justify-start ml-5 cursor-pointer ">
        <div className="bg-greyish rounded-full w-16 h-16 flex items-center justify-center hover:bg-reddish transition-colors duration-700 ">
          <img src="/assets/m2.jpg" className="w-12 h-12 rounded-full" />
        </div>
        {/* <p className={`text-whitish font-semibold text-lg`}>Ajal</p> */}
      </div>
      <div className="flex-1 flex items-center justify-evenly">
        <a href="#home">
          <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish transition-colors duration-500">
            Home
          </p>
        </a>
        <a href="#skills">
          <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish  transition-colors duration-500">
            Skills
          </p>
        </a>
        <a href="#contacts" className="md:hidden">
          <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish  transition-colors duration-500">
            Contact
          </p>
        </a>
      </div>
    </nav>
  );
}
export default Nav;

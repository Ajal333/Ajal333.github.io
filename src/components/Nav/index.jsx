import Styles from "./index.module.scss";

function Nav() {
  return (
    <nav
      className={`${Styles.glassmorph} w-2/4 h-20  rounded-xl fixed left-1/2 top-6 transform -translate-x-2/4 flex items-center justify-center z-50`}
    >
      <div className="flex-1 flex items-center justify-start ml-5 cursor-pointer">
        <div className="bg-greyish rounded-full w-16 h-16 flex items-center justify-center hover:bg-reddish transition-colors duration-700 ">
          <img src="/assets/m2.jpg" className="w-12 h-12 rounded-full" />
        </div>
        {/* <p className={`text-whitish font-semibold text-lg`}>Ajal</p> */}
      </div>
      <div className="flex-1 flex items-center justify-evenly">
        <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish transition-colors duration-500">
          Home
        </p>
        <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish  transition-colors duration-500">
          Projects
        </p>
        <p className="text-whitish font-semibold text-lg cursor-pointer hover:text-reddish  transition-colors duration-500">
          Contact
        </p>
      </div>
    </nav>
  );
}
export default Nav;

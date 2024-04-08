import useDarkMode from "use-react-dark-mode";

import { useDispatch } from "react-redux";
import { addToTheme } from "../Redux/invoice";

function Control() {
  const { isDark, toggle } = useDarkMode();
  const dispatch = useDispatch();

  if (!isDark) {
    dispatch(addToTheme("light"));
  } else {
    dispatch(addToTheme("dark"));
  }

  return (
    <div className=" absolute max-w-full z-100  w-full top-0 left-0 h-[72px] md:h-[80px] bg-[#373B53] flex justify-between  lg:flex-col items-center lg:max-w-[103px] lg:w-[103px] lg:h-[100vh] lg:rounded-tr-[28px] lg:rounded-br-[27px]">
      <img
        className=" w-[72px] h-[72px] md:w-[80px] md:h-[80px] lg:w-[103px] lg:h-[103px]"
        src="/logo.png"
        alt="logo
      "
      />

      <div className="flex gap-4 md:gap-5 lg:gap-6 lg:flex-col items-center h-full lg:h-0  lg:w-full mr-3 lg:mb-20  lg:justify-center">
        <button onClick={toggle}>
          <img
            className=" transition-all"
            src={`/${isDark ? "lightIcon" : "darkIcon"}.svg`}
            width={20}
            height={20}
            alt=""
          />
        </button>

        <div className="h-full w-[1px] bg-[#494E6E] lg:min-h-[1px] lg:w-full"></div>

        <img className=" cursor-pointer" src="/Oval.svg" alt="" />
      </div>
    </div>
  );
}

export default Control;

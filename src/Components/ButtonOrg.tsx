function ButtonOrg(props: {
  add?: string;
  text?: string;
  idet?: boolean;
  del?: boolean;
  save?: boolean;
  item?: boolean;
  onclick?: any;
  type?: any;
  ordinary?: any;
}) {
  return (
    <button
      type={props.type}
      onClick={props.onclick}
      className={`  ${
        props.idet
          ? "bg-[#F9FAFE] pt-[4px] w-[73px] text-[#7E88C3] dark:bg-[#252945] dark:text-[#DFE3FA] hover:bg-[#DFE3FA] dark:hover:bg-[#FFFFFF] dark:hover:bg-opacity-[0.2] dark:hover:text-[#DFE3FA]"
          : ""
      } font-bold text-[15px]     ${
        props.add
          ? " pb-1 md:pr-3 md:pl-2 hover:bg-[#9277FF] bg-[#7C5DFA] text-[#FFFFFF]  "
          : ""
      } tracking-[-0.25px] ${!props.add ? "w-[131px] h-[48px]" : ""} ${
        props.del ? "bg-[#EC5757] text-white pt-[4px] hover:bg-[#FF9797] w-[89px] " : ""
      } ${
        props.item
          ? "w-[350px] bg-[#F9FAFE] md:mx-auto md:w-[504px] hover:bg-[#DFE3FA] dark:bg-[#252945]  dark:hover:bg-[#363b5a] dark:text-[#DFE3FA]"
          : ""
      } ${
        props.item ? " text-[#4f5a98] hover:text-white" : ""
      } leading-[15px] flex gap-2 items-center rounded-[25px] pt-1 transition-all px-2  h-[48px] justify-center ${
        props.save
          ? "bg-[#373B53] text-[#888EB0] hover:bg-[#0C0E16] dark:bg-[#373B53] dark:text-[#DFE3FA] dark:hover:bg-[#1E2139] "
          : ""
      } ${
        props.ordinary ? "hover:bg-[#9277FF] bg-[#7C5DFA] text-[#FFFFFF]" : ""
      } `}
    >
      {props.add ? (
        <img width={32} height={32} alt="add" src={props.add} />
      ) : null}
      {props.text}
    </button>
  );
}

export default ButtonOrg;

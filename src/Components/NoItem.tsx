

function NoItem() {
  return (
    <div className="flex flex-col gap-8 lg:gap-14 mt-[10vh] md:mt-[7vh] md:gap-12  lg:mt-[4vh] items-center">
      <img
        src="/NoItem.png"
        className=" w-[193px] h-[160px] md:w-[242px] md:h-[200px]"
        alt=""
      />
      <div className="flex flex-col gap-4  items-center">
        <h1 className="font-bold text-[24px] leading-[23px] items-center tracking-[-0.75px]">
          There is nothing here
        </h1>
        <span className="font-[500] w-[176px] md:w-[193px] text-[#888EB0] dark:text-[#DFE3FA] text-center  text-[13px] leading-[15px] tracking-[-0.1px]">
          Create an invoice by clicking the{" "}
          <span className="font-bold hidden md:inline">New Invoice</span>
          <span className="font-bold  inline md:hidden">New</span> button and
          get started
        </span>
      </div>
    </div>
  );
}

export default NoItem;

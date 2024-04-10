import PaymentBtn from "./PaymentBtn";

function Card({
  prahe,
  Date,
  Name,
  total,
  status,
  onclick,
}: {
  prahe?: string;
  Date?: string;
  onclick?: any;
  Name?: string;
  total?: any;
  status?: string;
}) {
  return (
    <div onClick={onclick} className="bg-[#FFFFFF]  rounded-lg  shadow-[0px_10px_10px_-10px_#48549F1A] cursor-pointer dark:bg-[#1E2139] md:w-[672px] lg:w-[730px]  md:rounded-xl hover:border-[1px] hover:border-[#7C5DFA] dark:shadow-[0px_10px_10px_-10px_#48549F1A] px-4 py-5   flex justify-between transition-all  items-center ">
      <div className="flex flex-col md:items-center  md:flex-row  md:gap-8 ">
        <span className="font-bold text-[15px]  mb-5 md:mb-0 leading-[15px] tracking-[-0.25px] transition-all">
          <span className="text-[#858BB2]">#</span>
          {prahe}
        </span>
        <div className="flex flex-col  md:flex-row md:items-center md:justify-between md:w-[60vh]  gap-1">
          <span className="font-[500] dark:text-[#DFE3FA] text-[13px] leading-[15px] tracking-[-0.1px] text-[#858BB2]">
            {Date}
          </span>
          <span className="font-[500] hidden md:block dark:text-[#FFFFFF] text-[13px] leading-[15px] tracking-[-0.1px] text-[#858BB2]">
            {Name}
          </span>
          <span className="font-bold text-[15px] transition-all leading-[24px] tracking-[-0.25px]">
            £ {total}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5 items-end md:items-center">
        <span className="font-[500] block md:hidden text-[13px] dark:text-[#FFFFFF] leading-[15px] tracking-[-0.1px] text-[#858BB2]">
          {Name}
        </span>
        <PaymentBtn
          paid={status == "Paid" ? true : false}
          pinding={status == "Pending" ? true : false}
          draft={status == "Draft" ? true : false}
        />
        <img className="hidden md:block" src="/enter.svg" alt="" />
      </div>
    </div>
  );
}

export default Card;

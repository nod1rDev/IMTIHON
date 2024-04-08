import React from "react";
import BoldText from "./BoldText";

function Orderr({
  OrderText,
  orderAmount,
  orderPrice,
  orderOverallPrice,
}: {
  OrderText: string;
  orderAmount: string;
  orderPrice: string;
  orderOverallPrice: any;
}) {
  return (
    <div className="flex w-full justify-between ">
      <BoldText text={OrderText} />
      <div className="flex w-[44%] justify-between ">
        <span className="font-bold text-[15px] leading-[15px]  tracking-[-0.25px] text-[#7E88C3] dark:text-[#DFE3FA]">
          {orderAmount}
        </span>
        <span className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] dark:text-[#DFE3FA]">
          £ {orderPrice}
        </span>
        <span className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] dark:text-[#DFE3FA]">
          £ {orderOverallPrice}
        </span>
      </div>
    </div>
  );
}

export default Orderr;

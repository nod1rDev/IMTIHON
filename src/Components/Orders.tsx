import BoldText from "./BoldText";

function Orders({
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
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col  gap-2">
        <BoldText text={OrderText} />

        <span className="text-[#7E88C3] dark:text-[#888EB0] font-bold text-[15px] leading-[15px] tracking-[-0.25px]">
          {orderAmount} x £ {orderPrice}
        </span>
      </div>
      <BoldText text={`£ ${orderOverallPrice}`} />
    </div>
  );
}

export default Orders;

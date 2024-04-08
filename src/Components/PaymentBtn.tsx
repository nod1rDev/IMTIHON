function PaymentBtn({
  paid,
  pinding,
  draft,
}: {
  paid?: boolean;
  pinding?: boolean;
  draft?: boolean;
}) {
  return (
    <button
      className={`${paid ? " bg-[#33D69F] text-[#33D69F]  " : ""} ${
        pinding ? "bg-[#FF8F00] text-[#FF8F00]" : ""
      } ${
        draft ? "bg-[#373B53] text-[#373B53]" : ""
      } w-[104px] flex gap-2  items-center rounded-md bg-opacity-[0.2] h-[40px] font-bold text-[15px] leading-[15px] tracking-[-0.25px] justify-center`}
    >
      <img
      className="mb-1"
        width={8}
        height={8}
        src={
          paid
            ? "/paid.svg"
            : pinding
            ? "/pinding.svg"
            : draft
            ? "/draft.svg"
            : ""
        }
        alt="."
      />
      {paid ? "Paid" : pinding ? "Pending" : draft ? "Draft" : ""}
    </button>
  );
}

export default PaymentBtn;

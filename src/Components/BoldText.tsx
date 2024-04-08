function BoldText({ text }: { text: string }) {
  return (
    <div className="font-bold text-[15px] leading-[20px]  tracking-[-0.25px]">
      {text}
    </div>
  );
}

export default BoldText;

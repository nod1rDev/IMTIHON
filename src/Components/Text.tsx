function Text({ text }: { text: string }) {
  return (
    <div className="text-[#7E88C3] font-[500] text-[13px] leading-[15px] tracking-[-0.1px] dark:text-[#DFE3FA]">
      {text}
    </div>
  );
}

export default Text;

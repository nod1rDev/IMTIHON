import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

function Item({
  itemN,
  qty,
  qtyName,
  onchange,
  onclick,
  price,
  priceN,
  total,
  del,
  id,
}: {
  itemN?: string;
  priceN?: string;
  qty?: any;
  id?: any;
  del?: any;
  total?: string;
  price?: any;
  qtyName?: string;
  onchange?: any;
  onclick?: any;
  value?: number;
}) {
  const theme = useSelector((state: any) => state.invoice.them);
  return (
    <>
      {theme == "light" ? (
        <div
          onClick={onclick}
          className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between"
        >
          <div className="flex flex-col ">
            <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
              Item Name
            </label>
            <TextField
              id="outlined-basic"
              sx={{
                width: { xs: "100%", md: "214px" },
                input: {
                  border: "1px solid #DFE3FA",
                  fontWeight: "700",
                  color: "#0C0E16",
                },
              }}
              onChange={(e) => onchange(e)}
              value={itemN}
              variant="outlined"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Qty.
              </label>
              <TextField
                id="outlined-basic"
                sx={{
                  width: { xs: "64px", md: "46px" },
                  input: {
                    border: "1px solid #DFE3FA",
                    fontWeight: "700",
                    color: "#0C0E16",
                  },
                }}
                onChange={(e) => qty(e)}
                value={qtyName}
                variant="outlined"
              />
            </div>

            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Price
              </label>
              <TextField
                id="outlined-basic"
                sx={{
                  width: { xs: "100px", md: "100px" },
                  input: {
                    border: "1px solid #DFE3FA",

                    borderRadius: "5px",
                    fontWeight: "700",
                    color: "#0C0E16",
                  },
                }}
                onChange={(e) => price(e)}
                value={priceN}
                variant="outlined"
              />
            </div>
            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Total
              </label>
              <div className="h-[54px]  flex justify-start items-center w-[80px] md:w-[50px] lg:w-[60px]  text-[#888EB0] font-bold dark:text-[#DFE3FA]">
                {Number(priceN) * Number(qtyName)}
              </div>
            </div>

            <button
              onClick={(e) => del(e, id)}
              type="button"
              className="h-[54px] pt-7 w-[40px] lg:w-[20px]  md:w-[20px] ml-1"
            >
              <img width={16} height={16} src="/delIcon.svg" alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={onclick}
          className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between"
        >
          <div className="flex flex-col ">
            <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
              Item Name
            </label>
            <TextField
              id="outlined-basic"
              sx={{
                width: { xs: "100%", md: "214px" },
                input: {
                  border: "1px solid #252945",
                  bgcolor: "#1E2139",
                  borderRadius: "5px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                },
              }}
              onChange={(e) => onchange(e)}
              value={itemN}
              variant="outlined"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Qty.
              </label>
              <TextField
                id="outlined-basic"
                sx={{
                  width: { xs: "64px", md: "46px" },
                  input: {
                    border: "1px solid #252945",
                    bgcolor: "#1E2139",
                    borderRadius: "5px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                  },
                }}
                onChange={(e) => qty(e)}
                value={qtyName}
                variant="outlined"
              />
            </div>

            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Price
              </label>
              <TextField
                id="outlined-basic"
                sx={{
                  width: { xs: "100px", md: "100px" },
                  input: {
                    border: "1px solid #252945",
                    bgcolor: "#1E2139",
                    borderRadius: "5px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                  },
                }}
                onChange={(e) => price(e)}
                value={priceN}
                variant="outlined"
              />
            </div>

            <div className="flex flex-col ">
              <label className="font-[500] text-[#7E88C3] text-[13px] leading-[15px] ">
                Total
              </label>
              <div className="h-[54px]  flex justify-start items-center w-[80px] md:w-[50px] lg:w-[60px] text-[#888EB0] font-bold dark:text-[#DFE3FA]">
                {Number(priceN) * Number(qtyName)}
              </div>
            </div>
            <button
              onClick={(e) => del(e, id)}
              type="button"
              className="h-[54px] pt-7 w-[40px] lg:w-[20px]  md:w-[20px] ml-1"
            >
              <img width={16} height={16} src="/delIcon.svg" alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Item;

import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function InputOrg({
  label,
  def,
  valuee,
  oncahnege,
  size,
  namee,
  month,
  desabled,
  date,
  defaultValuee,
  phone,
  nodirbek,
  nimadur,
}: {
  label?: string;
  defaultValuee?: any;
  def?: string;
  nimadur?: boolean;
  valuee?: any;
  oncahnege?: any;
  size?: string;
  namee: string;
  month?: boolean;
  date?: string;
  desabled?: boolean;
  phone?: boolean;
  nodirbek?: boolean;
}) {
  const theme = useSelector((state: any) => state.invoice.them);
  const [defaul, setdefoult] = useState(def ? def : "complate..");
  
  const chanegee = (e: React.ChangeEvent<HTMLInputElement>) => {
    oncahnege(e);
    setdefoult(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-[#7E88C3] mb-[-10px] font-[500] text-[13px] leading-[15px]">
        {label}
      </label>
      {theme == "light" ? (
        <TextField
          id="outlined-basic"
        
          disabled={desabled}
          name={namee}
          defaultValue={defaultValuee}
          error={!valuee && defaul == "" ? true : false}
          value={!defaul ? valuee : null}
          onChange={chanegee}
          sx={{
            border: "1px solid #DFE3FA",
            borderRadius: "5px",
            bgcolor: "inherit",
            minWidth: { size },

            input: {
              color: "inherit",
              fontWeight: "700",
              fontSize: "15px",
              zIndex: 10,

              maxWidth: phone ? "330px" : { size },
              width: phone ? { xs: "320px" } : nodirbek ? "240px" : { size },
              flex: 1,
            },
          }}
          variant="outlined"
          type={`${month ? "date" : "text"}`}
        />
      ) : (
        <TextField
          value={!defaul ? valuee : null}
        
          name={namee}
          defaultValue={defaultValuee}
          disabled={desabled}
          onChange={chanegee}
          id="outlined-basic"
          error={!valuee && defaul == "" ? true : false}
          sx={{
            border: "1px solid #1E2139",
            borderRadius: "5px",
            bgcolor: "#252945",
            minWidth: { size },

            input: {
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "15px",
              zIndex: 10,
              maxWidth: phone ? "330px" : { size },
              width: phone ? { xs: "320px" } : nodirbek ? "240px" : { size },
              flex: 1,
            },
          }}
          variant="outlined"
          type={`${month ? "date" : "text"}`}
        />
      )}
    </div>
  );
}

export default InputOrg;

import Control from "../Components/Control";
import FormList from "../Components/FormList";
import { Outlet } from "react-router-dom";
import UpdateForm from "../Components/UpdateForm";

function Root() {
  return (
    <div className=" relative transition-all ">
      <Control />
      <FormList /> 
      <UpdateForm />
      <div className=" md:overflow-y-scroll  md:overflow-x-hidden md:h-[694px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;

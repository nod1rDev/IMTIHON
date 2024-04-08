import Control from "../Components/Control";
import FormList from "../Components/FormList";
import { Outlet } from "react-router-dom";
import UpdateForm from "../Components/UpdateForm";

function Root() {
  return (
    <div className=" relative ">
      <Control />
      <FormList />
      <UpdateForm />
      <Outlet />
    </div>
  );
}

export default Root;

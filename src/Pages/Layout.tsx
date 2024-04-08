import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { DB } from "../Firebase/firebase";
import ButtonOrg from "../Components/ButtonOrg";
import { formShow } from "../Modal/modal";
import Card from "../Components/Card";
import NoItem from "../Components/NoItem";
import { useNavigate } from "react-router-dom";
const statuses: string[] = ["Draft", "Pending", "Paid"];
function Layout() {
  const [items, setItems] = useState<any[]>();
  const [selected, setSelected] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>();
  //obtain items from firebase
  useEffect(() => {
    const reff = ref(DB, "invoices/");
    onValue(reff, (snap) => {
      const data = snap.val();

      setItems(Object.values(data));
    });
  }, []);
  const navigate = useNavigate();
  //filter by status
  const filterStatus = (e: string, i: number) => {
    setChecked(i);

    const reff = ref(DB, "invoices/");
    onValue(reff, (snap) => {
      const data = snap.val();

      const itemm = Object.values(data);
      const filteredItems = itemm.filter((item: any) => item.status === e);
      setItems(filteredItems);
    });
  };
  //open select
  const openSelect = () => {
    let selectedEl: any = document.getElementById("select");
    let SelectIconEl = document.getElementById("selectIcon");
    setSelected(!selected);

    if (selected) {
      selectedEl.classList.add("hidden");
      selectedEl.classList.remove("flex");

      SelectIconEl?.setAttribute("src", "/select.svg");
    } else {
      selectedEl.classList.remove("hidden");
      selectedEl.classList.add("flex");
      SelectIconEl?.setAttribute("src", "/openSelect.svg");
    }
  };
  return (
    <div className="flex flex-col h-full mx-auto gap-6 md:gap-[40px] max-w-[730px]  px-6 md:px-3 lg:px-0 pt-[17vh] lg:pt-[10vh] md:pt-[22vh] lg:gap-[85px] ">
      <div className="flex  justify-between items-center max-w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-[24px] leading-[22.08px] tracking-[-0.75px] md:text-[36px] md:leading-[33.12px] md:tracking-[-1.13px]  ">
            Invoices
          </h1>
          <span className="font-[500] block md:hidden text-[#888EB0] text-[13px] leading-[15px] tracking-[-0.1px]">
            {items ? items.length +" " + " invoices" : "no invoice"}
          </span>
          <span className="font-[500] hidden md:block text-[#888EB0] text-[13px] leading-[15px] tracking-[-0.1px]">
            {items
              ? "There are" + " " + items.length + " " + "total invoices"
              : "no invoice"}
          </span>
        </div>

        <div className="flex gap-2 md:gap-3 items-center">
          <button
            onClick={openSelect}
            className="  relative  leading-[15px]  flex  gap-2 items-center"
          >
            <span className="font-bold text-[15px] block md:hidden tracking-[-0.25px]">
              Filter
            </span>
            <span className="font-bold text-[15px] hidden md:block tracking-[-0.25px]">
              Filter by status
            </span>
            <img
              id="selectIcon"
              src="/select.svg"
              width={9}
              height={5}
              alt=""
            />
            <div
              onClick={(e) => e.stopPropagation()}
              id="select"
              className=" hidden absolute rounded z-40 w-[192px] md:w-[192px] h-[128px] top-6  right-0 p-6 bg-[#FFFFFF]  flex-col gap-3 shadow-[0px_10px_20px_0px_#48549F40] dark:shadow-[0px_10px_20px_0px_#00000040] dark:bg-[#252945]"
            >
              {statuses.map((e: string, i: number) => (
                <div
                  key={i}
                  onClick={() => filterStatus(e, i)}
                  className="flex items-end gap-3"
                >
                  <input
                    checked={i == checked ? true : false}
                    className=" bg-[#DFE3FA] w-[16px] h-[16px] cursor-pointer rounded-[2px] border-none hover:border-[1px] hover:border-[#7C5DFA] text-[#7C5DFA]"
                    type="checkbox"
                  />
                  <span className="font-bold text-[15px] leading-[15px]">
                    {e}
                  </span>
                </div>
              ))}
            </div>
          </button>
          <div className="block md:hidden">
            <ButtonOrg onclick={formShow} add="/addButton.svg" text="New" />
          </div>
          <div className="hidden md:block">
            <ButtonOrg
              onclick={formShow}
              add="/addButton.svg"
              text="New Invoice"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-5 md:mx-auto ">
        {items ? (
          items.map((e) => (
            <Card
              key={e.prahe}
              onclick={() => navigate("incoice/" + e.prahe)}
              Name={e.clintName}
              Date={e.Date}
              prahe={e.prahe}
              total={e.totalPrice}
              status={e.status}
            />
          ))
        ) : (
          <NoItem />
        )}
      </div>
    </div>
  );
}

export default Layout;

import { useEffect, useState } from "react";
import { updateClose } from "../Modal/modal";
import Alert from "@mui/material/Alert";
import InputOrg from "./InputOrg";
import Item from "./Item";
import ButtonOrg from "./ButtonOrg";
import { useDispatch, useSelector } from "react-redux";
import { addToItem } from "../Redux/invoice";
import { ref,  update } from "firebase/database";
import { DB } from "../Firebase/firebase";
import { useChosePrahe } from "../Hooks/useChoosePrehe";
import { useDate } from "../Hooks/useDate";
import Alertt from "./Alert";


//select options
const SelectOptions = [
  "Next 1 day",
  "Next 7 day",
  "Next 14 day",
  "Next 30 day",
];

export default function UpdateForm() {
  //save From Values
  const [value, setValue] = useState<any>({
    fromAddress: "",
    fromCity: "",
    fromPost: "",
    fromCountry: "",
    clintName: "",
    clintEmail: "",
    clintAddress: "",
    clintCity: "",
    clintPost: "",
    clintCountry: "",
    Idate: "",
    IPayment: "",
    IProject: "",
  });
  //selected
  const [selected, setSelected] = useState<number>(0);
  //Item count
  const [itemCount, setItemCount] = useState<number>(1);
  //Item All calculate
  const [item, setItem] = useState<any>([]);
  //qty
  const [qty, setQty] = useState<string>("1");
  //active Item
  const [activeItem, setActiveItem] = useState(0);
  //itemName
  const [itemName, setItemName] = useState<any>("");
  const dispatch = useDispatch();
  //item Price
  const [itemPrice, setItemPrice] = useState("");
  //total item
  const [itemTotal, setItemTotal] = useState(0);
  //total Price
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [DATA, setDATA] = useState<any>("");

  const currentItem = useSelector((state: any) => state.invoice.currentItem);

  useEffect(() => {
    setDATA(currentItem);
  }, []);


  // SubmitForm
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  //count
  const [count, setCount] = useState<number>(1);
  //Alert
  const [Saved, setSaved] = useState<boolean>(false);
  //error Alert
  const [error, setError] = useState<boolean>(false);

  //change input values
  const handleChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //select Input to Form
  useEffect(() => {
    setValue({ ...value, IPayment: SelectOptions[selected] });
  }, [selected]);
  //setError Time
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 5000);
    }
  }, [error]);
  //add item
  const handleItem = () => {
    setItemCount(itemCount + 1);
    const itemNamee = `itemNamee` + itemCount;
    const itemHow = `itemHow` + itemCount;
    const itemPrice = `itemPrice` + itemCount;
    const itemTotal = `itemTotal` + itemCount;
    setItem([
      ...item,
      {
        id: itemCount,
        [itemNamee]: "",
        [itemHow]: "",
        [itemPrice]: "",
        [itemTotal]: "",
      },
    ]);
    setItemName("");
    setQty("");
    setItemPrice("");
    setItemTotal(0);
    dispatch(addToItem(item));
  };

  //complate item form
  useEffect(() => {
    if (activeItem == 0) {
      item.forEach((itemm: any) => {
        if (itemm.id == 1) {
          if (itemName.length > 9) {
            itemm.itemNamee1 = itemName;
          }

          qty !== "" ? (itemm.itemHow1 = qty) : "";

          if (itemPrice !== "") {
            itemm.itemPrice1 = itemPrice;
            setItemTotal(+itemm.itemPrice1 * +itemm.itemHow1);
            setTimeout(
              () =>
                setTotalPrice(totalPrice + +itemm.itemPrice1 * +itemm.itemHow1),
              5000
            );

            itemm.itemTotal1 = itemTotal;
          }
        }
      });
    } else if (activeItem == 1) {
      item.forEach((itemm: any) => {
        if (itemm.id == 2) {
          if (itemName.length > 9) {
            itemm.itemNamee2 = itemName;
          }
          qty !== "" ? (itemm.itemHow2 = qty) : "";
          if (itemPrice !== "") {
            itemm.itemPrice2 = itemPrice;
            setItemTotal(+itemm.itemPrice2 * +itemm.itemHow2);
            setTimeout(
              () =>
                setTotalPrice(totalPrice + +itemm.itemPrice2 * +itemm.itemHow2),
              5000
            );

            itemm.itemTotal2 = itemTotal;
          }
        }
      });
    } else if (activeItem == 2) {
      item.forEach((itemm: any) => {
        if (itemm.id == 3) {
          if (itemName.length > 9) {
            itemm.itemNamee3 = itemName;
          }
          qty !== "" ? (itemm.itemHow3 = qty) : "";
          if (itemPrice !== "") {
            itemm.itemPrice3 = itemPrice;
            setItemTotal(+itemm.itemPrice3 * +itemm.itemHow3);
            setTimeout(
              () =>
                setTotalPrice(totalPrice + +itemm.itemPrice3 * +itemm.itemHow3),
              5000
            );

            itemm.itemTotal3 = itemTotal;
          }
        }
      });
    } else if (activeItem == 3) {
      item.forEach((itemm: any) => {
        if (itemm.id == 4) {
          if (itemName.length > 9) {
            itemm.itemNamee4 = itemName;
          }
          qty !== "" ? (itemm.itemHow4 = qty) : "";
          if (itemPrice !== "") {
            itemm.itemPrice4 = itemPrice;
            setItemTotal(+itemm.itemPrice4 * +itemm.itemHow4);
            setTimeout(
              () =>
                setTotalPrice(totalPrice + +itemm.itemPrice4 * +itemm.itemHow4),
              5000
            );
            itemm.itemTotal4 = itemTotal;
          }
        }
      });
    } else if (activeItem == 4) {
      item.forEach((itemm: any) => {
        if (itemm.id == 5) {
          if (itemName.length > 9) {
            itemm.itemNamee5 = itemName;
          }
          qty !== "" ? (itemm.itemHow5 = qty) : "";
          if (itemPrice !== "") {
            itemm.itemPrice5 = itemPrice;
            setItemTotal(+itemm.itemPrice5 * +itemm.itemHow5);
            setTimeout(
              () =>
                setTotalPrice(totalPrice + +itemm.itemPrice5 * +itemm.itemHow5),
              5000
            );

            itemm.itemTotal5 = itemTotal;
          }
        }
      });
    }

    if (count == 2) {
      setCount(1);
    }
  }, [itemName, qty, itemPrice, itemTotal]);

  const delate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    const filtItem = item.filter((e: any) => e.id !== id);
    setItem(filtItem);
  };

  //save Form
  const saveForm = () => {
    const dataId = useChosePrahe();
    if (
      value.fromAddress &&
      value.fromPost &&
      value.clintCity &&
      value.Idate &&
      value.IProject
    ) {
      update(ref(DB, "invoices/" + DATA.prahe), {
        prahe: dataId,
        status: "Pending",
        Date: useDate(),
        totalPrice: totalPrice,
        fromAddress: value.fromAddress,
        fromCity: value.fromCity,
        fromPost: value.fromPost,
        fromCountry: value.fromCountry,
        clintName: value.clintName,
        clintEmail: value.clintEmail,
        clintAddress: value.clintAddress,
        clintCity: value.clintCity,
        clintPost: value.clintPost,
        clintCountry: value.clintCountry,
        Idate: value.Idate,
        IPayment: value.IPayment,
        IProject: value.IProject,
        AllItem: item,
      });
      setSaved(true);
    
      updateClose();
    } else {
    
      updateClose();
      setError(true);
    }
  };
  const canle = () => {
  
    updateClose();
  };
  return (
    <>
      {Saved ? <Alertt /> : ""}
      {error ? (
        <div className=" absolute top-20 right-2 md:top-24 md:right-3 lg:top-10 lg:right-6">
          <Alert severity="error" onClose={() => setError(false)}>
            Unncorrectly changed invoice form!
          </Alert>
        </div>
      ) : (
        ""
      )}

      <dialog
        id="updateModal"
        className="modal  backdrop:z-10  lg:backdrop:mt-0   md:backdrop:mt-[80px] lg:backdrop:ml-[103px]    bg-inherit"
      >
        <div className="modal-box px-0 py-0 bg-[#FFFFFF]  overflow-y-auto md:px-[20px]   min-w-full absolute  lg:px-[30px] left-0  z-10 lg:top-0 rounded-none  md:min-w-[80%] lg:min-w-[616px] min-h-full rounded-tl-[-50px]    lg:left-[103px] md:left-0 md:top-[80px] dark:bg-[#141625]">
          <div className="flex flex-col pt-6 px-4">
            <button
              onClick={() => updateClose()}
              className="flex text-[15px] mb-6 font-bold leading-[15px] gap-4 md:hidden  items-center"
            >
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.3418 0.885742L0.113895 5.11364L4.3418 9.34155"
                  stroke="#7C5DFA"
                  stroke-width="2"
                />
              </svg>
              Go back
            </button>

            <h1 className="text-[24px] leading-[32px] font-bold mb-6">
              Edit #{DATA.prahe ? DATA.prahe : "BT6243"}
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* from */}
              <div className="flex flex-col gap-4 ">
                <span className="font-bold text-[15px] text-[#7C5DFA]">
                  Bill From
                </span>

                <InputOrg
                  namee={"fromAddress"}
                  valuee={value.fromAddress}
                  oncahnege={handleChanege}
                  label="Street Address"
                  size="100%"
                 
                  defaultValuee={DATA ? DATA.fromAddress : "19 Union Terrace"}
                />
                <div className="flex gap-6 mb-4 max-w-full">
                  <InputOrg
                    namee={"fromCity"}
                    valuee={value.fromCity}
                    oncahnege={handleChanege}
                    label="City"
                    size="152px"
                    defaultValuee={DATA ? DATA.fromCity : "London"}
                  />
                  <InputOrg
                    namee={"fromPost"}
                    valuee={value.fromPost}
                    oncahnege={handleChanege}
                    label="Post Code"
                    defaultValuee={DATA ? DATA.fromPost : "E1 3EZ"}
                    size="152px"
                  />
                  <div className=" hidden md:block">
                    <InputOrg
                      namee={"fromCountry"}
                      valuee={value.fromCountry}
                      oncahnege={handleChanege}
                      label="Country"
                      size="152px"
                      defaultValuee={DATA ? DATA.fromCountry : "United Kingdom"}
                    />
                  </div>
                </div>

                <div className="block md:hidden">
                  <InputOrg
                    namee={"fromCountry"}
                    valuee={value.fromCountry}
                    defaultValuee={DATA ? DATA.fromCountry : "United Kingdom"}
                    oncahnege={handleChanege}
                    label="Country"
                    size="100%"
                  />
                </div>
              </div>

              {/* TO */}

              <div className="flex flex-col gap-4">
                <span className="font-bold text-[15px] text-[#7C5DFA]">
                  Bill To
                </span>
                <InputOrg
                  namee={"clintName"}
                  valuee={value.clintName}
                  oncahnege={handleChanege}
                  label="Client's Name"
                  size="100%"
                  defaultValuee={DATA ? DATA.clintName : "Alex Grim"}
                />

                <InputOrg
                  namee={"clintEmail"}
                  valuee={value.clintEmail}
                  oncahnege={handleChanege}
                  label="Client's Email"
                  size="100%"
                  defaultValuee={DATA ? DATA.clintEmail : "alexgrim@mail.com"}
                />

                <InputOrg
                  namee={"clintAddress"}
                  valuee={value.clintAddress}
                  oncahnege={handleChanege}
                  label="Street Address"
                  defaultValuee={DATA ? DATA.clintAddress : "84 Church Way"}
                  size="100%"
                />
                <div className="flex gap-6">
                  <InputOrg
                    namee={"clintCity"}
                    valuee={value.clintCity}
                    oncahnege={handleChanege}
                    label="City"
                    defaultValuee={DATA ? DATA.clintCity : "Bradford"}
                    size="152px"
                  />

                  <InputOrg
                    namee={"clintPost"}
                    valuee={value.clintPost}
                    oncahnege={handleChanege}
                    label="Post Code"
                    defaultValuee={DATA ? DATA.clintPost : "BD1 9PB"}
                    size="152px"
                  />
                  <div className="hidden md:block">
                    <InputOrg
                      namee={"clintCountry"}
                      valuee={value.clintCountry}
                      oncahnege={handleChanege}
                      label="Country"
                      size="100%"
                      defaultValuee={
                        DATA ? DATA.clintCountry : "United Kingdom"
                      }
                    />
                  </div>
                </div>
                <div className="block md:hidden">
                  <InputOrg
                    namee={"clintCountry"}
                    valuee={value.clintCountry}
                    oncahnege={handleChanege}
                    label="Country"
                    size="100%"
                    defaultValuee={DATA ? DATA.clintCountry : "United Kingdom"}
                  />
                </div>
                <div className="flex flex-col min-w-full items-center  md:flex-row gap-6 lg:gap-3 md:gap-4 relative">
                  <div>
                    <div className="block md:hidden">
                      <InputOrg
                        namee={"Idate"}
                        valuee={value.Idate}
                        oncahnege={handleChanege}
                        label="Invoice Date"
                        size="240px"
                        phone
                        defaultValuee={DATA ? DATA.Idate : "12/32/2024"}
                        month={true}
                      />
                    </div>
                    <div className="hidden md:block">
                      <InputOrg
                        namee={"Idate"}
                        valuee={value.Idate}
                        oncahnege={handleChanege}
                        label="Invoice Date"
                        size="240px"
                        nodirbek
                        defaultValuee={DATA ? DATA.Idate : "12/32/2024"}
                        month={true}
                      />
                    </div>
                    <img
                      className=" absolute top-[36px] z-1  left-[312px] md:top-[36px] md:left-[235px]"
                      src="/celendar.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:mt-0 ">
                    <span className="mb-2 text-[#7E88C3] font-[500] text-[13px] leading-[15px]">
                      Payment Terms
                    </span>
                    <select className="select select-bordered font-bold lg:w-[240px]   bg-inherit h-[55px] w-full md:w-[260px] dark:bg-[#1E2139] border-[2px] border-[#DFE3FA] dark:border-[#252945]  ">
                      {SelectOptions.map((e, i) => (
                        <option
                          className="border-b-[1px] border-[#DFE3FA] font-bold text-[15px] cursor-pointer active:text-[#7C5DFA]  h-[70px] w-full"
                          key={i}
                          selected={selected == i ? true : false}
                          onClick={() => setSelected(i)}
                        >
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <InputOrg
                  namee={"IProject"}
                  valuee={value.IProject}
                  oncahnege={handleChanege}
                  label="Project Description"
                  size="100%"
                  defaultValuee={DATA ? DATA.IProject : "Frontend Developer"}
                />

                <div className="flex flex-col w-full gap-6">
                  <span className="font-bold text-[18px] mb-2 leading-[32px] text-[#777F98]">
                    Item List
                  </span>
                  {item
                    ? item.map((e: any, i: number) => (
                        <Item
                          key={e.id}
                          onclick={() => setActiveItem(i)}
                          onchange={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setItemName(e.target.value)
                              : null
                          }
                          qty={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setQty(e.target.value)
                              : null
                          }
                          id={e.id}
                          price={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setItemPrice(e.target.value)
                              : null
                          }
                          
                          itemN={
                            i == 0 && e.itemNamee1 !== ""
                              ? e.itemNamee1
                              : i == 1 && e.itemNamee2 !== ""
                              ? e.itemNamee2
                              : i == 2 && e.itemNamee3 !== ""
                              ? e.itemNamee3
                              : i == 3 && e.itemNamee4 !== ""
                              ? e.itemNamee4
                              : i == 4 && e.itemNamee5 !== ""
                              ? e.itemNamee5
                              : activeItem == i
                              ? itemName
                              : ""
                          }
                          del={delate}
                          priceN={
                            i == 0 && e.itemPrice1 !== ""
                              ? e.itemPrice1
                              : i == 1 && e.itemPrice2 !== ""
                              ? e.itemPrice2
                              : i == 2 && e.itemPrice3 !== ""
                              ? e.itemPrice3
                              : i == 3 && e.itemPrice4 !== ""
                              ? e.itemPrice4
                              : i == 4 && e.itemPrice5 !== ""
                              ? e.itemPrice5
                              : activeItem == i
                              ? itemPrice
                              : ""
                          }
                          qtyName={
                            i == 0 && e.itemHow1 !== ""
                              ? e.itemHow1
                              : i == 1 && e.itemHow2 !== ""
                              ? e.itemHow2
                              : i == 2 && e.itemHow3 !== ""
                              ? e.itemHow3
                              : i == 3 && e.itemHow4 !== ""
                              ? e.itemHow4
                              : i == 4 && e.itemHow5 !== ""
                              ? e.itemHow5
                              : activeItem == i
                              ? qty
                              : "1"
                          }
                        />
                      ))
                    : DATA
                    ? DATA.AllItem.map((e: any, i: number) => (
                        <Item
                          key={e.id}
                          onclick={() => setActiveItem(i)}
                          onchange={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setItemName(e.target.value)
                              : null
                          }
                          qty={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setQty(e.target.value)
                              : null
                          }
                          id={e.id}
                          price={
                            activeItem == i
                              ? (e: React.ChangeEvent<HTMLInputElement>) =>
                                  setItemPrice(e.target.value)
                              : null
                          }
                         
                          itemN={
                            i == 0 && e.itemNamee1 !== ""
                              ? e.itemNamee1
                              : i == 1 && e.itemNamee2 !== ""
                              ? e.itemNamee2
                              : i == 2 && e.itemNamee3 !== ""
                              ? e.itemNamee3
                              : i == 3 && e.itemNamee4 !== ""
                              ? e.itemNamee4
                              : i == 4 && e.itemNamee5 !== ""
                              ? e.itemNamee5
                              : activeItem == i
                              ? itemName
                              : ""
                          }
                          del={delate}
                          priceN={
                            i == 0 && e.itemPrice1 !== ""
                              ? e.itemPrice1
                              : i == 1 && e.itemPrice2 !== ""
                              ? e.itemPrice2
                              : i == 2 && e.itemPrice3 !== ""
                              ? e.itemPrice3
                              : i == 3 && e.itemPrice4 !== ""
                              ? e.itemPrice4
                              : i == 4 && e.itemPrice5 !== ""
                              ? e.itemPrice5
                              : activeItem == i
                              ? itemPrice
                              : ""
                          }
                          qtyName={
                            i == 0 && e.itemHow1 !== ""
                              ? e.itemHow1
                              : i == 1 && e.itemHow2 !== ""
                              ? e.itemHow2
                              : i == 2 && e.itemHow3 !== ""
                              ? e.itemHow3
                              : i == 3 && e.itemHow4 !== ""
                              ? e.itemHow4
                              : i == 4 && e.itemHow5 !== ""
                              ? e.itemHow5
                              : activeItem == i
                              ? qty
                              : "1"
                          }
                        />
                      ))
                    : null}

                  <ButtonOrg
                    type={"button"}
                    onclick={handleItem}
                    item
                    text="+ Add New Item"
                  />
                </div>
              </div>
              <div className="flex md:hidden w-[62.6vh] justify-end -ml-4 px-4 gap-2   py-5 dark:bg-[#1E2139] items-center bg-[#FFFFFF] mt-9 shad shadow-[0px_10px_10px_-10px_#48549F1A]">
                <ButtonOrg onclick={canle} type={"button"} text="Cancel" idet />

                <ButtonOrg
                  type={"button"}
                  onclick={saveForm}
                  text="Save & Send"
                  ordinary={true}
                />
              </div>
              <div className=" hidden md:flex justify-end gap-2 items-center max-w-full">
                <ButtonOrg onclick={canle} type={"button"} text="Cancel" idet />

                <ButtonOrg
                  type={"button"}
                  onclick={saveForm}
                  text="Save Changes"
                  ordinary={true}
                />
              </div>
              <div className="hidden md:block h-[40px] md:h-[70px] lg:h-[0px] w-full bg-inherit"></div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

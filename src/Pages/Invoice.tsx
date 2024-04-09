import { onValue, ref, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { DB } from "../Firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";
import PaymentBtn from "../Components/PaymentBtn";
import Text from "../Components/Text";
import BoldText from "../Components/BoldText";
import Orders from "../Components/Orders";
import ButtonOrg from "../Components/ButtonOrg";
import Orderr from "../Components/Orderr";
import Alert from "@mui/material/Alert";
import { DeleteClose, DeleteShow, updateShow } from "../Modal/modal";
import { useDispatch } from "react-redux";
import { addCurrentItem, changeUpdate } from "../Redux/invoice";

function Invoice() {
  const [item, setItem] = useState<any>();
  const [Dell, setDell] = useState<boolean>(false);
  const [Paidd, setPaid] = useState<boolean>(false);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const reff = ref(DB, "invoices/");
    onValue(reff, (snap) => {
      const data = snap.val();

      const Data = Object.values(data);
      const filtData = Data.find((item: any) => item.prahe === params.id);
      dispatch(addCurrentItem(filtData));
      setItem(filtData);
    });
  }, []);
  const navigate = useNavigate();

  //delate item
  const del = (id: any) => {
    console.log(id);
    setDell(true);
    remove(ref(DB, "invoices/" + id)).then(() => navigate("/"));
  };

  const paid = (id: any) => {
    update(ref(DB, "invoices/" + id), {
      ...item,
      status: "Paid",
    }).then(() => setPaid(true));
  };

  const updatee = () => {
    dispatch(changeUpdate(true));
    updateShow();
  };
  return (
    <>
      {Dell ? (
        <div className=" absolute top-20 right-2 md:top-24 md:right-3 lg:top-10 lg:right-6">
          <Alert severity="info" onClose={() => setDell(false)}>
            Seccessfuly deleted invoice item!
          </Alert>
        </div>
      ) : (
        ""
      )}

      {Paidd ? (
        <div className=" absolute top-20 right-2 md:top-24 md:right-3 lg:top-10 lg:right-6">
          <Alert severity="success" onClose={() => setPaid(false)}>
            Successfuly paid invoice item
          </Alert>
        </div>
      ) : (
        ""
      )}

      <div className="pt-[18vh] md:hidden px-6 min-h-[100vh] bg-[#F8F8FB] dark:bg-[#141625]  ">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-6 mb-10 items-center text-[15px] leading-[15px] tracking-[-0.25px] font-bold"
        >
          <img src="/back.svg" width={8.46} height={4.23} alt="<" />
          Go back
        </button>

        <div className="flex w-full mb-4  justify-between items-center bg-[#FFFFFF] h-[91px] rounded-lg px-4  shadow-[0px_10px_10px_-10px_#48549F1A] dark:bg-[#1E2139] dark:shadow-[0px_10px_10px_-10px_#48549F1A]">
          <span className="text-[#858BB2] font-[500] text-[13px]  dark:text-[#DFE3FA] leading-[15px] tracking-[-0.1px]">
            Status
          </span>

          <PaymentBtn
            paid={item && item.status == "Paid" ? true : false}
            pinding={item && item.status == "Pending" ? true : false}
            draft={item && item.status == "Draft" ? true : false}
          />
        </div>

        <div className="flex flex-col mb-14 gap-6 items-start rounded-lg px-5 py-6 bg-[#FFFFFF] shadow-[0px_10px_10px_-10px_#48549F1A] dark:bg-[#1E2139] dark:shadow-[0px_10px_10px_-10px_#48549F1A]">
          <div className="flex flex-col gap-1 ">
            <span className="font-bold text-[15px]  md:mb-0 leading-[15px] tracking-[-0.25px]">
              <span className="text-[#858BB2]">#</span>
              {item && item.prahe}
            </span>
            <Text text={item && item.IProject} />
          </div>

          <div className="flex flex-col gap-1">
            <Text text={item && item.fromAddress} />
            <Text text={item && item.fromCity} />
            <Text text={item && item.fromPost} />
            <Text text={item && item.fromCountry} />
          </div>

          <div className="flex flex-col justify-start mb-2 gap-8">
            <div className="flex  gap-12">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <Text text="Invoice Date" />
                  <BoldText text={item && item.Date} />
                </div>
                <div className="flex flex-col gap-3">
                  <Text text=" Payment Due" />
                  <BoldText text={item && item.Idate} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Text text="Bill To" />
                <div className="flex flex-col gap-2">
                  <BoldText text={item && item.clintName} />
                  <div className="flex flex-col gap-1">
                    <Text text={item && item.clintAddress} />
                    <Text text={item && item.clintCity} />
                    <Text text={item && item.clintPost} />
                    <Text text={item && item.clintCountry} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Text text="Sent to" />
              <BoldText text={item && item.clintEmail} />
            </div>
          </div>

          <div className="flex flex-col rounded-2xl w-full">
            <div className="bg-[#F9FAFE] dark:bg-[#252945] rounded-t-lg w-full p-6 flex flex-col gap-6">
              {item &&
                item.AllItem.map((item: any) => (
                  <Orders
                    key={item.id}
                    orderAmount={
                      item.id == 1
                        ? item.itemHow1
                        : item.id == 2
                        ? item.itemHow2
                        : item.id == 3
                        ? item.itemHow3
                        : item.id == 4
                        ? item.itemHow4
                        : item.id == 5
                        ? item.itemHow5
                        : "2"
                    }
                    OrderText={
                      item.id == 1
                        ? item.itemNamee1
                        : item.id == 2
                        ? item.itemNamee2
                        : item.id == 3
                        ? item.itemNamee3
                        : item.id == 4
                        ? item.itemNamee4
                        : item.id == 5
                        ? item.itemNamee5
                        : " Banner Dsign"
                    }
                    orderPrice={
                      item.id == 1
                        ? item.itemPrice1
                        : item.id == 2
                        ? item.itemPrice2
                        : item.id == 3
                        ? item.itemPrice3
                        : item.id == 4
                        ? item.itemPrice4
                        : item.id == 5
                        ? item.itemPrice5
                        : "250"
                    }
                    orderOverallPrice={
                      item.id == 1
                        ? item.itemTotal1
                        : item.id == 2
                        ? item.itemTotal2
                        : item.id == 3
                        ? item.itemTotal3
                        : item.id == 4
                        ? item.itemTotal4
                        : item.id == 5
                        ? item.itemTotal5
                        : "500"
                    }
                  />
                ))}
            </div>
            <div className="flex w-full justify-between dark:bg-[#0C0E16] bg-[#373B53] rounded-b-lg py-6 px-6">
              <span className="font-[500] text-[13px] leading-[18px] tracking-[-0.1px] text-[#FFFFFF] ">
                Grand Total
              </span>
              <h1 className="font-bold -mt-2 text-[24px] text-[#FFFFFF] leading-[32px] tracking-[-0.5px]">
                £ {item && item.totalPrice}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between dark:bg-[#1E2139] -ml-6 shadow-[b0px_10px_10px_-10px_#48549F1A] bg-[#FFFFFF] px-6 py-5  items-center w-[62.57vh]">
          <ButtonOrg onclick={updatee} idet text="Edit" />
          <ButtonOrg del onclick={DeleteShow} text="Delete" />
          <ButtonOrg
            onclick={() => paid(item && item.prahe)}
            ordinary={true}
            text="Mark as Paid"
          />
        </div>
      </div>

      {item && (
        <div className="hidden pt-[20vh] lg:pt-[5vh] pb-1  px-6 transition-all lg:px-[46vh]   mx-auto md:block  min-h-[100vh] bg-[#F8F8FB] dark:bg-[#141625] ">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-6 mb-10 items-center text-[15px] leading-[15px] tracking-[-0.25px] font-bold"
          >
            <img src="/back.svg" width={8.46} height={4.23} alt="<" />
            Go back
          </button>

          <div className="flex w-full mb-6  justify-between items-center bg-[#FFFFFF] h-[88px] rounded-lg px-10  shadow-[0px_10px_10px_-10px_#48549F1A] dark:bg-[#1E2139] dark:shadow-[0px_10px_10px_-10px_#48549F1A]">
            <div className="flex gap-4 items-center">
              <span className="text-[#858BB2] font-[500] text-[13px]  dark:text-[#DFE3FA] leading-[15px] tracking-[-0.1px]">
                Status
              </span>

              <PaymentBtn
                paid={item && item.status == "Paid" ? true : false}
                pinding={item && item.status == "Pending" ? true : false}
                draft={item && item.status == "Draft" ? true : false}
              />
            </div>
            <div className="flex gap-3">
              <ButtonOrg onclick={updatee} idet text="Edit" />

              <ButtonOrg del onclick={DeleteShow} text="Delete" />
              <ButtonOrg
                onclick={() => paid(item.prahe)}
                ordinary={true}
                text="Mark as Paid"
              />
            </div>
          </div>

          <div className="flex flex-col mb-12 gap-6 items-start rounded-lg px-6 py-8 bg-[#FFFFFF] shadow-[0px_10px_10px_-10px_#48549F1A] dark:bg-[#1E2139] dark:shadow-[0px_10px_10px_-10px_#48549F1A]">
            <div className="flex w-full mb-6 justify-between">
              <div className="flex flex-col gap-1 ">
                <span className="font-bold text-[15px]  md:mb-0 leading-[15px] tracking-[-0.25px]">
                  <span className="text-[#858BB2]">#</span>
                  {item && item.prahe}
                </span>
                <Text text={item && item.IProject} />
              </div>

              <div className="flex flex-col gap-1">
                <Text text={item && item.fromAddress} />
                <Text text={item && item.fromCity} />
                <Text text={item && item.fromPost} />
                <Text text={item && item.fromCountry} />
              </div>
            </div>

            <div className="flex w-[95%] mb-4 justify-between">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <Text text="Invoice Date" />
                  <BoldText text={item && item.Date} />
                </div>
                <div className="flex flex-col gap-2">
                  <Text text=" Payment Due" />
                  <BoldText text={item && item.Idate} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Text text="Bill To" />
                <div className="flex flex-col gap-2">
                  <BoldText text={item && item.clintName} />
                  <div className="flex flex-col gap-1">
                    <Text text={item && item.clintAddress} />
                    <Text text={item && item.clintCity} />
                    <Text text={item && item.clintPost} />
                    <Text text={item && item.clintCountry} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Text text="Sent to" />
                <BoldText text={item && item.clintEmail} />
              </div>
            </div>

            <div className="flex flex-col rounded-2xl w-full">
              <div className="bg-[#F9FAFE] dark:bg-[#252945] rounded-t-lg w-full p-10 flex flex-col gap-6">
                <div className="flex w-full justify-between">
                  <span className="text-[#7E88C3] dark:text-[#DFE3FA] text-[13px] font-[500] leading-[18px] tracking-[-0.1px]">
                    Item Name
                  </span>
                  <div className="flex w-[46%] justify-between">
                    <span className="text-[#7E88C3] dark:text-[#DFE3FA] text-[13px] font-[500] leading-[18px] tracking-[-0.1px]">
                      QTY.
                    </span>
                    <span className="text-[#7E88C3] dark:text-[#DFE3FA] text-[13px] font-[500] leading-[18px] tracking-[-0.1px]">
                      Price
                    </span>
                    <span className="text-[#7E88C3] dark:text-[#DFE3FA] text-[13px] font-[500] leading-[18px] tracking-[-0.1px]">
                      Total
                    </span>
                  </div>
                </div>
                {item &&
                  item.AllItem.map((item: any) => (
                    <Orderr
                      key={item.id}
                      orderAmount={
                        item.id == 1
                          ? item.itemHow1
                          : item.id == 2
                          ? item.itemHow2
                          : item.id == 3
                          ? item.itemHow3
                          : item.id == 4
                          ? item.itemHow4
                          : item.id == 5
                          ? item.itemHow5
                          : "2"
                      }
                      OrderText={
                        item.id == 1
                          ? item.itemNamee1
                          : item.id == 2
                          ? item.itemNamee2
                          : item.id == 3
                          ? item.itemNamee3
                          : item.id == 4
                          ? item.itemNamee4
                          : item.id == 5
                          ? item.itemNamee5
                          : " Banner Dsign"
                      }
                      orderPrice={
                        item.id == 1
                          ? item.itemPrice1
                          : item.id == 2
                          ? item.itemPrice2
                          : item.id == 3
                          ? item.itemPrice3
                          : item.id == 4
                          ? item.itemPrice4
                          : item.id == 5
                          ? item.itemPrice5
                          : "250"
                      }
                      orderOverallPrice={
                        item.id == 1
                          ? item.itemTotal1
                          : item.id == 2
                          ? item.itemTotal2
                          : item.id == 3
                          ? item.itemTotal3
                          : item.id == 4
                          ? item.itemTotal4
                          : item.id == 5
                          ? item.itemTotal5
                          : "500"
                      }
                    />
                  ))}
              </div>
              <div className="flex w-full justify-between dark:bg-[#0C0E16] bg-[#373B53] rounded-b-lg py-6 px-10">
                <span className="font-[500] text-[13px] leading-[18px] tracking-[-0.1px] text-[#FFFFFF] ">
                  Grand Total
                </span>
                <h1 className="font-bold -mt-2 text-[24px] text-[#FFFFFF] leading-[32px] tracking-[-0.5px]">
                  £ {item && item.totalPrice}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <dialog id="delete" className="modal max-w-[375px]  md:max-w-full ">
        <div className="modal-box bg-[#FFFFFF] py-9 px-6 md:py-12 md:px-8 dark:bg-[#1E2139]  shadow-[0px_10px_10px_-10px_#48549F1A] text-inherit">
          <h1 className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] ">
            Confirm Deletion
          </h1>

          <p className="font-[500] text-[13px] leading-[22px] tracking-[-0.1px]  md:max-w-[90%] text-[#888EB0] my-6">
            Are you sure you want to delete invoice #{item && item.prahe}? This
            action cannot be undone.
          </p>

          <div className="flex w-full justify-end gap-3">
            <ButtonOrg idet onclick={DeleteClose} text="Cancel" />
            <ButtonOrg del onclick={() => del(item.prahe)} text="Delete" />
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Invoice;

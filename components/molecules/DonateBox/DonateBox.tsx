import formatCurrency from "@/utils/formatCurrency";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import CurrencyInput from "react-currency-input-field";

const donationAmounts = [1000, 10000, 100000, 250000, 500000, 7500, 1000000, 0];

export function DonateBox() {
  const [amount, setAmount] = useState(10000);
  const [customAmount, setCustomAmount] = useState(0);
  const [email, setEmail] = useState("");
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: (amount || customAmount) * 100,
    publicKey: process.env.NEXT_PUBLIC_KEY as string,
  };

  const onSuccess = () => {};

  const onClose = () => {};

  const initializePayment = usePaystackPayment(config);
  return (
    <div className="border-2 border-primary rounded-lg md:p-10 p-5 ">
      <div className="md:w-10/12 w-full">
        <div className="mb-10">
          <h4 className="text-neutral-800 text-2xl">Donate Today</h4>
          <hr className="w-[156px] h-0.5 bg-primary" />
        </div>
        {donationAmounts.map((amountToDonate, i) => (
          <button
            key={amountToDonate}
            className={`border-2 ${
              amount === amountToDonate ? "border-primary" : " border-gray-300 "
            } rounded-md px-5 py-2 font-sans font-light md:mr-8 mr-3 mb-5 text-xl cursor-pointer md:w-fit w-full`}
            onClick={() => {
              setAmount(amountToDonate);
            }}
          >
            {amountToDonate === 0
              ? "Custom"
              : ` ${formatCurrency(amountToDonate)}`}
          </button>
        ))}
        <div>
          {amount === 0 && (
            <CurrencyInput
              id="amount"
              name="CurrencyInput"
              placeholder="Enter custom amount"
              allowDecimals
              decimalsLimit={2}
              prefix={"₦"}
              className="rounded-md px-10 border-2 border-gray-300 py-3 font-sans font-light bg-transparent mr-10 mb-5 text-lg outline-2 block md:w-4/5  w-full"
              onValueChange={(value) =>
                console.log(setCustomAmount(Number(value)))
              }
            />
          )}
          <input
            type="email"
            name="email"
            id="email"
            required
            className="rounded-md px-5 border-2 border-gray-300 py-2 font-sans font-light bg-transparent mr-8 mb-5 text-lg outline-2 md:w-4/5 w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email address"
          />
        </div>
        <button
          className="bg-primary text-white border-primary text-md rounded border-solid border py-3 px-6 font-medium w-fit"
          type="submit"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

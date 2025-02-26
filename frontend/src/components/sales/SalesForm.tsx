"use client";
import React from "react";
import { Calendar, Currency, ShoppingBag } from "lucide-react";
import useThemeStore from "@/store/themes";

const SalesForm = () => {
  const { isDarkTheme } = useThemeStore();

  return (
    <form
      className=" text-pri w-full p-4 rounded-[40px] [box-shadow:var(--sd-card)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2>Daily Sales Log</h2>
      <div className="flex-row p-2 mb-2 rounded-3xl ">
        <input
          placeholder="Input description"
          type="text"
          className=" w-full bg-base [box-shadow:var(--sd-inset)]"
        />
      </div>

      <div className="flex-row p-2 mb-2 rounded-3xl">
        {/* <label htmlFor="" className="block text-sm font-medium text-white">
          <ShoppingBag /> Enter number of bags
        </label> */}
        <input
          type="number"
          // className="w-full border border-base rounded h-8 "
          placeholder="Enter number of bags"
          className=" w-full bg-base [box-shadow:var(--sd-inset)]"
        />
      </div>

      <div className="flex-row p-2 mb-2 rounded-3xl">
        {/* <label htmlFor="" className="flex text-base">
          <Currency /> Revenue
        </label> */}
        <input
          type="number"
          className="w-full  bg-base [box-shadow:var(--sd-inset)]"
          placeholder="Input revenue"
        />
      </div>

      <div className="flex justify-between">
        <button className="rounded-3xl px-4 py-2 [box-shadow:var(--sd-button)] cursor-pointer">
          Clear
        </button>
        <button className="rounded-3xl px-4 py-2 [box-shadow:var(--sd-button)]">
          Save
        </button>
      </div>
    </form>
  );
};

export default SalesForm;

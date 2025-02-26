import React from "react";
import Card from "@/components/Card";

export default function Page() {
  return (
    <div className="z-0 mt-16 w-full h-full border-2 border-red-700 flex justify-center">
      <div className=" border-2 border-yellow-400 flex-col justify-center p-4 gap-6 w-full">
        <Card title="Sales" value="$10,000" />
        <Card title="Debt" value="$2,000" />
        <Card title="Expenses" value="$5,000" />
        <Card title="Net Profit" value="$3,000" />
      </div>
    </div>
  );
}

"use client";
import SalesForm from "@/components/sales/SalesForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

type Sales = {
  id: string;
  unitPrice: number;
  revenue: number;
};

async function fetchSales(): Promise<Sales[]> {
  const response = await fetch("http://localhost:5000/api/sales");
  return response.json();
}

export default function Sales() {
  // const queryClient = useQueryClient();

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["sales"],
    queryFn: fetchSales,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }
  return (
    <div className="mt-16 m-4 w-full">
      <SalesForm />
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Revenue</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((sale, id) => {
              return (
                <tr className="flex flex-col" key={id}>
                  <td>{sale.id}</td>
                  <td>{sale.revenue}</td>
                  <td>{sale.unitPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

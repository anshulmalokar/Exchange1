import TradeNav from "@/Components/TradeNav";
import TradingContainer from "@/Components/TradingContainer";
import React from "react";

type Props = {};

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* left container */}
        <div className="col-span-10">
            <TradeNav/>
            <>
                {/* Container */}
                <TradingContainer/>
            </>
        </div>
        {/* right container */}
        <div className="col-span-2">
            <div className="flex flex-col">
                <div className="flex hover:cursor-pointer items-center gap-4 p-2 justify-start border-b-2 border-b-slate-800 w-full h-16 border-l-2 border-l-slate-800">
                    <h3>Buy</h3>
                    <h3>Sell</h3>
                </div>
            </div>
            <div className="flex gap-2 p-3">
                <h3>Limit</h3>
                <h3>Market</h3>
            </div>
            <div className="flex gap-2 p-3 justify-between">
                <h5>Available balance</h5>
                <h5>$1000</h5>
            </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

type Props = {};

export default function TradeNav({}: Props) {
  return (
    <>
        <div className="flex items-center gap-4 justify-start border-b-2 border-b-slate-800 w-full h-16">
          <p>Logo</p>
          <h3>SOL_USDC</h3>
          <div className="flex flex-col">
            <h3>$</h3>
            <h3>$</h3>
          </div>
          <div className="flex flex-col">
            <h3>24 hr change</h3>
            <h3>$</h3>
          </div>
          <h3>24 hr high</h3>
          <h3>24 hr low</h3>
          <h3>24 hr volume</h3>
        </div>
    </>
  );
}

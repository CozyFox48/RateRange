/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
"use client";
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "off" | "on";
  className: any;
  checkCircle: string;
  addCircle: string;
}

const Compare = ({
  property1,
  className,
  checkCircle = "/img/check-circle-1.png",
  addCircle = "/img/add-circle.png",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "off",
  });

  return (
    <div
      className={`inline-flex flex-col items-center gap-[10px] px-[24px] py-[16px] h-[48px] overflow-hidden rounded-[8px] justify-center relative ${
        state.property1 === "off" ? "border-2 border-solid" : ""
      } ${state.property1 === "off" ? "border-[color:var(--variable-collection-primary)]" : ""} ${
        state.property1 === "on" ? "bg-[color:var(--variable-collection-primary)]" : ""
      } ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="inline-flex mt-[-3.50px] items-center gap-[16px] flex-[0_0_auto] justify-center mb-[-3.50px] relative">
        <div className="inline-flex items-end gap-[16px] flex-[0_0_auto] relative">
          <div
            className={`[font-family:'Roboto',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[20px] font-bold leading-[normal] whitespace-nowrap relative ${
              state.property1 === "on" ? "text-white" : "text-[color:var(--variable-collection-primary)]"
            }`}
          >
            Compare
          </div>
        </div>
        <img
          className="w-[16px] h-[16px] relative"
          alt="Add circle"
          src={state.property1 === "on" ? checkCircle : addCircle}
        />
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "on",
      };
  }

  return state;
}

export default Compare;
Compare.propTypes = {
  property1: PropTypes.oneOf(["off", "on"]),
  checkCircle: PropTypes.string,
  addCircle: PropTypes.string,
};

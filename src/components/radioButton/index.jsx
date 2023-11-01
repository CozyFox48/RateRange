"use client"
// import { useState } from "react";
const RadioButton = ({ text, clicked, onClick }) => {

    return (
        <label className="mb-5 flex items-center text-lg font-medium gap-1" onClick={onClick}>
            <span className="flex-none  bg-white border border-primary rounded-full w-6 h-6 flex items-center justify-center transition-all duration-300">
                {clicked ? <span className="rounded-full bg-primary w-3 h-3"></span> : <></>}
            </span>
            <span className="grow pl-3">
                {text}
            </span>
        </label>
    );
};

export default RadioButton;

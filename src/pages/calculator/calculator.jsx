import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import VerticalAlignCenterIcon from "@mui/icons-material/VerticalAlignCenter";
import GridViewIcon from "@mui/icons-material/GridView";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { FaDivide } from "react-icons/fa";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaBackspace } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

import { FaPlus } from "react-icons/fa";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const handleShowResults = () => {
    setResult(eval(input));
  };

  return (
    <div className="flex mt-20 items-center justify-center">
      <div className="h-[90vh] w-[25%]  bg-gray-900 text-white flex p-2 justify-center rounded-2xl">
        <div className="w-full p-3">
          <div className="first flex justify-between">
            <VerticalAlignCenterIcon className="rotate-45" />
            <div className="flex items-center justify-between gap-6">
              <EqualizerIcon />
              <GridViewIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="h-48 flex-col mx-auto justify-end items-center my-auto">
            <div className="second text-white  flex justify-end ">
              <h1>
                <span className="text-[44px] flex float-right">{input}</span>
              </h1>
            </div>
            <div className="flex justify-end">
              <span className="text-[26px] text-gray-400 flex float-right">
                {result}
              </span>
            </div>
          </div>

          <div className="third my-auto flex items-center">
            <Grid container spacing={2} className="pt-20">
              <Grid item xs={12} className=" flex items-center justify-between">
                <div
                  onClick={clearInput}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  C
                </div>
                <div
                  onClick={() => handleInput("%")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  %
                </div>
                <div className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold">
                  <FaBackspace />
                </div>
                <div
                  onClick={() => handleInput("/")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  <FaDivide />
                </div>
              </Grid>
              <Grid item xs={12} className=" flex items-center justify-between">
                <div
                  onClick={() => handleInput("7")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  7
                </div>
                <div
                  onClick={() => handleInput("8")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  8
                </div>
                <div
                  onClick={() => handleInput("9")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  9
                </div>
                <div
                  onClick={() => handleInput("*")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  X
                </div>
              </Grid>
              <Grid item xs={12} className=" flex items-center justify-between">
                <div
                  onClick={() => handleInput("4")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  4
                </div>
                <div
                  onClick={() => handleInput("5")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  5
                </div>
                <div
                  onClick={() => handleInput("6")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  6
                </div>
                <div
                  onClick={() => handleInput("-")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  <FiMinus />
                </div>
              </Grid>
              <Grid item xs={12} className=" flex items-center justify-between">
                <div
                  onClick={() => handleInput("1")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  1
                </div>
                <div
                  onClick={() => handleInput("2")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  2
                </div>
                <div
                  onClick={() => handleInput("3")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  3
                </div>
                <div
                  onClick={() => handleInput("+")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  <FaPlus />
                </div>
              </Grid>
              <Grid item xs={12} className=" flex items-center justify-between">
                <div
                  onClick={() => handleInput("00")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  00
                </div>
                <div
                  onClick={() => handleInput("0")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  0
                </div>
                <div
                  onClick={() => handleInput(".")}
                  className="h-20 w-20 bg-slate-600 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  .
                </div>
                <div
                  onClick={handleShowResults}
                  className="h-20 w-20 bg-orange-400 cursor-pointer rounded-full items-center flex justify-center text-[25px] font-bold"
                >
                  =
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

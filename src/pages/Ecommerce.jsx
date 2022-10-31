import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine, Header } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";


import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  
  const { currentColor } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 lg:w-9/12 lg:m-auto rounded-3xl">
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white rounded-xl h-auto w-full md:w-780 p-8 pt-9 lg:m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <Header category="Dashboard" title="E-commerces"/>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex my-5 lg:m-3 flex-wrap justify-between gap-1 items-center md:w-780">
          {earningData.map((item) => (
            <div
            key={item.title}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:m-3 p-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl mr-3">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-x1 cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$43,005</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine currentColor="red" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color="red" />
              </div>
              <div className="mt-10">
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked
                width="320px"
                height="360px"
                
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ecommerce;

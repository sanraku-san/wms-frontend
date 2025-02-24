import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Table from "../components/Table";

export default function Inventory() {
  return (
    <div className="h-screen p-5 flex">
      <div className="w-full p-5 border-1  rounded">
        <div className="flex-row">
          <div className="flex gap-1.5 items-center mb-3">
            <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">
              Inventory
            </h1>
            <p className="text-xs font-extralight text-gray-400">
              (2323 inventory)
            </p>
          </div>
          <div className=" flex-1 flex items-center justify-between">
            <div className="flex">
              <div className="flex items-center justify-center gap-3 border border-gray-500 rounded-md">
                <div className="ml-2 text-gray-500">
                  <button>
                    <FaSearch />
                  </button>
                </div>
                <input type="text" placeholder="search for inventory" />
              </div>
              <div className="flex items-center gap-0.5 text-gray-700 ml-7">
                <div>
                  <FaFilter />
                </div>
                <select name="Filter" className="hover:bg-gray-500">
                  <option value="">Filter</option>
                  <option value="price">Price</option>
                  <option value="stock_level">Stock Level</option>
                  <option value="date">Date</option>
                </select>
              </div>
              <div className="text-gray-700 hover:bg-gray-500">
                <select name="Filter">
                  <option value="">Category</option>
                  <option value="price">Price</option>
                  <option value="stock_level">Stock Level</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
            <div className="bg-green-600 text-white rounded p-1.5 hover:bg-green-500 hover:active:bg-green-200">
              <button>Add Product</button>
            </div>
          </div>
          <div>    
          </div>
        </div>
        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
}

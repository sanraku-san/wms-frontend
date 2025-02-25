import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Table from "../components/Table";
import AddProduct from "../modals/AddProduct";

export default function Inventory() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filter,setFilter]=useState();
  const [products, setProducts] = useState([
    {
    },
  ]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    handleCloseModal();
  };
  const onFilter = () => {
    const nextFilter = filter === "price" ? "name" : filter === "name" ? "quantity" : filter === "quantity" ? "time" : "price";
    setFilter(nextFilter);
  };
  const getFilterText = () => {
    switch (filter) {
      case "name":
        return "by Name";
      case "quantity":
        return "by Quantity";
      case "time":
        return "by Time";
      default:
        return "by Price";
    }
  };

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
                <div className="flex items-center mr-2 hover:bg-gray-500 gap-1.5 rounded-2xl p-2">
                  <FaFilter />
                
                <button onClick={onFilter}>{getFilterText()}</button></div>
              </div>
              <div className="text-gray-700 hover:bg-gray-500 rounded-2xl p-2">
                <select name="Filter">
                  <option value="">Category</option>
                  <option value="price">Price</option>
                  <option value="stock_level">Stock Level</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
            <div className="">
              <button
                className="bg-green-600 text-white rounded p-1.5 hover:bg-green-500 hover:active:bg-green-200"
                onClick={handleOpenModal}
              >
                Add Product
              </button>
              {isModalOpen && (
                <AddProduct
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onAddProduct={handleAddProduct}
                />
              )}
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-4">
          <Table products={products} />
        </div>
      </div>
    </div>
  );
}

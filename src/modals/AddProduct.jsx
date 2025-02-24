import React, { useState } from "react";

export default function AddProduct({ isOpen, onClose, onAddProduct }) {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [barcode, setBarcode] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [iQuantity, setIQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: itemName,
      category: category,
      barcode: barcode,
      incoming: iQuantity,
      stock: iQuantity,
      unitPrice: unitPrice,
      image: URL.createObjectURL(image),
    };
    onAddProduct(newProduct);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black opacity-91">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Item Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Barcode</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Unit Price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Initial Quantity</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={iQuantity}
              onChange={(e) => setIQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

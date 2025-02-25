import React, { useState } from 'react';

export default function Table({ products }) {
  const [actions,setActions]=useState({
  })
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Item</th>
            <th className="px-4 py-2 border-b text-left">Category</th>
            <th className="px-4 py-2 border-b text-left">Barcode</th>
            <th className="px-4 py-2 border-b text-left">Incoming</th>
            <th className="px-4 py-2 border-b text-left">Stock</th>
            <th className="px-4 py-2 border-b text-left">Unit Price</th>
            <th className="px-4 py-2 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product, index) => ( 
              <tr key={index}>
                <td className="px-4 py-2 border-b">
                  <div className='flex justify-center items-center  flex flex-col'>
                    <img src={product.image} alt="Item" className=" w-30 h-30" />
                    <p>{product.name}</p>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">{product.category}</td>
                <td className="px-4 py-2 border-b">{product.barcode}</td>
                <td className="px-4 py-2 border-b">{product.incoming}</td>
                <td className="px-4 py-2 border-b">{product.stock}</td>
                <td className="px-4 py-2 border-b">{product.unitPrice}</td>
                <td className="px-4 py-2 border-b">
                  <button  className="border-gray-400 text-4xl text-center">...</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

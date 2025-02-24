import React from 'react'
import fan from '../media/fan.png'

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Item</th>
            <th className="px-4 py-2 border-b text-left">Category</th>
            <th className="px-4 py-2 border-b text-left">Barcode</th>
            <th className="px-4 py-2 border-b text-left">Incoming</th>
            <th className="px-4 py-2 border-b text-left">Stock Unit</th>
            <th className="px-4 py-2 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">
              <img src={fan} alt="Item" className="w-16 h-16 object-cover" />
              Electric Fan
            </td>
            <td className="px-4 py-2 border-b">Category Name</td>
            <td className="px-4 py-2 border-b">123456789</td>
            <td className="px-4 py-2 border-b">10</td>
            <td className="px-4 py-2 border-b">50</td>
            <td className="px-4 py-2 border-b">
              <button className="border-gray-400 text-4xl">...</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
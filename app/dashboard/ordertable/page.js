"use client";
import { useState } from "react";

const ordersData = [
  {
    id: 1,
    userName: "John Doe",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City",
    productName: "Pizza",
    productImage: "/pizza.jpg",
    productPrice: "$15",
    productCategory: "Food",
    productQuantity: 2,
    status: "Pending",
  },
  {
    id: 2,
    userName: "Jane Smith",
    phoneNumber: "987-654-3210",
    address: "456 Elm St, City",
    productName: "Burger",
    productImage: "/burger.jpg",
    productPrice: "$8",
    productCategory: "Food",
    productQuantity: 1,
    status: "Completed",
  },
];

const OrderTable = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <div className="overflow-x-scroll rounded-sm">
        <div className="grid grid-cols-11 justify-between gap-3 bg-[#E67E22] rounded-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="px-1 py-3 w-[150px]">OrderID</div>
          <div className="px-1 py-3 w-[150px]">UserName</div>
          <div className="px-1 py-3 w-[150px]">Phone</div>
          <div className="px-1 py-3 w-[150px]">Address</div>
          <div className="px-1 py-3 w-[150px]">ProductName</div>
          <div className="px-1 py-3 w-[150px]">Image</div>
          <div className="px-1 py-3 w-[150px]">Price</div>
          <div className="px-1 py-3 w-[150px]">Category</div>
          <div className="px-1 py-3 w-[150px]">Quantity</div>
          <div className="px-1 py-3 w-[150px]">Status</div>
          <div className="px-1 py-3 w-[150px]">Actions</div>
        </div>

        <div>
          {orders.map((order) => (
            <div
              className="grid grid-cols-11 gap-3 justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700"
              key={order.id}
            >
              <div className="px-1 py-4 w-[150px]">{order.id}</div>
              <div className="px-1 py-4 w-[150px]">{order.userName}</div>
              <div className="px-1 py-4 w-[150px]">{order.phoneNumber}</div>
              <div className="px-1 py-4 w-[150px]">{order.address}</div>
              <div className="px-1 py-4 w-[150px]">{order.productName}</div>
              <div className="px-1 py-4 w-[150px]">
                <img
                  src={order.productImage}
                  alt={order.productName}
                  className="w-16 h-16 object-cover"
                />
              </div>
              <div className="px-1 py-4 w-[150px]">{order.productPrice}</div>
              <div className="px-1 py-4 w-[150px]">{order.productCategory}</div>
              <div className="px-1 py-4 w-[150px]">{order.productQuantity}</div>
              <div className="px-1 py-4 w-[150px]">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border p-1 rounded-md outline-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="Pending" className="text-yellow-500 font-semibold">Pending</option>
                  <option value="Accepted" className="text-blue-500 font-semibold">Accepted</option>
                  <option value="Completed" className="text-green-500 font-semibold">Completed</option>
                </select>
              </div>
              <div className="px-1 py-4 w-[150px]">
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

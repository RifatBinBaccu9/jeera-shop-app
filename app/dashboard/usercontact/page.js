"use client";
import { useState } from "react";

const ordersData = [
  {
    id: 1,
    userName: "John Doe",
    phone: "123-456-7890",
    email: "123 Main St, City",
    subject: "Pizza",
    message: "I want to order a pizza.",
  },
  {
    id: 2,
    userName: "Jane Smith",
    phone: "987-654-3210",
    email: "456 Elm St, City",
    subject: "Burger",
    message: "Is the burger available?",
  },
];

const UserContact = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold p-6">User Contact</h1>
      <div className="overflow-x-scroll rounded-sm p-5">
        <div className="grid grid-cols-7 justify-between gap-3 bg-[#E67E22] rounded-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="px-1 py-3 w-[150px]">ID</div>
          <div className="px-1 py-3 w-[150px]">User Name</div>
          <div className="px-1 py-3 w-[150px]">Phone</div>
          <div className="px-1 py-3 w-[150px]">E-mail</div>
          <div className="px-1 py-3 w-[150px]">Subject</div>
          <div className="px-1 py-3 w-[150px]">Message</div>
          <div className="px-1 py-3 w-[150px]">Actions</div>
        </div>
        <div>
          {orders.map((order) => (
            <div
              className="grid grid-cols-7 gap-3 justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700"
              key={order.id}
            >
              <div className="px-1 py-4 w-[150px]">{order.id}</div>
              <div className="px-1 py-4 w-[150px]">{order.userName}</div>
              <div className="px-1 py-4 w-[150px]">{order.phone}</div>
              <div className="px-1 py-4 w-[150px]">{order.email}</div>
              <div className="px-1 py-4 w-[150px]">{order.subject}</div>
              <div className="px-1 py-4 w-[150px]">{order.message}</div>
              <div className="px-1 py-4 w-[150px]">
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
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

export default UserContact;

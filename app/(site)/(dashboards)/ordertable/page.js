

const orders = [
  {
    id: 1,
    userName: 'John Doe',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City',
    productName: 'Pizza',
    productImage: '/pizza.jpg',
    productPrice: '$15',
    productCategory: 'Food',
    productQuantity: 2,
    status: 'Pending',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    phoneNumber: '987-654-3210',
    address: '456 Elm St, City',
    productName: 'Burger',
    productImage: '/burger.jpg',
    productPrice: '$8',
    productCategory: 'Food',
    productQuantity: 1,
    status: 'Completed',
  },
];
const OrderTable = () => {
  // const handleDelete = (id) => {
  //   // Handle delete action (could be a call to your backend API)
  //   console.log('Delete order with ID:', id);
  // };

  return (
    <div className=''>
      <div className="overflow-x-auto  rounded-sm container ">
      <table className="min-w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-[#E67E22] uppercase bg-[#F5E1C8]">
          <tr>
            <th className="px-1 py-3">Order ID</th>
            <th className="px-1 py-3">User Name</th>
            <th className="px-1 py-3">Phone Number</th>
            <th className="px-1 py-3">Address</th>
            <th className="px-1 py-3">Product Name</th>
            <th className="px-1 py-3">Product Image</th>
            <th className="px-1 py-3">Product Price</th>
            <th className="px-1 py-3">Product Category</th>
            <th className="px-1 py-3">Product Quantity</th>
            <th className="px-1 py-3">Status</th>
            <th className="px-1 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700" key={order.id}>
              <td className="px-1 py-4">{order.id}</td>
              <td className="px-1 py-4">{order.userName}</td>
              <td className="px-1 py-4">{order.phoneNumber}</td>
              <td className="px-1 py-4">{order.address}</td>
              <td className="px-1 py-4">{order.productName}</td>
              <td className="px-1 py-4">
                <img src={order.productImage} alt={order.productName} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-1 py-4">{order.productPrice}</td>
              <td className="px-1 py-4">{order.productCategory}</td>
              <td className="px-1 py-4">{order.productQuantity}</td>
              <td className="px-1 py-4">{order.status}</td>
              <td className="px-1 py-4">
                <button
                  // onClick={() => handleDelete(order.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default OrderTable;

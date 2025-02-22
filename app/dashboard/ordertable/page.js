

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
      <div className=" overflow-x-scroll  rounded-sm ">
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
          </div>        <div className="">
          {orders.map((order) => (
            <div className="grid grid-cols-11 gap-3 justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700" key={order.id}>
              <div className="px-1 py-4 w-[150px]">{order.id}</div>
              <div className="px-1 py-4 w-[150px]">{order.userName}</div>
              <div className="px-1 py-4 w-[150px]">{order.phoneNumber}</div>
              <div className="px-1 py-4 w-[150px]">{order.address}</div>
              <div className="px-1 py-4 w-[150px]">{order.productName}</div>
              <div className="px-1 py-4 w-[150px]">
                <img src={order.productImage} alt={order.productName} className="w-16 h-16 object-cover" />
              </div>
              <div className="px-1 py-4 w-[150px]">{order.productPrice}</div>
              <div className="px-1 py-4 w-[150px]">{order.productCategory}</div>
              <div className="px-1 py-4 w-[150px]">{order.productQuantity}</div>
              <div className="px-1 py-4 w-[150px]">{order.status}</div>
              <div className="px-1 py-4 w-[150px]">
                <button
                  // onClick={() => handleDelete(order.id)}
                  className="text-red-600 hover:text-red-900"
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

import OrderTable from "../ordertable/page";


export default function Dashboard() {
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

  return (
    <div className="my-[60px]">
      <h1 className="text-2xl font-semibold mb-6 container ">Order Dashboard</h1>
      <OrderTable orders={orders} />
    </div>
  );
}

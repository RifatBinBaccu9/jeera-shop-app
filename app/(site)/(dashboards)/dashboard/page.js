import OrderTable from "../ordertable/page";


export default function Dashboard() {
 

  return (
    <div className="my-[60px]">
      <h1 className="text-2xl font-semibold mb-6 container ">Order Dashboard</h1>
      <OrderTable />
    </div>
  );
}

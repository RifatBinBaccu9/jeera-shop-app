import Link from "next/link";
import OrderTable from "./ordertable/page";

const page = () => {
    return (
        <div className="flex flex-col gap-5 p-5">
            <h1 className="text-2xl font-semibold mb-6  ">Dashboard</h1>
            <OrderTable />
        </div>
    );
}

export default page
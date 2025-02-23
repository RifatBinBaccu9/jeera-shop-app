import Link from "next/link";
import OrderTable from "./ordertable/page";
import { Suspense } from "react";
import Loading from "../(site)/loading";

const page = () => {
    return (
        <div className="flex flex-col gap-5 p-5">
            <Suspense fallback={<Loading />}>
            <h1 className="text-2xl font-semibold mb-6  ">Dashboard</h1>
            <OrderTable />
            </Suspense>
        </div>
    );
}

export default page
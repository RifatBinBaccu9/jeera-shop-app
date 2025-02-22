"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

 const Sitebar = () => {
     const router = useRouter();
    const handleLogout = () => {
        document.cookie = "authToken=; path=/; max-age=0"; 
        router.push("/");
    };
    
    return (
        <div className="flex flex-col gap-5 border w-[300px] bg-white overflow-y-auto h-[1000px] p-6">
            <h1 className="text-2xl font-semibold mb-6 container ">Dashboard</h1>
            <Link href={'/dashboard'} className="text-base font-semibold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8]  px-5 py-2 w-full">User Orders</Link>
            <Link href={'/dashboard/usercontact'} className="text-base font-semibold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8]  px-5 py-2 w-full">User Contact</Link>
            <Link href={'/'} className="text-base font-semibold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8]  px-5 py-2 w-full">Go to Home</Link>
            <div onClick={handleLogout} className=" cursor-pointer text-base font-semibold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8]  px-5 py-2 w-full">Sign Out</div>
        </div>
    );
}

export default Sitebar
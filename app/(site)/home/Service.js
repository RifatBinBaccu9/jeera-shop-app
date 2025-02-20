import { TbTruckDelivery } from "react-icons/tb";
import { PiSealCheck } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const services = [
  {
    title: "দ্রুত ডেলিভারি",
    description: "আমাদের দ্রুত শিপিং পরিষেবার মাধ্যমে অল্প সময়েই আপনার পণ্য পান।",
    icon: <TbTruckDelivery />,
  },
  {
    title: "গুণগত মানের নিশ্চয়তা",
    description: "আমরা আমাদের সকল পণ্যে সেরা মান নিশ্চিত করি।",
    icon: <PiSealCheck />,
  },
  {
    title: "২৪/৭ সহায়তা",
    description: "আমাদের টিম সার্বক্ষণিক আপনাকে সহায়তা করতে প্রস্তুত।",
    icon: <BiSupport />,
  },
];

export default function Services() {
  
    return (
      <section className="py-[120px] ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2> */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white border  border-[#FAF3E0] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-5xl mb-4 text-[#E67E22] group-hover:text-[#D35400]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 ">{service.title}</h3>
                <p className="text-gray-500 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
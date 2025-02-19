import { TbTruckDelivery } from "react-icons/tb";
import { PiSealCheck } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const services = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered in no time with our fast shipping service.",
    icon: <TbTruckDelivery />,
  },
  {
    title: "Quality Guarantee",
    description: "We ensure top-notch quality in all our products.",
    icon: <PiSealCheck />,
  },
  {
    title: "24/7 Support",
    description: "Our team is available round the clock to assist you.",
    icon: <BiSupport />,
  },
];
export default function Services() {
  
    return (
      <section className="py-14 bg-[#F5E1C8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
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
  
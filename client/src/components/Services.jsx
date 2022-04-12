import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorpism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-black dark:text-white text-lg">{title}</h1>
      <p className="mt-2 text-black dark:text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center font-fira dark:bg-black">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-3xl sm:text-5xl py-2 dark:text-white">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="We always maintain privacy and quality of our products. With blockchain technology we will provide security but still prioritize transparency in every aspect of our product and services."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Easy to use"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="We want our services and product to be easy to use for everyone, even people who are unfamiliar with cryptocurrency and blockchain."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Transparent"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="We want our services and product to be peer-to-peer without middle man or centralized authority. So you don't have to worry about your transactions transparency."
        />
      </div>
    </div>
  );
};

export default Services;

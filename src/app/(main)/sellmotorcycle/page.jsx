"use client";
import MultiStepForm from "@/app/(auth)/mulitistepform/page";
import Link from "next/link";

export default function SellMotorcycle() {
  return (
    <>
      
      <div className="mb-8">
      <div className="flex flex-row space-x-5 justify-center">
      <div className="border shadow-lg w-[500px]  rounded-lg mt-10 ml-10">
          <div className="rounded-full w-20 h-20 text-white content-center text-center ml-5 relative top-7 bg-green-600">
            1
          </div>
          <h2 className="text-3xl text-green-600 font-sans font-bold relative bottom-10 ml-32">
            Motorcycle Details
          </h2>
          <p className="text-green-600 relative bottom-10 ml-[140px]">
            Tell us about your Motorcycle
          </p>
        </div>      
        <div onClick={''} className="border shadow-lg w-[500px]  rounded-lg mt-10 ml-10">
          <div className="rounded-full w-20 h-20 text-white content-center text-center ml-5 relative top-7 bg-green-600">
            2
          </div>
          <h2 className="text-3xl text-green-600 font-sans font-bold relative bottom-10 ml-32">
            Personal Details
          </h2>
          <p className="text-green-600 relative bottom-10 ml-[140px]">
            Let know how to reach you
          </p>
        </div>        
      </div>
      <div className="lg:w-[1020px] shadow-lg mt-10 ml-64">
        <MultiStepForm />
      </div>
    </div>
    </>
    
  );
}


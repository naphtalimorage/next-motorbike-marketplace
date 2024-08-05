"use client";
import { Input, Button } from "@material-tailwind/react";
import InputWithDropdown from "@/app/components/ui/InputWithDropDown";

export default function PersonalInfo({
  nextStep,
  handleChange,
  values,
  handleSubmit,
}) {
  return (
    <div className="border h-[400px]">
      <h1 className="text-3xl font-bold mb-4 mt-2 ml-6">
        Personal Information
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:grid-cols-1  w-[965px]  items-end  ml-6 ">
        <input
          type="text"
          name="firstName"
          value={values.bikemake}
          placeholder="First Name"
          onChange={handleChange}
          className="border h-10 rounded-lg"
        />

        <input
          type="text"
          name="lastName"
          value={values.bikemake}
          onChange={handleChange}
          placeholder="Last Name"
          className="border h-10 rounded-lg"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={values.bikemake}
          onChange={handleChange}
          className="border h-10 rounded-lg"
        />

        <input
          type="tel"
          name="phoneNumber"
          required
          placeholder="Phone"
          value={values.bikemake}
          onChange={handleChange}
          className="border h-10 rounded-lg"
        />

        {/* <InputWithDropdown  values={values.bikemake}/> */}
        <button
          onClick={nextStep}
          className="flex items-center  bg-gray-900 text-white h-10 justify-center gap-2"
        >
          Next
        </button>

        
      </div>
    </div>
  );
}

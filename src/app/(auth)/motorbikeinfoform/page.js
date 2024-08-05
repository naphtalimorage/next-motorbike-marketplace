"use client";

import { input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
export default function MotorBikeInfo({ nextStep, prevStep, values, handleChange }) {
  return (
    <div className="border h-[500px]">
      <h1 className="text-3xl font-bold mb-4 mt-2 ml-6">Bike Information</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 sm:grid-cols-1  w-[965px]  items-end  ml-6 ">
        <input
          type="text"
          placeholder="Regestration Number"
          className="uppercase border h-9"
          name="regno"
          value={values.bikeinfo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="color"
          className="uppercase border h-9"
          name="color"
          value={values.bikeinfo}
          onChange={handleChange}
          required
        />

        <select
          name="manuctureyear"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
          required
        >
          <option>Year of Manufacture</option>
          <option>2018</option>
          <option>2002</option>
          <option>2007</option>
          <option>2020</option>
        </select>


        <select
          name="condition"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
          required
        >
          <option>Condition</option>
          <option>New</option>
          <option>Used</option>
        </select>


        <input
          type="number"
          placeholder="Millage"
          className=" border h-9"
          name="mileage"
          value={values.bikeinfo}
          onChange={handleChange}
          required
        />
        
        {/* <textarea
          name="description"
          placeholder="Type your description here....."
          value={values.bikeinfo}
          onChange={handleChange}
          className="border"
        >

        </textarea> */}

        <select
          name="make"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
        >
          <option>Make</option>
          <option>Bajaj</option>
          <option>Honda</option>
          <option>Hero</option>
          <option>TVS</option>
        </select>

        <select
          name="model"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
        >
          <option>Model</option>
          <option>SG175</option>
          <option>HG125</option>
          <option>SG125</option>
          <option>SG100</option>
        </select>

        <select
          name="enginesize"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
        >
          <option>Engine Size</option>
          <option>1500.0cc</option>
          <option>1200.6cc</option>
          <option>1300cc</option>
          <option>1400cc</option>
        </select>

        <select
          name="fueltype"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
        >
          <option>Fuel Type</option>
          <option>Diesel</option>
          <option>Petrol</option>
          <option>Electric</option>
        </select>

        <select
          name="fuelconsumption"
          value={values.bikeinfo}
          onChange={handleChange}
          className="border h-10"
        >
          <option>Fuel Consumption</option>
          <option>15km/l</option>
          <option>20km/l</option>
          <option>30km/l</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={values.bikeinfo}
          onChange={handleChange}
          className=" border h-9"
        />

        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={values.bikeinfo}
          onChange={handleChange}
          className=" border h-9"
        />
        <button
          onClick={prevStep}
          className="flex items-center  justify-center gap-2 bg-gray-900 text-white h-10"
        >
          Previous
        </button>

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

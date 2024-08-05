"use client"
import React, { useEffect, useState } from 'react';
import SearchBar from '../searchbar/SearchBar';
import BikeCard from '@/app/components/ui/BikeCard';
import Link from 'next/link';


export default function BuyMotorcycle() {

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('/bikes.json')
      .then((response) => response.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <div>
        <SearchBar/>
      </div> 
      <div className=" ml-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {bikes.map((bike) => (
        <Link href={`/buymotorcycle/${bike.id}/`} key={bike.id}>
        <BikeCard
          bikephoto={bike.photo}
          bikename={bike.name}
          biketype={bike.type}
          bikeengineCapacity={bike.engineCapacity}
          bikespeedLimit={bike.speedLimit}
          bikefuelType={bike.fuelType}
          bikefuelCapacity={bike.fuelCapacity}
          bikeprice={bike.price}
        />
        </Link>
      ))}
      </div>
      
    </div>
  );
};


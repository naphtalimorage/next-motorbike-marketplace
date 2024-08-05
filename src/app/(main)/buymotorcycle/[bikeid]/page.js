"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import CarouselDefault from "@/app/components/ui/Carousel";
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import BikeCard from "@/app/components/ui/BikeCard";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

export default function BikeDetails() {

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('/bikes.json')
      .then((response) => response.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <>
      <Card
        className="lg:w-full lg:max-w-[90rem]  md:w-[80rem] lg:h-[42rem] sm:w-[25rem] sm:max-w-[25rem] flex-row  p-8 shadow-lg mb-10 mt-4
    ml-4"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-[700px] lg:h-[500px] sm:w-[300px] shrink-0 rounded-r-none"
        >
          <CarouselDefault />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h4"
            color="gray"
            className="mb-5 underline uppercase"
          >
            BASIC SPECS
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1">
            <span className="ml-8">Year of Manufacture</span>{" "}
            <span className="ml-[270px] font-light">2019</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1">
            <span className="ml-8">Current Location</span>{" "}
            <span className="ml-[292px] font-light">Nairobi</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1 ">
            <span className="ml-8">Color</span>{" "}
            <span className="ml-[380px] font-light">Blue</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1">
            <span className="ml-8">Model</span>
            <span className="ml-[380px] font-light">Pulsar 125</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1">
            <span className="ml-8">Engine Size</span>
            <span className="ml-[334px] font-light">160.3 cc</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1 ">
            <span className="ml-8">Fuel Consumption</span>{" "}
            <span className="ml-[282px] font-light">55 km/l</span>
          </Typography>
          <hr />
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-1">
            <span className="ml-8">Fuel Type</span>{" "}
            <span className="ml-[350px] font-light">Petrol</span>
          </Typography>
          <hr className="mb-4 " />
          <Typography
            variant="h6"
            color="blue-gray"
            className="mb-2 shadow-lg border rounded-md "
          >
            <div className="space-x-4 w-[35rem] h-[14rem] ">
              <h3 className="ml-4 mt-3 mb-2">Contact the Owner</h3>
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 mb-10">
                <div className="border h-14 w-[250px] rounded ">
                  <label className="font-light ml-2">First Name</label>
                  <h3 className="ml-2">Naphtali</h3>
                </div>

                <div className="border border-2-gray h-14 w-[250px] rounded ">
                  <label className="font-light ml-2">Last Name</label>
                  <h3 className="ml-2">Morage</h3>
                </div>

                <div className="border border-2-gray h-14 w-[250px] rounded ">
                  <label className="font-light ml-2">Email</label>
                  <h3 className="ml-2">naphtalimorage55@gmail.com</h3>
                </div>

                <div className="border border-2-gray h-14 w-[250px] rounded ">
                  <label className="font-light ml-2">Phone</label>
                  <h3 className="ml-2">0716220216</h3>
                </div>
              </div>
              <div className="social-icons relative bottom-5 left-44  w-44 ">
                <div className=" ml-5 space-x-4">
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="2x"
                      color="#25D366"
                    />
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      color="#1DA1F2"
                    />
                  </a>
                  <a
                    href="https://facebook.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="2x"
                      color="#1877F2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Typography>

          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Ask Any Question
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      <div className="lg:w-full lg:max-w-[90rem] mb-10 shadow-lg ">
        <h1 className="ml-8 text-4xl text-center font-bold font-sans">Similar Motorcycles</h1>
        <h4 className="text-center">You may also like the following?</h4>
        <div className=" ml-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}

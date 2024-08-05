"use client";

// import { useEffect, useState } from "react"
// export default function Contact() {
//   // useEffect( () => {
//   //   test();
//   // }, [])
//     return (
//       <div>
//         <h3>Contact the MotorDealers</h3>
//       </div>
//     )

//      async function test() {

//       try {

//         const response = await fetch("/api/motorbike", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify( {firstName, lastName, email, phoneNumber}),
//         });

//         const data = await response.json();
//         console.log(`ui data${data}`)

//         console.log("Form submission successful", data);
//       } catch (err) {
//         console.log(`Error submitting the form ${err}`);
//       }
//     }
//   }

// import { useEffect, useState } from 'react';

// export default function Contact()  {
//   const [motorbikes, setMotorbikes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMotorbikes = async () => {
//       try {
//         const response = await fetch('/api/motorbike');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMotorbikes(data.motorbikes);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching motorbikes:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchMotorbikes();
//   }, []);

//   if (loading) {
//     return <p>Loading motorbikes...</p>;
//   }

//   if (error) {
//     return <p>Error loading motorbikes: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1>Motorbikes</h1>
//       <ul>
//         {motorbikes.map((motorbike) => (
//           <li key={motorbike.id}>{motorbike.model}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// import { useState } from 'react';

// const Contact = () => {
//   const [motorbikeId, setMotorbikeId] = useState('');
//   const [motorbike, setMotorbike] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async ({id}) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`/api/motorbike/motorbikeId?id=${motorbikeId}`);
//       if (!response.ok) {
//         throw new Error('Motorbike not found');
//       }
//       console.log(`the id being sent ${motorbikeId}`);

//       const data = await response.json();
//       console.log(data);
//       setMotorbike(data);
//     } catch (error) {
//       console.log(`user not sent`);
//       setError(error.message);
//       setMotorbike(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Search Motorbike by ID</h1>
//       <input
//         type="text"
//         value={motorbikeId}
//         onChange={(e) => setMotorbikeId(e.target.value)}
//         placeholder="Enter Motorbike ID"
//       />
//       <button onClick={handleSearch}>Search</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {motorbike && (
//         <div>
//           <h2>Motorbike Details</h2>
//           <p>ID: {motorbike.id}</p>
//           <p>Model: {motorbike.model}</p>
//           <p>Manufacturer: {motorbike.manufactureYear}</p>
//           <p>Price: {motorbike.price}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

//Motorbike Endpoints:

// POST /motorbikes
     // Create a new motorbike.
// GET /motorbikes
     // Get all motorbikes.


     import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export async function POST(request) {
//   const { content } = await request.json();

//   try {
//   console.log(`object: server comp}`)
//   // const firstNamei = "naph"
//   // const lastNamei = "tali"
//   // const emaili = "naph@test.com"
//   // const phonei = "test phone"
  
//       const prismUser = await prisma.user.create({
//         data: {
//             firstName: content.firstName,
//             lastName: content.lastName,
//             email: content.email,
//             phoneNumber: content.phoneNumber
//         },
//       });
//       return Response(prismUser);
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Internal server error" }, { status: 500 });
//   }
// }

export async function POST(request) {
  const { regno,mileage,description,condition,color,manuctureyear,make,model,enginesize,fueltype,fuelconsumption,price,location, userId} = await request.json();

    try {
      const motorbike = await prisma.motorbike.create({
        data: {
          plateNumber: regno,
          color: color,
          engineSize: parseFloat(enginesize),
          fuelConsumption: parseFloat(fuelconsumption),
          make: make,
          condition: condition,
          model: model,
          price: parseFloat(price),
          fuelType: fueltype,
          manufactureYear: parseInt(manuctureyear),
          mileage: parseFloat(mileage),
          location: location,
          description: description,
          availability: true,
          user: {
               connect: { id: userId } 
             }
        },
      });

      return Response.json({motorbike}, { status: 201 })
    } catch (error) {
      console.log(error)
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }
  
}

  export async function GET(res) {
     try {
          const motorbikes = await prisma.motorbike.findMany();
          return Response.json({ motorbikes }, {status: 200});
        } catch (error) {
          console.error(error);
          return Response.json({ error: 'Internal server error' }, {status: 500});
        }
  } 



  
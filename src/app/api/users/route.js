// User Endpoints:

// POST /users
   // Create a new user.
// GET /users
   // Get all users.
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { firstName, lastName, email, phoneNumber } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
     
    if (!user) {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
        },
      });
      const results = Response.json({ user }, { status: 201 });
      return results;
    } else {
      return Response.json({ user }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}


export async function GET(res) {
  try {
       const users = await prisma.user.findMany();
       return Response.json({ users }, {status: 200});
     } catch (error) {
       console.error(error);
       return Response.json({ error: 'Internal server error' }, {status: 500});
     }
} 

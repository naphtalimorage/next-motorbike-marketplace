// PUT /motorbikes/:id
      // Update a specific motorbike by ID.
// DELETE /motorbikes/:id
      // Delete a specific motorbike by ID.

// GET /motorbikes/:id
      // Get a specific motorbike by ID.
// GET /users/:id/motorbikes
      // Get all motorbikes for a specific user.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, {params}) {
  const {id}  = params;
  console.log(`if data is picking this get`);
    try {
    const motorbike = await prisma.motorbike.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(`if data is picking this get`);

    if (!motorbike) {
      return  Response.json({ error: "motorbike not found" }, { status: 404 });
    } else {
      return Response.json({ motorbike }, { status: 200 });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    return new Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  const { firstName, lastName, email, phoneNumber } = await req.json();
  try {
    const motorbike = await prisma.motorbike.updateMany({
      where: {
        id: parseInt(id),
      },
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
    });
    if (!motorbike) {
      return Response.json({ error: "Failed to Update" });
    } else {
      return Response.json({ user }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error: "Interna server error" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const motorbike = await prisma.motorbike.deleteMany({
      where: {
        id: parseInt(id),
      },
    });

    if (!motorbike) {
      return Response.json({ error: "User not found" }, { status: 404 });
    } else {
      return new Response();
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

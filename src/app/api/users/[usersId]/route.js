// GET /users/:id
// Get a specific user by ID.
// PUT /users/:id
// Update a specific user by ID.
// DELETE /users/:id
// Delete a specific user by ID.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const { id } = req.query;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    } else {
      return Response.json({ user }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req) {
  const { firstName, lastName, email, phoneNumber } = await req.json();
  try {
    const user = await prisma.user.updateMany({
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
    if (!user) {
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
    const user = await prisma.user.deleteMany({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    } else {
      return new Response();
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

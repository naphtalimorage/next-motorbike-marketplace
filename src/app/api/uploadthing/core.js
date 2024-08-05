const { createUploadthing } = require("uploadthing/next");
const { UploadThingError } = require("uploadthing/server");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const f = createUploadthing();

const auth = (req) => ({ id: "user1" });

const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);

      if (!user) throw new UploadThingError("Unauthorized");

      return {userId: user.id};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("onUploadComplete triggered"); // Debugging log
      console.log("Metadata:", metadata); // Log metadata
      console.log("File URL:", file.url); // Log file URL

      try {
        // Ensure metadata contains motorbikeId
        const motorbikeId = parseInt(metadata.motorbikeId);
        console.log("motorbike metadata",motorbikeId);

        if (!motorbikeId) {
          console.error("Motorbike ID is missing in metadata");
          return;
        }

        // Update motorbike record with the image URL
        const updatedMotorbike = await prisma.motorbike.update({
          where: { id: motorbikeId },
          data: {
            imageUrls: {
              push: file.url, // Add the file URL to the motorbike's imageUrls array
            },
          },
        });

        console.log("Motorbike updated with image URL:", updatedMotorbike);
      } catch (error) {
        console.error("Error updating motorbike with image URL:", error);
      }
    }),
};

module.exports = { ourFileRouter };

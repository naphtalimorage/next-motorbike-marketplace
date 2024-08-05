import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Since JavaScript does not have type annotations, we don't need to specify the router type.
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

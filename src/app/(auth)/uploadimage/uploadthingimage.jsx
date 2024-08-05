"use client";

import {  UploadButton } from "@/utils/uploadthing";

export default function UploadImage({handleSubmit, prevStep, bikeinfo }) {
    const onUploadComplete = async (res) => {
        console.log("Files:", res);
        // Optionally notify the user or perform other actions here
        
        alert("Upload Completed");
        
        // Call handleSubmit or any other finalization logic if needed
        await handleSubmit();
      };
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <button
          onClick={prevStep}
          className="flex items-center w-[465px]  justify-center gap-2 bg-gray-900 text-white h-10"
        >
          Previous
        </button>

      <button
          onClick={handleSubmit}
          type="submit"
          className="bg-gray-900 w-[465px] text-white h-10"
        >
          Submit
        </button>
    </div>
      </div>
      
  );
}



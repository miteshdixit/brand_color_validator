import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

const ImageUpload = ({ onUploadSuccess, setReport }) => {
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    multiple: false,
    onDrop: async (files) => {
      const file = files[0];
      if (file) {
        setUploading(true);
        await handleFileUpload(file);
      }
    },
  });

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:3000/api/v1/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setReport(response.data);

      // Call parent function with uploaded file URL or response
      onUploadSuccess(response.data.fileUrl);
      setUploading(false);
    } catch (error) {
      console.error("Upload failed", error);
      setUploading(false);
    }
  };

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 mt-4 cursor-pointer text-center transition-colors duration-200 ${
        isDragActive
          ? "border-blue-500 bg-blue-100"
          : "border-gray-300 bg-white"
      }`}
    >
      <input {...getInputProps()} />

      <FiUpload size={48} className="mx-auto text-gray-500" />
      <h2 className="text-lg font-medium mt-2">
        {isDragActive ? "Drop image here" : "Drag image or click to upload"}
      </h2>
      <p className="text-sm text-gray-500 mt-1">Supported formats: JPEG, PNG</p>

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Browse Files
      </button>

      {uploading && <p className="mt-2 text-blue-600">Uploading...</p>}
    </div>
  );
};

export default ImageUpload;

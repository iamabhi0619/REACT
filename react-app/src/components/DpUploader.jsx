import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Add icon from react-icons

const DpUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create a local URL to show a preview of the selected file
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }
    setUploading(true);

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "milaap"); // Your Cloudinary preset

    fetch("https://api.cloudinary.com/v1_1/milaap-0619/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.secure_url); // Set the uploaded image URL
        setUploading(false); // Stop spinner after upload
      })
      .catch((err) => {
        console.error(err);
        setUploading(false); // Handle error
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-24 md:w-36 h-24 md:h-36 mb-6">
        {uploading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full">
            <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full"></div>
          </div>
        ) : (
          <>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <label
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gray-100 rounded-full text-gray-600"
                htmlFor="file-upload"
              >
                <FaPlus className="text-lg md:text-2xl text-green-500" />
                <span className="mt-2 text-sm">Upload DP</span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            )}
          </>
        )}
      </div>

      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`px-4 py-2 text-white rounded ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default DpUploader;

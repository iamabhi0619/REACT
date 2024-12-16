import React, { useState } from "react";

const GenderSelector = () => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(""); // To store the uploaded image URL

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    try {
      setUploading(true);
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "milaap"); // Ensure this matches your Cloudinary preset

      fetch("https://api.cloudinary.com/v1_1/milaap-0619/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.secure_url); // Store the secure URL of the uploaded image
          setUploading(false); // Reset the uploading state
        })
        .catch((err) => {
          console.error(err);
          setUploading(false); // Ensure to reset even if there is an error
        });
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload File to Cloudinary</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {url && (
        <div>
          <p>File uploaded successfully!</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View File
          </a>
        </div>
      )}
    </div>
  );
};

export default GenderSelector;

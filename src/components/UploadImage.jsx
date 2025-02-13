import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(""); // Estado para mostrar mensajes

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus(""); // Limpiar mensaje anterior
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Por favor, selecciona un archivo."); // Mensaje de error
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json(); // Obtener la respuesta en formato JSON
      if (result.success) {
        setUploadStatus(result.message); // Mostrar mensaje de éxito
      } else {
        setUploadStatus(result.message); // Mostrar mensaje de error
      }
    } catch (error) {
      console.error("Error al subir el archivo:", error);
      setUploadStatus(
        "Error al subir el archivo. Por favor, inténtalo de nuevo."
      ); // Mensaje de error genérico
    }
  };

  return (
    <div>
      <h3>Subir Imagen</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
      {uploadStatus && (
        <p style={{ color: uploadStatus.includes("Error") ? "red" : "green" }}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default UploadImage;

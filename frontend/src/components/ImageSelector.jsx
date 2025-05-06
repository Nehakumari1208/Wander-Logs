import React, { useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const ImageSelector = ({ image, setImage, handleDeleteImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setImage(file);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    handleDeleteImage();
  };

  useEffect(() => {
    if (typeof image === "string") {
      setPreviewUrl(image);
    } else if (image) {
      setPreviewUrl(URL.createObjectURL(image));
    } else {
      setPreviewUrl(null);
    }

    return () => {
      if (previewUrl && typeof previewUrl === "string" && !image) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [image]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <button
          type="button"
          onClick={onChooseFile}
          className="w-full h-[220px] flex flex-col items-center justify-center gap-3 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-cyan-400 hover:bg-cyan-50/30 rounded-lg cursor-pointer transition-all"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-cyan-100 rounded-full border border-cyan-200 shadow-sm">
            <BsUpload className="text-3xl text-cyan-500" />
          </div>
          <p className="text-sm text-slate-600">Click to upload an image</p>
        </button>
      ) : (
        <div className="relative w-full rounded-lg overflow-hidden">
          <img
            src={previewUrl}
            alt="Selected"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <button
            type="button"
            className="absolute top-3 right-3 bg-white text-red-500 rounded-full p-2 shadow-md hover:bg-red-100 transition"
            onClick={handleRemoveImage}
            title="Remove Image"
          >
            <MdDeleteOutline size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSelector;

import React, { useRef } from "react";
import clsx from "clsx";
import "./fileUpload.css";

export interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  selectedFileName?: string;
  accept?: string;
  label?: string;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  selectedFileName,
  accept = "image/jpeg,image/jpg",
  label = "Upload your photo",
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={clsx("file-upload-container", { error: !!error })}>
      <div className="file-upload">
        <label className="file-upload__label">{label}</label>
        <div className="file-upload__group">
          <button
            type="button"
            className="file-upload__button"
            onClick={handleButtonClick}
          >
            Upload
          </button>
          <div
            className="file-upload__display"
            title={selectedFileName || "Upload your photo"}
          >
            {selectedFileName}
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      {error && <span className="file-upload__error">{error}</span>}
    </div>
  );
};

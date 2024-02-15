"use client";

import { IoCloudUploadOutline } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState();
  const [gpa, setGpa] = useState<any>(null);

  useEffect(() => {
    if (file && !gpa) {
      // process the file
    }
  }, [file]);

  function handleChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <div className="flex items-center justify-center text-white text-xl">
      {gpa ?
        <div>
          <p>Your GPA is {gpa}</p>
        </div>
        :
        file ?
          <div className="animate-pulse" >
            Processing...
          </div>
          :
          <form
            className={`${dragActive ? "bg-blue-400" : ""
              }  px-16 py-8 rounded-lg text-center flex flex-col items-center justify-center outline-dashed outline-2 outline-white cursor-pointer`}
            onDragEnter={handleDragEnter}
            onSubmit={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onClick={openFileExplorer}
          >
            <input
              placeholder="fileInput"
              className="hidden"
              ref={inputRef}
              type="file"
              multiple={true}
              onChange={handleChange}
              accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            />

            <div className="flex items-center gap-2">
              <IoCloudUploadOutline size={24} />
              <p className="text-white">
                Drag and drop, or <span className="font-bold text-yellow cursor-pointer hover:underline">
                  browse files
                </span>
              </p>
            </div>
          </form>
      }
    </div>
  );
}
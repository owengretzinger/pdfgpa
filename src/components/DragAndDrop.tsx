"use client";

import { IoCloudUploadOutline } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";
export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState();
  const [gpa, setGpa] = useState<any>(3.8);
  // const url = "http://127.0.0.1:5000/gpa";
  const url = "https://cafentson.pythonanywhere.com/gpa";
  useEffect(() => {
    if (file && !gpa) {
      const formData = new FormData();
      formData.append('transcript_file', file);
      console.log(file);
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then(
          (data) => {
            console.log(data)
            setGpa(data.gpa)
          }
        ).catch(
          (error) => {
            console.log(error)
            setGpa(-1)
          }
        );
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
    <div className="flex items-center justify-center text-white text-center text-xl">
      {gpa ?
        (gpa == -1) ?
          <div>
            <p className="text-2xl">Something went wrong :(</p>
          </div>
          :
          (gpa < 3.8) ?
            <div>
              <p className="text-2xl">Your GPA is <span className="font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient">{gpa}</span></p>
            </div>
            :
            <div>
              <h3 className="font-extrabold text-3xl text-red-500 pb-3">NERD ALERT !</h3>
              <p className="text-2xl pb-4">Your GPA is <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text animate-gradient">{gpa}</span></p>
              <img src="/nerd_emoji.gif" alt="nerd_emoji_gif" className="w-64" />
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
              accept=".pdf"
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
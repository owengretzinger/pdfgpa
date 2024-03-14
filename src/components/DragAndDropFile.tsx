'use client';

import { uploadFileAtom } from '@/atoms/atoms';
import { atom, useAtom, useSetAtom } from 'jotai';
import { useRef, useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

const dragAtom = atom(false);

export default function DragAndDropFile() {
  const [dragActive, setDragActive] = useAtom(dragAtom);
  const inputRef = useRef<any>(null);
  const uploadTranscript = useSetAtom(uploadFileAtom);

  function handleChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      uploadTranscript(e.target.files[0]);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadTranscript(e.dataTransfer.files[0]);
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
    inputRef.current.value = '';
    inputRef.current.click();
  }

  return (
    <form
      className={`${
        dragActive ? '-translate-y-1 bg-darkgrey' : 'bg-black'
      }  relative z-50 flex cursor-pointer flex-col items-center justify-center rounded-lg px-16 py-8 text-center shadow-lg shadow-white/20 outline-dashed outline-2 outline-white transition-transform duration-500 hover:bg-darkgrey`}
      onDragEnter={handleDragEnter}
      onSubmit={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onClick={openFileExplorer}
    >
      <input
        placeholder='fileInput'
        className='hidden'
        ref={inputRef}
        type='file'
        multiple={true}
        onChange={handleChange}
        accept='.pdf'
      />

      <div className='flex items-center gap-2'>
        <IoCloudUploadOutline size={24} />
        <p className='text-white'>
          Drag and drop, or{' '}
          <span className='cursor-pointer font-bold text-yellow hover:underline '>
            browse files
          </span>
        </p>
      </div>
    </form>
  );
}

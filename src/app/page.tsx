'use client';

import { GPA } from '@/components/GpaResultsCard';
import DragAndDropFile from '@/components/DragAndDropFile';
import { useAtomValue } from 'jotai';
import {
  courselistAtom,
  gpaAtom,
  gpaStringAtom,
  uploadStatusAtom,
} from '@/atoms/atoms';

export default function Home() {
  const gpa = useAtomValue(gpaStringAtom);
  const courselist = useAtomValue(courselistAtom);
  const uploadStatus = useAtomValue(uploadStatusAtom);

  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center text-white'>
      <h1 className='text-3xl'></h1>
      <div className='flex items-center justify-center text-center text-xl text-white'>
        {uploadStatus === 'waiting' && <DragAndDropFile />}
        {uploadStatus === 'processing' && (
          <p className='animate-pulse'>Processing...</p>
        )}
        {uploadStatus === 'success' && (
          <GPA gpaString={gpa} courselist={courselist} />
        )}
        {uploadStatus === 'error' && (
          <p className=''>Something went wrong :(</p>
        )}
      </div>
    </main>
  );
}

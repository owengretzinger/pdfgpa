'use client';

import { GPA } from '@/components/GpaResultsCard';
import DragAndDropFile from '@/components/DragAndDropFile';
import { useAtomValue } from 'jotai';
import { courselistAtom, gpaStringAtom, uploadStatusAtom } from '@/atoms/atoms';
import HomeButton, { HomeButtonFixedTopLeft } from '@/components/HomeButton';

export default function Home() {
  const gpa = useAtomValue(gpaStringAtom);
  const courselist = useAtomValue(courselistAtom);
  const uploadStatus = useAtomValue(uploadStatusAtom);

  return (
    <main className='flex min-h-screen w-screen flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center justify-center text-center text-xl text-white'>
        {uploadStatus === 'waiting' && (
          <>
            <h1 className='mb-4 text-4xl font-black'>
              McMaster GPA Calculator
            </h1>
            <p className='mb-12'>
              Upload your unofficial transcript to calculate your GPA on a 4.0
              scale
            </p>
            <DragAndDropFile />
          </>
        )}
        {uploadStatus === 'processing' && (
          <>
            <p className='animate-pulse'>Processing...</p>
            <HomeButton />
          </>
        )}
        {uploadStatus === 'success' && (
          <>
            <GPA gpaString={gpa} courselist={courselist} />
            <HomeButtonFixedTopLeft />
          </>
        )}
        {uploadStatus === 'error' && (
          <>
            <p className=''>Something went wrong :(</p>
            <HomeButton />
          </>
        )}
      </div>
    </main>
  );
}

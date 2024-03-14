'use client';

import { resetAllAtom } from '@/atoms/atoms';
import { useSetAtom } from 'jotai';

export default function HomeButton() {
  const reset = useSetAtom(resetAllAtom);

  return (
    <button
      onClick={reset}
      className='my-4 rounded-lg bg-black px-6 py-3 outline outline-2 outline-white'
    >
      Home
    </button>
  );
}

export function HomeButtonFixedTopLeft() {
  const reset = useSetAtom(resetAllAtom);

  return (
    <div className='fixed left-4 top-4'>
      <button
        onClick={reset}
        className='rounded-lg bg-black px-6 py-3 outline outline-2 outline-white'
      >
        Home
      </button>
    </div>
  );
}

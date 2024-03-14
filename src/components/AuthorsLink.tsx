import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

export default function AuthorsLink() {
  return (
    <div className='absolute bottom-0 mb-2 flex w-screen justify-center'>
      <Link
        className='text-lightgrey'
        href='https://github.com/owengretzinger/pdfgpa'
        target='_blank'
      >
        Built by Ankush, Hilary, Owen, and Timothy
        <BsGithub className='ml-2 inline-block' />
      </Link>
    </div>
  );
}

'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from './aceternity/3dCard';

interface Course {
  name: string;
  grade: string;
  high_grade: boolean;
}

export function GPA({
  gpaString,
  courselist,
}: {
  gpaString: string;
  courselist: Course[];
}) {
  return (
    <CardContainer
      className={`inter-var mt-20 rounded-lg border bg-black text-white`}
    >
      <CardBody className='group/card relative h-auto min-w-[35rem] rounded-lg px-10 pb-8 pt-6 shadow-2xl shadow-green-300/[0.4] outline outline-2 outline-white'>
        <CardItem as='p' translateZ='40'>
          <p className='pb-6'>
            Your GPA is{' '}
            <span className='animate-gradient bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-4xl font-extrabold text-transparent'>
              {gpaString}
            </span>
          </p>
        </CardItem>
        <CardItem
          translateZ='40'
          className='flex w-full flex-col items-start gap-2 text-sm'
        >
          {courselist.map((course, index) => (
            <div
              key={index}
              className='flex w-full items-center justify-between'
            >
              <p>{course.name}</p>
              <p className='font-black'>{course.grade}</p>
            </div>
          ))}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

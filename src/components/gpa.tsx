"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

interface Course {
  name: string;
  grade: string;
  high_grade: boolean;
}

export function GPA({ gpa, courselist }: { gpa: number, courselist: Course[] }) {
  return (
    <CardContainer className={`mt-20 inter-var text-white bg-black rounded-lg border`}>
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-green-300/[0.4] min-w-[35rem] rounded-lg h-auto py-6 px-10 outline outline-2 outline-white">
        <CardItem
          as="p"
          translateZ="40"
        >
          <p className="pb-6">
            Your GPA is <span className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text animate-gradient">{gpa}</span>
          </p>
        </CardItem>
        <CardItem translateZ="40" className="flex flex-col items-start gap-2 text-sm w-full">
          {courselist.map((course, index) => (
            <div key={index} className="flex justify-between items-center w-full">
              <p>{course.name}</p>
              <p className="font-black">{course.grade}</p>
            </div>
          ))}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

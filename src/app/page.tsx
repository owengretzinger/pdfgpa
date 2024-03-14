import DragAndDrop from "@/components/DragAndDrop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl"></h1>
      <DragAndDrop />
    </main>
  );
}

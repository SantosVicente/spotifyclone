import Image from "next/image"
import Arrow from "../assets/arrow.png"
import { StretchVertical, Plus, ArrowRight, ChevronDown } from 'lucide-react';
import Link from "next/link";
import BodyLibary from "./BodyLibary";

export default function Library() {
  return(
    <>
      <div className="fixed bg-gray-900 mt-[-1rem] py-2">
        <div className="flex gap-10">
          <Link className="ml-1 flex items-center text-zinc-400 gap-2 hover:text-zinc-50 transition-colors" href="">
              <StretchVertical size={28}/>
              <p className="font-bold ">Sua Biblioteca</p>
          </Link>

          <div className="flex gap-3">
            <Link href="" className="flex items-center text-zinc-400 hover:text-zinc-50 transition-colors rounded-full p-1 hover:bg-gray-800">
              <Plus size={23}/>
            </Link>

            <Link href="" className="flex items-center text-zinc-400 hover:text-zinc-50 transition-colors rounded-full p-1 hover:bg-gray-800">
              <ArrowRight size={23}/>
            </Link>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Link href="" className="bg-gray-700 px-3 py-[.375rem] bg-opacity-70 rounded-full text-sm hover:bg-opacity-100 transition duration-200">
            <h1>Playlists</h1>
          </Link>
          <Link href="" className="bg-gray-700 px-3 py-[.375rem] bg-opacity-70 rounded-full text-sm hover:bg-opacity-100 transition duration-200">
            <h1>Artistas</h1>
          </Link>
          <Link href="" className="bg-gray-700 px-3 py-[.375rem] bg-opacity-70 rounded-full text-sm hover:bg-opacity-100 transition duration-200">
            <h1>Álbuns</h1>
          </Link>
          <Link href="" className="flex p-2 items-center bg-opacity-70 rounded-full bg-gray-700 hover:bg-opacity-100 transition duration-200">
            <Image className="rotate-180" src={Arrow} alt="" width={10} ></Image>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col">
        <BodyLibary />
      </div>
    </>   
  )
}
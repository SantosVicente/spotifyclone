import Image from "next/image"
import Arrow from "../assets/arrow.png"
import Link from "next/link"
import { MonitorDown } from 'lucide-react';
import Profile from "../assets/340134409_550489173856112_3733834080099373186_n.jpg"

export default function Header () {
  return(
    <header className="flex items-center fixed h-[7vh] w-full px-8 py-4">
      <div className="flex gap-2">
        <Link href="">
          <div className="bg-opacity-50 py-2 px-3 rounded-full bg-black">
            <Image src={Arrow} alt="" width={8}></Image> 
          </div>
        </Link>
        <Link href="">
          <div className="bg-opacity-50 py-2 px-3 rounded-full bg-black">
            <Image className="rotate-180" src={Arrow} alt="" width={8} ></Image>
          </div>
        </Link>
      </div>

      <div className="flex gap-2 ml-[64vw]">
        <Link href="" className="flex items-center bg-opacity-50 bg-black text-zinc-300 hover:text-white transition-colors rounded-full py-[0.45rem] px-3 gap-1 text-sm font-bold">
          <MonitorDown size={18}/>
          <p>Instalar aplicativo</p>
        </Link>

        <Link href="" className="bg-opacity-50 p-1 rounded-full bg-black">
          <Image src={Profile} alt="" width={25} className="rounded-full"/>
        </Link>
      </div>
    </header>
  )
}
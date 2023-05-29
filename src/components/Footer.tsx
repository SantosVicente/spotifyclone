import Image from "next/image"
import image from "../assets/000000.png"
import { Heart, ListMusic, Maximize2, Mic2, MonitorSpeaker, Repeat, ScreenShare, Shuffle, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import Link from "next/link";
import Player from "../assets/triangle-15.svg"

export default function Footer() {
  return(
    <>
      <div className="flex items-center gap-4">
        <Link href="">
          <Image src={image} alt="" width={55} className="rounded-md"/>
        </Link>
        <div>
          <Link href="">
            <h1 className="text-sm hover:underline">Título da música</h1>
          </Link>
          <Link href="">
            <h2 className="text-xs text-zinc-400 hover:underline hover:text-zinc-50">Autor da música</h2>
          </Link>
        </div>
        <Link href="">
          <Heart size={18} className="ml-2 text-zinc-400 hover:text-zinc-50"/>
        </Link>
        <Link href="">
          <ScreenShare size={18} className="text-zinc-400 hover:text-zinc-50"/>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={20} className="text-zinc-400 hover:text-white"/>
          </button>
          <button>
            <SkipBack size={20} className="text-zinc-400 hover:text-white"/>
          </button>
          <button className="w-8 h-8 hover:w-9 hover:h-9 hover:mx-[-.14rem] hover:my-[-.14rem] flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Image 
                className="rotate-90 w-4 top-[14px] left-4" 
                src={Player} 
                alt=""
            />
          </button>
          <button>
            <SkipForward size={20} className="text-zinc-400 hover:text-white"/>
          </button>
          <button>
            <Repeat size={20} className="text-zinc-400 hover:text-white"/>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-[40rem] bg-zinc-600">
            <div className="bg-white h-1 rounded-full w-24"></div>
          </div>
          <span className="text-xs text-zinc-400">2:51</span>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Mic2 size={16} />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors">        
          <ListMusic size={20} />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <MonitorSpeaker size={20} />
        </button>
        <div className="flex gap-2 items-center">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Volume2 size={20} />
          </button>
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-white h-1 rounded-full w-16"></div>
          </div>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>
    </>   
  )
}
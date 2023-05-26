'use client'

import Image from "next/image"
import Player from "../assets/triangle-15.svg"
import Playlist from "../assets/zutomayo-d05d68cac7224aeb6204f3c10e3e6b01_hd.jpg"
import Link from "next/link"

export default function Content() {
  return (
    <Link href="">
      <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-md hover:bg-zinc-600 transition-colors"
        onMouseEnter={() => {
          const image = document.getElementById('playlist-image');
          image.classList.add('opacity-100');
        }}
        onMouseLeave={() => {
          const image = document.getElementById('playlist-image');
          image.classList.remove('opacity-100');
        }}
      >
        <Image 
          src={Playlist} 
          width={75} 
          alt="" 
          className="rounded-l-md"
        />
        Rock & Indie
        <div id="playlist-image" className="ml-[13rem] p-4 transition-opacity opacity-0 rounded-full bg-green-500">
          <Image 
            className=" rotate-90 w-5" 
            src={Player} 
            alt=""
          />
        </div>
      </div>
    </Link>
  )
}
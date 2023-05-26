'use client'

import React from "react"
import Image from "next/image"
import './globals.css'
import Player from "../assets/player.png"
import Playlist from "../assets/zutomayo-d05d68cac7224aeb6204f3c10e3e6b01_hd.jpg"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          Bom dia
        </h1>
        <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-4">
          
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
              <Image 
                className="ml-[13rem] w-12 transition-opacity uration-300 opacity-0" 
                src={Player} 
                alt=""
                id="playlist-image"
              />
            </div>
          </Link>
        
        </div>
      </div>
    </>
  )
}
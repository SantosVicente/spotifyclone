'use client'

import Image from "next/image"
import Player from "../assets/triangle-15.svg"
import Playlist from "../assets/000000.png"
import Link from "next/link"

export default function Content() {
  return (
    <>
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image1');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image1');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image1" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
              />
            </div>
          </div>
        </div>
      </Link>
      
      {/*Deletavel*/}
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image2');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image2');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image2" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
                />
            </div>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image3');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image3');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image3" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
                />
            </div>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image4');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image4');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image4" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
                />
            </div>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image5');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image5');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image5" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
                />
            </div>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex items-center font-bold gap-4 bg-zinc-700 bg-opacity-60 w-[30rem] rounded-[4px] hover:bg-zinc-600 transition-colors"
          onMouseEnter={() => {
            const image = document.getElementById('playlist-image6');
            image.classList.add('opacity-100');
          }}
          onMouseLeave={() => {
            const image = document.getElementById('playlist-image6');
            image.classList.remove('opacity-100');
          }}
        >
          <Image 
            src={Playlist} 
            width={80} 
            alt="" 
            className="rounded-l-[4px]"
          />
          <div className="flex items-center justify-between w-full">
            <p className="">Título da Playlist</p>
            <div id="playlist-image6" className="relative mr-4 p-[1.5rem] transition-opacity opacity-0 rounded-full bg-green-500">
              <Image 
                className="absolute rotate-90 w-5 top-[14px] left-4" 
                src={Player} 
                alt=""
                />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
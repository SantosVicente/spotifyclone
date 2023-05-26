import React from "react"
import './globals.css'
import Image from "next/image"
import Link from "next/link"
import Content from "@/components/Content"
import ForYou from "@/components/ForYou"

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          Bom dia
        </h1>
        <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-4">
          <Content />
        </div>
  
        {/*Corpo*/}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Feito para você</h1>
            <Link href="">
              <h3 className="text-sm mt-2 text-zinc-400 font-bold hover:underline">Mostrar tudo</h3>
            </Link>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-6 mt-6">
            <ForYou />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Tocados recentemente</h1>
            <Link href="">
              <h3 className="text-sm mt-2 text-zinc-400 font-bold hover:underline">Mostrar tudo</h3>
            </Link>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-6 mt-6">
            <ForYou />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Novos episódios</h1>
            <Link href="">
              <h3 className="text-sm mt-2 text-zinc-400 font-bold hover:underline">Mostrar tudo</h3>
            </Link>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-6 mt-6">
            <ForYou />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Podcasts</h1>
            <Link href="">
              <h3 className="text-sm mt-2 text-zinc-400 font-bold hover:underline">Mostrar tudo</h3>
            </Link>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-6 mt-6">
            <ForYou />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">Populares no Spotify</h1>
            <Link href="">
              <h3 className="text-sm mt-2 text-zinc-400 font-bold hover:underline">Mostrar tudo</h3>
            </Link>
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-6 mt-6">
            <ForYou />
          </div>
        </div>
      </div>
    </>
  )
}
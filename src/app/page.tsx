import React from "react"
import './globals.css'
import Image from "next/image"
import Link from "next/link"
import Content from "@/components/Content"

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
      </div>
    </>
  )
}
import React from "react"
import House from "../assets/house-solid.svg"
import Search from "../assets/magnifying-glass-solid.svg"
import Arrow from "../assets/arrow-left.png"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex">
        <aside className="w-[17.5vw] h-[90vh]">
          <div className="bg-gray-900 h-[11.5vh] m-2 rounded-md px-6 py-5">
            
            <ul className="flex flex-col h-full justify-between">
              <Link href="/">
                <li className="flex flex-row gap-5 items-center">
                  <Image src={House} width={25} height={25} alt=""/>
                  <p className="font-bold">Início</p>
                </li>
              </Link>
              <Link href="/">
                <li className="flex flex-row gap-5 items-center text-zinc-400 hover:text-white transition-colors svgImage">
                  <Image src={Search} width={24} height={24} alt=""/>
                  <p className="font-bold">Buscar</p>
                </li>
              </Link>
            </ul>

          </div>
          <div className="h-[77.5vh] bg-gray-900 m-2 rounded-md p-4 overflow-auto scrollbar-color scrollbar-thumb scrollbar-track">
            Biblioteca
          </div>
        </aside>
        <div className="w-[86vw] h-[90vh] mt-2 mr-3">
          <header className="fixed h-[7vh] w-full px-8 py-4">
            <Image src={Arrow} alt="" width={45} height={45}></Image>
          </header>
          <main className="bg-gray-900 h-[90vh] rounded-md pt-[7vh] px-7 overflow-auto scrollbar-color scrollbar-thumb scrollbar-track">
            main page
          </main>
        </div>
      </div>
      <footer className="bg-black fixed b-0 w-full h-[10vh]">footer</footer>
    </div>
  )
}
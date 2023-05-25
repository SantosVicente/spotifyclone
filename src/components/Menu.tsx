import Link from "next/link";
import Image from "next/image"
import House from "../assets/house-solid.svg"
import Search from "../assets/magnifying-glass-solid.svg"


export default function Menu() {
  return(
    <>
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
    </>
  )
}
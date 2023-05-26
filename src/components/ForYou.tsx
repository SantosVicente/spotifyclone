import Image from "next/image"
import image from "../assets/000000.png"
import Link from "next/link"

export default function ForYou() {
  return(
    <>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>
      <Link href="">
        <div className="flex flex-col items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
          <Image src={image} alt="" width={170} className="rounded-[4px]"></Image>
          <div className=" w-full">
           <h1 className="mt-4 font-semibold">Título da Playlist</h1>
           <h2 className="text-sm text-zinc-400 mt-[6px] mb-6">Nome do Autor</h2>
          </div>
        </div>
      </Link>

    </>
  )
}
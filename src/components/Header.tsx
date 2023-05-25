import Image from "next/image"
import Arrow from "../assets/arrow.png"

export default function Header () {
  return(
    <header className="flex items-center fixed h-[7vh] w-full px-8 py-4">
      <div className="flex gap-4">
        <div className="bg-opacity-50 py-2 px-3 rounded-full bg-black">
          <Image src={Arrow} alt="" width={13}></Image> 
        </div>
        <div className="bg-opacity-50 py-2 px-3 rounded-full bg-black">
          <Image className="rotate-180" src={Arrow} alt="" width={13} ></Image>
        </div>
      </div>
    </header>
  )
}
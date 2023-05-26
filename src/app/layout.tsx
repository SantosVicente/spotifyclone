import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjure',
})

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music.',
}

import Menu from '@/components/Menu'
import Library from '@/components/Library'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-rob bg-zinc-800 text-zinc-50`}>

        {/*Container*/}
        <div className="w-screen h-screen bg-black">
          <div className="flex">

            {/*Left container*/}
            <aside className="w-[17.5vw] h-[90vh]">
              <div className="bg-gray-900 h-[11.5vh] m-2 rounded-md px-6 py-5">
                <Menu />
              </div>
              <div className="h-[77.5vh] bg-gray-900 m-2 rounded-md p-4 overflow-auto">
                <Library />
              </div>
            </aside>

            {/*Right container*/}
            <div className="w-[86vw] rounded-md bg-gradient h-[90vh] mt-2 mr-3">
              <Header />
              <main className=" h-[90vh] px-7 overflow-auto pb-[10vh]">
                {children}
              </main>
            </div>
          </div>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}

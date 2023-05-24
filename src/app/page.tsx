export default function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex">
        <aside className="w-[14vw] h-[90vh]">
          <div className="bg-zinc-950 h-[11.5vh] m-2 rounded-md px-8 py-4">
            <ul>
              <li>Início</li>
              <li>Buscar</li>
            </ul>
          </div>
          <div className="h-[76vh] bg-zinc-950 m-2 rounded-md p-4 overflow-auto scrollbar-color scrollbar-thumb scrollbar-track">
            Biblioteca
          </div>
        </aside>
        <div className="w-[86vw] h-[90vh] mt-2 mr-3">
          <header className="fixed h-[7vh] w-full px-8 py-4">
            header
          </header>
          <main className="bg-zinc-950 h-[88.3vh] rounded-md pt-[7vh] px-7 overflow-auto scrollbar-color scrollbar-thumb scrollbar-track">
            main page
          </main>
        </div>
      </div>
      <footer className="bg-black fixed b-0 w-full h-[10vh]">footer</footer>
    </div>
  )
}

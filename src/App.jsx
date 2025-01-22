
import { Footer, Help, Hero, Navbar, Trust, Uses } from "./components";

export default function App() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Help/>
      <Uses/>
      <Trust/>
      <Footer/>
    </main>
  )
}
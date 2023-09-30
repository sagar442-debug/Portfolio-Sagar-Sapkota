import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import MidSection from "./components/MidSection";

function App() {
  return (
    <>
      <div className="bg-[#0f1724] h-full w-full absolute -z-10 font-poppins"></div>
      <div className="px-10 pt-5">
        <Navbar />
        <MidSection />
      </div>
    </>
  );
}

export default App;

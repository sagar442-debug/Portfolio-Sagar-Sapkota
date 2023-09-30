import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import MidSection from "./components/MidSection";

function App() {
  return (
    <>
      <div className="bg-[#0f1724] h-full w-full absolute -z-10 font-poppins"></div>
      <div className="mx-6 pt-5 sm:px-10">
        <Navbar />
        <MidSection />

      </div>
      <div className="circle-setup sm:hidden">
        <div className="border-2 absolute overflow-hidden border-[#478fce] -z-10 top-24 rounded-full h-[30rem] w-[30rem] animate-pulse  transform -translate-x-1/2">
        </div>
        <div className=" absolute pulse bg-[#494397] h-[5rem] w-[5rem] top-[30rem] animate-ping left-20 -z-10 rounded-full ">
          </div>
      </div>
    </>
  );
}

export default App;

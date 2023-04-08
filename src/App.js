import './App.css';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <div className='bg-[#0f1724] h-full w-full absolute -z-10'>
      </div>
    <div className='px-10 pt-5'>
      <Navbar/>

    </div>
    </>
  );
}

export default App;

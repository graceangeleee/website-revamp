import Header from './header';
import Sidebar from './sidebar';
import FourtyYears from './main40yrs';
import Image from 'next/image';
import Stats from './stats';

export default function Home() {
  return (
    <main className='flex relative min-h-screen flex-col justify-between p-5'>
      <Header />
      <h1 className='relative self-center font-poppins font-bold text-white'>
        UPLB Computer Science Society
      </h1>
      {/* uncomment when bg is added
        <h1 className="relative self-center font-poppins font-bold text-white">UPLB Computer Science Society</h1> */}
      <div className='flex flex-row'>
        <Sidebar />
        <div className='bg-custom-blue'>
          <FourtyYears />
          <Stats/>
        </div>
        
      </div>
    </main>
  )
}

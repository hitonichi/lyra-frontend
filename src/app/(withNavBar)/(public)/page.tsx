import homeLogo from '@/../public/Home_img.jpg'
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className='flex justify-center ' >
        <div className="bg-primary-foreground flex justify-around w-2/3 rounded-3xl">
          <div className='w-1/3 p-10 grid grid-row-1' >
            <h1 className="text-3xl w-2/3 font-bold " >One place to manage them all</h1>
            <p className='w-full ' >Research the most suitable path </p>

            <button className="bg-black rounded-[40px] text-white w-5/6">Get started</button>
          </div>
          <Image className='p-10' height={50} width={500} src={homeLogo} />
        </div>
      </div>
    </>
  );
}

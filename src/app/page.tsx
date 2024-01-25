import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Bento from './components/Bento';

export default function Home() {
  return (
    <main className='flex justify-center  mt-[5rem]'>
      <div className='main__container center max-w-[113.5rem] w-[80%]  flex flex-col justify-between'>
        <Header />
        <Bento />
        <Footer />
      </div>
    </main>
  );
}

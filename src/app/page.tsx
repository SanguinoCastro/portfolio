import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='flex justify-center  mt-[5rem] min-h-screen'>
      <div className='main__container center max-w-[113.5rem] w-[80%] h-[90vh] border border-white flex flex-col justify-between'>
        <Header />
        <Footer />
      </div>
    </main>
  );
}

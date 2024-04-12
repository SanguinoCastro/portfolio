'use client';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext';

const Search = () => {
  const { language } = useLanguage();
  const [searchValue, setSearchValue] = useState('');
  const [weather, setWeather] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    // Llama a la función firstStep solo una vez cuando el componente se monta por primera vez
    firstStep();
  }, []);

  const firstStep = () => {
    // Realiza la llamada a la API solo si la búsqueda aún no se ha realizado
    if (!isData) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Calella&appid=7b23f2ded4201982388034f2abecb1f5&units=metric`
        )
        .then((res) => {
          setWeather(res.data);
          console.log(res.data);
          setIsData(true);
        })
        .catch((err) => {
          setIsData(false);
        });
    }
  };

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7b23f2ded4201982388034f2abecb1f5&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
        setIsData(true);
      })
      .catch((err) => {
        setIsData(false);
      });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick(); // Envía el formulario si la tecla presionada es "Enter"
    }
  };

  return (
    <div className='w-full h-full border-rad flex flex-col items-center justify-center'>
      <div className='w-full flex justify-center z-[0]'>
        <div className='weather__input flex w-full  justify-end pr-[0.5rem]'>
          <input
            className='weather__input--camp border border-r-0 border-[var(--olive)] w-[40%] mr-[-7%] rounded-l text-center pr-[2.5rem] h-[2.5rem] text-[1.4rem]  opacity-60 text-[var(--black)]'
            placeholder={`${language === 'es' ? 'Ciudad' : language === 'ca' ? 'Ciutat' : 'City'}`}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleClick}
            className='weather__input--btn bg-[var(--olive)] w-[2.5rem] h-[2.3rem] mt-[0.1rem]'
            aria-label={`${language === 'es' ? 'Buscar' : language === 'ca' ? 'Cercar' : 'Search'}`}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      {isData ? (
        <Card value={weather} />
      ) : (
        <div className='h-[89.5%] w-[94.5%] mt-[-4rem] weather__card border-rad'>
          <p className='mt-[7rem]'>
            {language === 'es'
              ? 'Ha habido un error al consultar el tiempo de tu ciudad'
              : language === 'ca'
                ? 'Hi ha hagut un error al consultar el temps de la teva ciutat'
                : 'There was an error while fetching the weather for your city.'}
          </p>
        </div>
      )}
    </div>
  );
};
export default Search;

// 'use client';

// import { SearchIcon } from '@chakra-ui/icons';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card';
// import Image from 'next/image';
// import { useLanguage } from '@/app/context/LanguageContext';

// const Search = () => {
//   const { language } = useLanguage();
//   const [searchValue, setSearchValue] = useState('');
//   const [weather, setWeather] = useState([]);
//   const [isData, setIsData] = useState(false);

//   const firstStep = () => {
//     const err = axios
//       .get(
//         `http://api.openweathermap.org/data/2.5/weather?q=Calella&appid=7b23f2ded4201982388034f2abecb1f5&units=metric`
//       )
//       .then((res) => {
//         setWeather(res.data);
//         console.log(res.data);
//         setIsData(true);
//       })
//       .catch((err) => {
//         err;
//         setIsData(false);
//       });
//   };

//   useEffect(() => {
//     // Llamar a la función firstStep solo si la primera llamada aún no se ha realizado
//     if (!isData) {
//       firstStep();
//     }
//   }, [isData]);

//   console.log(isData);
//   const handleClick = () => {
//     const err = axios
//       .get(
//         `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7b23f2ded4201982388034f2abecb1f5&units=metric`
//       )
//       .then((res) => {
//         setWeather(res.data);
//         console.log(res.data);
//         setIsData(true);
//       })
//       .catch((err) => {
//         err;
//         setIsData(false);
//       });
//   };
//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleClick(); // Envía el formulario si la tecla presionada es "Enter"
//     }
//   };

//   return (
//     <div className='w-full h-full border-rad flex flex-col items-center justify-center'>
//       <div className='w-full flex justify-center z-[0]'>
//         <div className='weather__input flex w-full  justify-end pr-[0.5rem]'>
//           <input
//             className='weather__input--camp border border-r-0 border-[var(--olive)] w-[40%] mr-[-7%] rounded-l text-center pr-[2.5rem] h-[2.5rem] text-[1.4rem]  opacity-60 text-[var(--black)]'
//             placeholder={`${language === 'es' ? 'Ciudad' : language === 'ca' ? 'Ciutat' : 'City'}`}
//             onChange={(e) => setSearchValue(e.target.value)}
//             onKeyDown={handleKeyPress}
//           />
//           <button
//             onClick={handleClick}
//             className='weather__input--btn bg-[var(--olive)] w-[2.5rem] h-[2.3rem] mt-[0.1rem]'
//           >
//             <SearchIcon />
//           </button>
//         </div>
//       </div>
//       {/* <Card value={weather} /> */}
//       {isData ? (
//         <Card value={weather} />
//       ) : (
//         <div className='h-[89.5%] w-[94.5%] mt-[-4rem] weather__card border-rad'>
//           <p className='mt-[7rem]'>
//             Ha habido un error al consultar el tiempo de tu ciudad
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Search;

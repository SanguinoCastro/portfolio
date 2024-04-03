'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import { useDarkMode } from '@/app/context/DarkModeContext';
import React from 'react';
import { useState } from 'react';
import moon from '../../assets/icons/moon.png';
import sun from '../../assets/icons/sun.png';
import brokenClouds from '../../assets/icons/weatherApp/brokenClouds.png';
import cloud from '../../assets/icons/weatherApp/cloud.png';
import cloudSun from '../../assets/icons/weatherApp/cloudSun.png';
import cloudMoon from '../../assets/icons/weatherApp/cloudMoon.png';
import mist from '../../assets/icons/weatherApp/mist.png';
import snow from '../../assets/icons/weatherApp/snow.png';
import showerRain from '../../assets/icons/weatherApp/showerRain.png';
import rainSun from '../../assets/icons/weatherApp/rainSun.png';
import rainMoon from '../../assets/icons/weatherApp/rainMoon.png';
import thunder from '../../assets/icons/weatherApp/thunder.png';
import nika from '../../assets/icons/weatherApp/nika.png';
import Image from 'next/image';

const Card = (props: any) => {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const data = props.value; //stores props values in data
  const weatherItems = data.weather; //gets the values of weather
  let weatherDescription = Object.values(weatherItems)
    .map((itm: any) => itm.description)
    .join('');
  const cityName = data.name;
  const cityMain = data.main;
  const weatherForecast = Math.round(data.main.temp);
  const weatherIcon = Object.values(weatherItems)
    .map((itm: any) => itm.icon)
    .join('');
  const url = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  //date and time
  const dT = data.dt;
  const time = data.timezone;
  const cityMonth = new Date(dT * 1000 + time * 1000).getMonth();
  const cityTime = new Date(dT * 1000 + time * 1000).getDay();
  const minutes = new Date(dT * 1000 + time * 1000).getMinutes();
  const hours = new Date(dT * 1000 + time * 1000).getHours();
  const cityDate = new Date(dT * 1000 + time * 1000).getDate();
  const cityMinutes = minutes < 10 ? `0` + minutes : minutes;
  const cityHours = hours < 10 ? `0` + hours : hours;
  const timeFormat = cityHours >= '12' ? 'PM' : 'AM';
  const mainTime = `${cityHours} :${cityMinutes} `; //${timeFormat}

  const isDay = hours >= 7 && hours < 19 ? true : false;

  const dayArrayEn = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayArrayEs = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const dayArrayCa = [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
  ];
  const day =
    language === 'es'
      ? dayArrayEs[cityTime]
      : language === 'ca'
        ? dayArrayCa[cityTime]
        : dayArrayEn[cityTime];

  const monthArrayEn = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthArrayEs = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const monthArrayCa = [
    'Gener',
    'Febrer',
    'Març',
    'Abril',
    'Maig',
    'Juny',
    'Juliol',
    'Agost',
    'Setembre',
    'Octubre',
    'Novembre',
    'Decembre',
  ];
  const month =
    language === 'es'
      ? monthArrayEs[cityMonth]
      : language === 'ca'
        ? monthArrayCa[cityMonth]
        : monthArrayEn[cityMonth];
  let tempName: any = [];
  let tempValue: any = [];
  let dateSuffix;
  switch (cityDate) {
    case 2:
      dateSuffix = 'nd';
      break;
    case 3:
      dateSuffix = 'rd';
      break;
    default:
      dateSuffix = 'th';
  }
  const fullDate =
    language === 'en' ? (
      <React.Fragment>
        {day} {month} {cityDate}
        {dateSuffix}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {day} {cityDate} de {month}
      </React.Fragment>
    );
  const unicode = '\u00b0';

  //   ${cityDate + dateSuffix}

  //actual data array
  let weatherArray = [cityName, fullDate]; //mainTime
  //weather key names
  Object.keys(cityMain)
    .filter((val, index) => index != 1)
    .map((key) => {
      tempName.push(key);
    });
  //weather value numbers
  Object.values(cityMain)
    .filter((val, index) => index != 1)
    .map((val) => {
      tempValue.push(val);
    });

  //main weather key name and value to display
  let mainTemp = tempName.map((val: any, index: any) => {
    return `${val} : ${tempValue[index]}`;
  });

  console.log(hours, weatherDescription);
  // weatherDescription = 'Nika';
  return (
    <div className='weather__card h-[89%] w-[94.5%]  border-rad mt-[-4.5rem] pt-[3.2rem] '>
      <p
        className={`weather__title underline flex justify-center mt-[-1rem] mr-[18rem] text-[1.8rem] font-bold  ${isDarkMode ? 'text-[var(--white)]' : 'text-[var(--black)]'}`}
      >
        {language === 'es'
          ? 'El tiempo'
          : language === 'ca'
            ? 'El temps'
            : 'The weather'}
      </p>
      <ul className='weather__list pt-[1rem]'>
        {weatherArray.map((element, index) => (
          <li
            className={`weather__list--li flex justify-center w-1/2 mt-[0rem] text-[1.8rem] font-normal text-center ${isDarkMode ? 'text-[var(--white)]' : 'text-[var(--black)]'}`}
            key={index}
          >
            {element}
          </li>
        ))}
      </ul>

      <div
        className={` ${isDay ? 'weather__icon--day' : 'weather__icon--night'} w-[45%] h-[21rem]  flex justify-center items-center mt-[-15rem] ml-[58%] weather__icon`}
      >
        <div className='weather__icon--image mt-[6rem]'>
          {(weatherDescription === 'clear sky' && !isDay) ||
          (weatherDescription === 'clear sky' && !isDay) ? (
            <Image
              src={moon}
              width={55}
              alt='weather-icon'
              className={`clear--moon ${weatherDescription === 'clear sky' ? 'light_filter' : 'shadow_filter'} mt-[1rem]  shadow_filter`}
            />
          ) : (weatherDescription === 'clear sky' && isDay) ||
            (weatherDescription === 'clear sky' && isDay) ? (
            <Image
              src={sun}
              width={55}
              alt='weather-icon'
              className={`clear--sun ${weatherDescription === 'clear sky' ? 'light_filter' : 'shadow_filter'} mt-[1rem]  shadow_filter`}
            />
          ) : weatherDescription === 'broken clouds' ||
            weatherDescription === 'overcast clouds' ? (
            <Image
              src={brokenClouds}
              width={100}
              alt='weather-icon'
              className={`brokenClouds mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'scattered clouds' ? (
            <Image
              src={cloud}
              width={100}
              alt='weather-icon'
              className={`cloud mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'few clouds' && isDay ? (
            <Image
              src={cloudSun}
              width={100}
              alt='weather-icon'
              className={`cloud--sun mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'few clouds' && !isDay ? (
            <Image
              src={cloudMoon}
              width={100}
              alt='weather-icon'
              className={`cloud--moon mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : (weatherDescription === 'rain' && isDay) ||
            (weatherDescription === 'light rain' && isDay) ||
            (weatherDescription === 'moderate rain' && isDay) ||
            (weatherDescription === 'heavy intensity rain' && isDay) ||
            (weatherDescription === 'very heavy rain' && isDay) ||
            (weatherDescription === 'extreme rain' && isDay) ? (
            <Image
              src={rainSun}
              width={90}
              alt='weather-icon'
              className={`rain--sun mt-[1rem] mb-[-1.5rem] shadow_filter`}
            />
          ) : (weatherDescription === 'rain' && !isDay) ||
            (weatherDescription === 'light rain' && !isDay) ||
            (weatherDescription === 'moderate rain' && !isDay) ||
            (weatherDescription === 'heavy intensity rain' && !isDay) ||
            (weatherDescription === 'very heavy rain' && !isDay) ||
            (weatherDescription === 'extreme rain' && !isDay) ? (
            <Image
              src={rainMoon}
              width={90}
              alt='weather-icon'
              className={`rain--moon mt-[1rem] mb-[-1.5rem] shadow_filter`}
            />
          ) : weatherDescription === 'thunderstorm' ||
            weatherDescription === 'thunderstorm with light rain' ||
            weatherDescription === 'thunderstorm with rain' ||
            weatherDescription === 'thunderstorm with heavy rain' ||
            weatherDescription === 'light thunderstorm' ||
            weatherDescription === 'heavy thunderstorm' ||
            weatherDescription === 'ragged thunderstorm' ||
            weatherDescription === 'thunderstorm with light drizzle' ||
            weatherDescription === 'thunderstorm with heavy drizzle' ? (
            <Image
              src={thunder}
              width={100}
              alt='weather-icon'
              className={`thunder mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'snow' ||
            weatherDescription === 'freezing rain' ||
            weatherDescription === 'light snow' ||
            weatherDescription === 'Heavy snow' ||
            weatherDescription === 'sleet' ||
            weatherDescription === 'light shower sleet' ||
            weatherDescription === 'shower sleet' ||
            weatherDescription === 'light rain and snow' ||
            weatherDescription === 'rain and snow' ||
            weatherDescription === 'light shower snow' ||
            weatherDescription === 'shower snow' ||
            weatherDescription === 'heavy shower snow' ? (
            <Image
              src={snow}
              width={100}
              alt='weather-icon'
              className={`snow mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'mist' ||
            weatherDescription === 'smoke' ||
            weatherDescription === 'haze' ||
            weatherDescription === 'sand/dust whirls' ||
            weatherDescription === 'fog' ||
            weatherDescription === 'sand' ||
            weatherDescription === 'dust' ||
            weatherDescription === 'volcanic ash' ||
            weatherDescription === 'squalls' ||
            weatherDescription === 'tornado' ? (
            <Image
              src={mist}
              width={100}
              alt='weather-icon'
              className={`mist mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : weatherDescription === 'Nika' ? (
            <Image
              src={nika}
              width={90}
              alt='weather-icon'
              className={`nika mt-[1rem]  light_filter`}
            />
          ) : weatherDescription === 'shower rain' ||
            'light intensity drizzle' ||
            'drizzle' ||
            'heavy intensity drizzle' ||
            'light intensity drizzle rain' ||
            'drizzle rain' ||
            'heavy intensity drizzle rain' ||
            'shower rain an drizzle' ||
            'heavy shower rain and drizzle' ||
            'shower drizzle' ||
            'light intensity shower rain' ||
            'heavy intensity shower rain' ||
            'ragged shower rain' ? (
            <Image
              src={showerRain}
              width={100}
              alt='weather-icon'
              className={`showerRain mt-[1rem] mb-[-2rem] shadow_filter`}
            />
          ) : (
            ''
          )}

          <p className='weather__temperature text-[var(--white)] flex justify-center text-[1.8rem] mt-[0rem] text-white'>
            {weatherForecast}
            {unicode}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;

{
  /* <p className='weather__temperature text-[var(--white)] flex justify-center mt-[-1.5rem] ml-[21.5rem] text-[1.8rem] text-white'>
        {weatherForecast}
        {unicode}
      </p> */
}

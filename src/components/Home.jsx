import React from 'react'
import moment from 'moment'
import Element from './Element';
import { IoPartlySunnyOutline, IoSunnyOutline, IoCloudyOutline } from 'react-icons/io5';
import News from './News';
import { LiaCloudSunRainSolid } from 'react-icons/lia';
import MapImg from '../../public/map.jpg';
import CloudImg from '../../public/cloud.jpg';
import TempImg from '../../public/temperature.jpg';
import Heading from './Heading';


export default function Home() {

  const weather = {
    isCloudy: false,
    isSunny: false,
  }

  const currentDate = moment().format('ddd MMM DD');
  const currentTime = moment().format('h:mm a');

  const renderWeatherIcon = () => {
    if (weather.isCloudy) {
      return <IoCloudyOutline className='text-9xl text-gray-400' />;
    } else if (weather.isSunny) {
      return <IoSunnyOutline className='text-9xl text-yellow-500' />;
    } else {
      return <IoPartlySunnyOutline className='text-9xl text-orange-400' />;
    }
  };

  const renderWeatherDescription = () => {
    if (weather.isCloudy) {
      return <div><h1 className='text-md font-bold'>Cloudy</h1>
        <p className='text-sm'>MORE DETAILS</p></div>;
    } else if (weather.isSunny) {
      return <div><h1 className='text-md font-bold'>Sunny</h1>
        <p className='text-sm'>MORE DETAILS</p></div>;
    } else {
      return <div><h1 className='text-md font-bold'>Partly Sunny</h1>
        <p className='text-sm'>MORE DETAILS</p></div>;
    }
  };

  return (
    <div className='flex gap-5 my-5'>
      <div className='flex w-[70%] font-roboto'>
        <div className='gap-5 flex flex-col'>
          <div className='rounded-md bg-white'>
            <Heading firstElement="TODAY'S WEATHER" secondElement={currentDate} />
            <div className='p-5'>
              <div className='flex gap-2 pr-10'>
                <div className='text-orange-400 text-xl py-2'><LiaCloudSunRainSolid /></div>
                <div className='text-xl'><p>Intervals of clouds and sunshine; humid with a thunderstorm in parts of the area</p>
                </div>
              </div>
              <div className='flex gap-2 pr-10'>
                <div className='text-orange-400 text-xl py-2'><LiaCloudSunRainSolid /></div>
                <div className='text-xl'><p>Intervals of clouds and sunshine; humid with a thunderstorm in parts of the area</p>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-md bg-white'>
            <Heading firstElement="CURRENT WEATHER" secondElement={currentTime} />
            <div>
              <div className='flex p-5'>
                <div className='flex w-[50%]'>
                  <div>
                    <div>
                      {renderWeatherIcon()}
                    </div>
                    <div className='py-5'>
                      {renderWeatherDescription()}
                    </div>
                  </div>
                  {/* <div>
                <div className='text-9xl text-orange-400 py-2'><IoPartlySunnyOutline />
                </div>
                <h3>Partly Sunny</h3>
                <p className='text-sm'>MORE DETAILS</p>
              </div> */}
                  <div>
                    <div className='flex'><p className='text-8xl pt-6 font-bold'>30°</p>
                      <span className='pt-20 text-2xl'>c</span>
                    </div>
                    <p>RealFeel 37°C</p>
                  </div>
                </div>
                <div className='w-[50%]'>
                  <div>
                    <Element elementName='RealFeel Shade' elementValue='30°C' />
                    <Element elementName='Wind' elementValue='ESE 12 km/h' />
                    <Element elementName='Wind Gusts' elementValue='26 km/h' />
                    <Element elementName='Air Quality' elementValue='Good' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-md bg-white'>
            <Heading firstElement="Delhi Weather Radar & Maps" secondElement='hidden' />
            <div>
              <img src={MapImg} />
            </div>
            <div className='flex p-6 gap-6'>
              <div className='flex gap-3'>
                <div className='h-10 w-10'><img src={CloudImg} className='rounded-full' /></div>
                <div className='py-2'>Clouds</div>
              </div>
              <div className='flex gap-3'>
                <div className='h-10 w-10'><img src={TempImg} className='rounded-full' /></div>
                <div className='py-2'>Temperature</div>
              </div>
            </div>
          </div>
          <div className='rounded-md bg-white'>
            <Heading firstElement="Hourly Weather" secondElement='hidden' />
            <div>
              
            </div>
          </div>
          <div className='rounded-md bg-white'>
            <Heading firstElement="10-Day Weather Forecast" secondElement='hidden' />
            <div>
              
            </div>
          </div>
          <div className='rounded-md bg-white'>
            <Heading firstElement="Sun & Moon" secondElement='hidden' />
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='w-[30%] bg-white rounded-md'>
        <div className='font-bold p-4 text-2xl border-b-2'>Top Stories</div>
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  )
}

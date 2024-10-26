import Image from 'next/image';
import React from 'react';
import bg1 from "../../../public/images/bg1.jpg"
import bg2 from  "../../../public/images/bg2.jpg"
import bg6 from  "../../../public/images/bg6.jpg"
import bg3 from  "../../../public/images/bg3.jpg"
import bg4 from  "../../../public/images/bg4.jpg"
import bg5 from  "../../../public/images/bg5.jpg"

export default function Fleets() {
  return (
  <div className='py-24 bg-gray-200'>
    <div className="container">
      <h4 className='uppercase font-semibold text-center mb-1 text-red-700 text-xl'>{`let's go with us`}</h4>
      <h2 className='oswald text-center font-semibold text-5xl mt-5'>choose taxi to ride!</h2>
      <div className='grid grid-cols-4 gap-5 mt-10'>
      <div className='bg-[#f4f5f8] shadow-md'>
        <div className='relative'>
            <Image src={bg1} alt="backgruand" width={300} height={200}/>
            <div className='absolute right-0 bottom-0'>
            </div>    
            <div className='p-5'>
              <h3 className='oswald mb-1 mt-1 text-x1'> Business Class</h3>
              <p> Mercedes EQE sedan</p> 
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg2} alt="group" />
                </div>
                <p>5 passengers, 2 comfortable</p>
              
              </div>
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg6} alt="briefcase" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className='mt-3'>One Day Rent 12 thousands</div>
              <div className='mt-9 bg-red-700 px-10 py-2 w-fit text-white mx-auto'>Book Now</div>
            </div>
        </div>
      </div>
      <div className='bg-[#f4f5f8] shadow-md'>
        <div className='relative'>
            <Image src={bg3} alt="backgruand" width={300} height={200}/>
            <div className='absolute right-0 bottom-0'>
            </div>    
            <div className='p-5'>
              <h3 className='oswald mb-1 mt-1 text-x1'> Business Class</h3>
              <p> Audi i6</p> 
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg2} alt="group" />
                </div>
                <p>5 passengers, 2 comfortable</p>
              
              </div>
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg6} alt="briefcase" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className='mt-3'>One Day Rent 12 thousands</div>
              <div className='mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto'>Book Now</div>
            </div>
        </div>
      </div>
      <div className='bg-[#f4f5f8] shadow-md'>
        <div className='relative'>
            <Image src={bg4} alt="backgruand" width={300} height={200}/>
            <div className='absolute right-0 bottom-0'>
            </div>    
            <div className='p-5'>
              <h3 className='oswald mb-1 mt-1 text-x1'> Business Class</h3>
              <p> Honda civic</p> 
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg2} alt="group" />
                </div>
                <p>5 passengers, 2 comfortable</p>
              
              </div>
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg6} alt="briefcase" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className='mt-3'>One Day Rent 10 thousands</div>
              <div className='mt-4 bg-red-700 px-10 py-2 w-fit text-white mx-auto'>Book Now</div>
            </div>
        </div>
      </div>
      <div className='bg-[#f4f5f8] shadow-md'>
        <div className='relative'>
            <Image src={bg5} alt="backgruand" width={300} height={200}/>
            <div className='absolute right-0 bottom-0'>
            </div>    
            <div className='p-5'>
              <h3 className='oswald mb-1 mt-1 text-x1'> Business Class</h3>
              <p> toyota carolla</p> 
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg2} alt="group" />
                </div>
                <p>5 passengers, 2 comfortable</p>
              
              </div>
              <div className='flex items-center gap-2 mt-2'>
              <div className='h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full'>
                <Image src={bg6} alt="briefcase" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className='mt-3'>One Day Rent 10 thousands</div>
              <div className='mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto'>Book Now</div>
            </div>
        </div>
      </div>
    </div> 
  </div>
</div>
  );
}
    
  


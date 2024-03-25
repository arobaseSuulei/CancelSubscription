import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './section.jsx'



export default function App() {
    const [showSection, setShowSection] = useState(false);

    const handleClick = () => {
        setShowSection(true); // Affiche le composant Section lorsque le bouton est cliqué
    };

    return (
        <div className='flex items-center justify-center min-h-screen flex-col gap-8'>

            <div className='text-left border p-6 rounded-xl flex flex-col gap-2   w-full xl:w-1/2 ' > 
                <p className='text-red-600 text-xs'>Cancel Plan</p>
                <p className='text-xl font-medium'>Sorry to see you go :( </p>
                <p className='text-xs text-gray-500 font-light '>Lorem ipsum dolor   totam? Culpa obcaecati necessitatibus, perspiciatis aspernatur sunt non voluptatum mollitia aliquam praesentium  ! </p>
                <hr />
                <p className='text-xs text-gray-700'>You wanted to do this when you signed up:</p>
                <p className='bg-gray-100 p-4 rounded-lg mt-4 mb-4 text-xs '> Lorem ipsum dolor totam? Culpa obcaecati necessitatibus, perspiciatis aspernatur sunt non voluptatum mollitia aliquam praesentium ! </p>
                <p className='text-xs text-gray-700'>Why is your reason for cancelling Feather?</p> 
                <select  className= ' bg-white mb-4 border-0 text-xs text-gray-600'  name=""  id="">
                                  
                    <option  value="">--select a reason--</option>
                </select>
                <input className='bg-white border pb-24 p-3 text-left  rounded-lg text-xs' type="text" placeholder='Share your feedback here...'  />

                <div className='flex justify-center gap-8'> 
                <button className='border p-2 pl-12 pr-12 rounded-lg text-xs '>Start subscribed</button>
                <button onClick={handleClick} className=' p-2 bg-red-500 pl-12 pr-12 rounded-lg text-xs text-white'>Yes, cancel it > </button>
                 
                 </div>
                 
                
              </div>
              {showSection && <Section/> }


            
            

            
        </div>
    );
}












 




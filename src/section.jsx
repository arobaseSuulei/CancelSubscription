import React from 'react';



export default function Section(props) {
    const { status, amount, creditCard, date } = props;
    return (
        <>


<div className='text-left border p-6 rounded-xl flex flex-col gap-2   w-full xl:w-1/2 ' > 
    <p className='text-red-600 text-xs'>Cancel Plan</p>
    <p className='text-xl font-medium'>You're about t cancel your subscription </p>
    <p className='text-xs text-gray-500 font-light '>Once your subscription expires on your next invoice date, you'll lose access </p>
    <hr />
    <p className='text-xs text-gray-700'>You wanted to do this when you signed up:</p>
   <p className=' p-4 rounded-lg  text-sm '> <button className='text-red-500  ' >x</button>  You'll lose all your data </p> 
   <p className=' p-4 rounded-lg  text-sm '> <button className='text-red-500  ' >x</button>  You'll lose all your settings customizations </p>  

    <p className='text-xs text-gray-700'>Don't worry! The data will be safe</p> 
    



  <div className='flex justify-center gap-8'> 
  <button className='border p-2 pl-12 pr-12 rounded-lg text-xs '>Start subscribed</button>
                <button  className=' p-2 bg-red-500 pl-12 pr-12 rounded-lg text-xs text-white'>Cancel my subscription  > </button>
                 
                 </div> 
                 
                 
                 
</div>







        </>
    );
}
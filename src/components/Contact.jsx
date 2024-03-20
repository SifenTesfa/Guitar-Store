import React from 'react'

const Contact = () => {
  return (
    <div className='text-white pt-32 p-10 pr-10 ' id='contact'>
    
    <div className='container mx-auto'>
        <div className='p-10'>
    <h4 className='text-[40px] text-orange-400  font-bold text-center uppercase items-center text-accent  mb-2 
      tracking-wide'>Contact</h4>
       </div>
    <div className='flex flex-col lg:flex-row'>
    <div className='flex-1'>
      <div >
      
      <h4 className='text-[85px] text-orange-400  lg:block hidden text-center uppercase text-accent font-medium mb-2 
      tracking-wide'>Get<br/> in <br/>touch</h4>
        
         </div>
    </div>
    <form className='flex-1  border rounded-2xl flex flex-col gap-y-6 pd-24 p-6  items-center'>
      <input className='bg-transparent border-b py-3 outline-none w-full
      placeholder:text-orange-400 focus:border-accent transition-all
      '
      type='text'
      placeholder='Your name'
      />
      <input className='bg-transparent border-b py-3 outline-none w-full
      placeholder:text-orange-400 focus:border-accent transition-all
      '
      type='email'
      placeholder='Your email'
      />
      <textarea className='bg-transparent border-b py-12 outline-none w-full
      placeholder:text-orange-400 focus:border-accent transition-all
      resize-none mb-12'
      placeholder='Your message'
      ></textarea>
      <button className='text-orange-400'>Send message</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact
import React from 'react'

const ClientProject = ({ item }) => {
  return (
    <div className='bg-gray-900 rounded-2xl hover:bg-[#121431] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] duration-200'>
      <div key={item.id} className='flex flex-col p-4 items-center text-center'>
        <div className="text">
        <div className='rounded-xl overflow-hidden'>
          <img className=' hover:scale-110 duration-300' src={item.image} alt="" />
        </div>
        <h3 className='text-2xl font-extrabold capitalize mb-3 underline' >{item.name}</h3>
        <p className='pt-4 pl-3 md:pt-1 md:pb-4 max-w-[480px] text-lg text-center lg:text-left text-slate-300'>{item.desc}</p>
        <p className='pt-4 pl-3 md:pt-1 md:pb-4 max-w-[480px] md:block font-medium tracking-widest text-lg text-center lg:text-left text-teal-400'>{item.technology}</p>
          <a title='Live' className=' text-2xl grow h-14 font-bold text-accent hover:text-[#ffc9a2] duration-200 cursor-pointer' href={item.demoHref}>
            {item.demo}
          </a>
        </div>
      </div>
      </div>
  )
}

export default ClientProject
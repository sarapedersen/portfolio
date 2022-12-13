  import React from 'react'
  import Navbar from './components/Navbar'
  import Arrow from './components/Arrow'

  const projects = () => {
    return (
      <>
        <div className='flex flex-col bg-projectsM sm:bg-home bg-no-repeat bg-cover h-screen '>
            <Navbar/>
            <div className='h-screen flex flex-col mx-10 sm:mr-[20%] sm:ml-[10%] space-y-5 text-brown justify-center '>
              <h1 className='text-4xl font-bold'>My work</h1>
              <p className=' text-lg'>Here you will find some of the work I have done or 
                contributed to during group projects at NTNU, in addition 
                to some of my volunteer work as a graphical designer.</p>
            </div>
          <Arrow className='w-[100px] fixed bottom-6 self-center' />
        </div>
        <div>

        </div>
      </>
    )
  }

  export default projects
import Link from 'next/link'
import React from 'react'
import Navbar from './components/Navbar'

const about = () => {
  return (
    <div className='bg-lightPink md:bg-about bg-no-repeat bg-cover min-h-screen'>
        <Navbar/>
        <div className='h-screen flex flex-col text-lg'>
            <div className='mt-[130px] md:mt-[250px] lg:mt-[18%]  mx-10 sm:mr-[20%] sm:ml-[10%] space-y-5 text-brown md:text-lightPink'>
                <h1 className='text-4xl font-bold'>Who am I?</h1>
                <p>When I was just 3 years old I sat down in front of my first computer, and the facination
                for computers has grown ever since. I love to challenge myself to do more and learn more 
                for every day.</p>
                <p>My name is Sara and I am a 23 year old student from Norway. 
                Currently I am studying at the third year of my informatics degree at NTNU Trondheim.
                In addition to my passion for IT, I have an interest for graphical design and have 
                been working volunterly for some years with different projects. 
                You can see some of my work under the <span className='font-bold'>{<Link href="/projects">projects</Link>}</span> site. </p>
            </div>
            <p className='invisible sm:visible self-center mt-8 bottom-5 fixed text-brown'>Sara Holm Pedersen</p>
        </div>
    </div>
  )
}

export default about
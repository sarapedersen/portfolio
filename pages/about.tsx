import Link from 'next/link'
import React from 'react'
import Navbar from './components/Navbar'

const about = () => {
  return (
    <div className='bg-about bg-no-repeat bg-cover min-h-screen'>
        <Navbar/>
        <h2>Who am I?</h2>
        <p>When I was just 3 years old I sat down in front of my first computer, and the facination
           for computers has grown ever since. I love to challenge myself to do more and learn more 
           for every day, with a goal to become the best. </p>
        <p>My name is Sara and I am a 23 year old student from Norway. 
           Currently I am studying at the third year of my informatics degree at NTNU Trondheim.
           In addition to my passion for IT, I have an interest for graphical design and have 
           been working volunterly for some years with different projects. 
           You can see some of my work under the <span>{<Link href="/projects">projects</Link>}</span> site. </p>
    </div>
  )
}

export default about
  import React from 'react'
  import Navbar from './components/Navbar'
  import Arrow from './components/Arrow'
  import { Project } from '../typings'
  import { sanityClient } from '../sanity.js'
  import imageUrlBuilder from '@sanity/image-url'
  import "animate.css/animate.min.css"
  import { AnimationOnScroll } from 'react-animation-on-scroll'

  interface Props {
    projects: [Project]
  }

  function urlFor (source: String) {
    return imageUrlBuilder(sanityClient).image(source)
  }

  const projects = ({projects}: Props) => {

    return (
      <>
        <div className='flex flex-col h-screen '>
            <Navbar/>
            <div className='h-screen flex flex-col mx-10 sm:mr-[20%] sm:ml-[10%] space-y-5 text-brown justify-center '>
              <h1 className='text-4xl font-bold'>My work</h1>
              <p className=' text-lg'>Scroll down to see some of my work.</p>
            </div>
          <AnimationOnScroll className='w-[80px] mb-4 self-center'  initiallyVisible animateOut='animate__fadeOutUp'>
            <Arrow className='animate-pulse' />
          </AnimationOnScroll>
        </div>
        
        <div className='flex flex-col items-center text-center'>
          <ul className=' space-y-4'>
            {projects && projects.map((p, i) => 
              <div key={i} className='space-y-1 font-bold'>
                <li>{p.name}</li><img></img>
                <img src={urlFor(p.image).width(350).url()}></img>
              </div>)}
          </ul>
        </div>
      </>
    )
  }
  
  export default projects

  export const getServerSideProps = async () => {
    const query = `* [_type == "projects"]{
      name,
      image
    }`

    const projects = await sanityClient.fetch(query)

    return {
      props: {
        projects,
      }
    }
  }

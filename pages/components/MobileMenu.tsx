import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type page = {
    name: string
    link: string
}

type props = {
    pages: page[],
    currentPage: string,
}

const MobileMenu = ({pages, currentPage}:props) => {
    const [expanded, setExpanded] = useState<Boolean>(false)

    return (
        <>
            {expanded ? (
                <div className='h-screen w-screen backdrop-blur-sm fixed'>
                    <div className=' py-10 pl-8 pr-[5rem] bg-brown shadow-xl rounded-xl mt-6 right-8 fixed'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 fixed right-10 top-8  "
                            viewBox="0 0 20 20"
                            fill="#FFDDD2"
                            onClick={() => setExpanded(!expanded)}
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <nav className='flex flex-col space-y-8 text-xl text-lightPink font-bold text-left'>
                            {pages.map((page, i) => 
                                <Link key={i} href={page.link}>
                                  <a className={currentPage === page.link ? "underline underline-offset-4" : ""}>{page.name}</a>
                                </Link>)}   
                        </nav>
                    </div>
                </div>
            ) : (
                <div className="space-y-2.5 fixed right-10 mt-10 " onClick={() => setExpanded(!expanded)}>
                    {[...Array(3)].map((i) => (
                        <span className="block rounded-full h-0.5 w-10 bg-brown"></span>
                    ))}
                </div>
            )}
        </>
    )
}

export default MobileMenu

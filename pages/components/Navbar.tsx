import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

type page = {
    name: string
    link: string
}

const Navbar = () => {
    const router = useRouter()
    const currentPage = router.pathname
    const [pages, setpages] = useState<page[]>([
        {name: "home", link: "/"}, 
        {name: "about", link: "/about"},
        {name: "projects", link: "/projects"}])

    return (
        <div className='fixed right-16 mt-8 '>
            <nav className='text-brown font-bold space-x-14 text-lg'>
                {pages.map((page, i) => 
                    <Link key={i} href={page.link}>
                        <a className={currentPage === page.link ? "underline underline-offset-4" : ""}>{page.name}</a>
                    </Link>)}
            </nav>
        </div>
    )
}

export default Navbar
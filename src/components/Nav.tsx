'use client'

import { link } from "fs"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/pages/services"
    },
    {
        name: "resume",
        path: "/pages/resume"
    },
    {
        name: 'work',
        path: '/pages/work'
    },
    {
        name: "contact",
        path: "/pages/contact"
    },
]

const Nav = () => {
    const pathName = usePathname()

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-customAccent border-b-2 border-customAccent"
                    } capitalize font-medium hover:text-customAccent trarnsition-all`}
                >
                    {link.name}
                </Link>
            })}
        </nav>
    )
}

export default Nav
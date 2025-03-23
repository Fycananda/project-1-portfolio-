"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'


const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/pages/services'
    },
    {
        name: 'resume',
        path: '/pages/resume'
    },
    {
        name: 'work',
        path: '/pages/work'
    },
    {
        name: 'contact',
        path: '/pages/contact'
    }
]

const MobileNav = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-customAccent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* Logo */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Luke<span className='text-customAccent'>.</span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathName &&
                                    "text-customAccent border-b-2 border-customAccent"}
                                    text-xl capitalize hover:text-customAccent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet >
    )
}

export default MobileNav
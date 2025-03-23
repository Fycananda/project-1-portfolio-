import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="div container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Luke<span className="text-customAccent">.</span>
                    </h1>
                </Link>
                {/* dekstop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/'>
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
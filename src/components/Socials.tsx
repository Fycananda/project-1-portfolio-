import Link from "next/link"

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "/" },
    { icon: <FaLinkedin />, path: "/" },
    { icon: <FaYoutube />, path: "/" },
    { icon: <FaTwitter />, path: "/" },
]

type SocialsProps = {
    containerStyle: string,
    iconStyle: string
}

const Socials = ({ containerStyle, iconStyle }: SocialsProps) => {
    return (
        <div className={containerStyle}>
            {socials.map((item, index) => {
                return (
                    <Link key={item.path} href={item.path} className={iconStyle}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
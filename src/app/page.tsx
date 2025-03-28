import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm<br /><span className="text-customAccent">Luke Coleman</span>
            </h1>
            <p className="pt-4 pb-8">I excel at crafting elegant digital experiences and <br />I am
              proficient in various programming languages and <br />technologies.
            </p>
            {/*  Btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-2xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-customAccent rounded-full flex justify-center items-center text-customAccent text-base hover:bg-customAccent hover:text-customPrimary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

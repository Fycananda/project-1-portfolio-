import { animate, motion } from "framer-motion"
import { exit } from "process"

//? variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// calculate the reverse index for staggred delay
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((randominae: boolean, index) => {
                return (
                    <motion.div key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-customAccent relative"
                    />
                )
            })}
        </>
    )
}

export default Stairs
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export const Highlight = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section >
      <div className=' container mx-auto py-20 text-white'>
        <motion.h2 ref={ref} style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
        }} className=' max-md:w-3/4 max-md:mx-auto font-extrabold max-md:text-center text-3xl md:text-7xl md:leading-[84px] uppercase md:w-1/2'>
          Lorem ipsum dolor
          sit amet,
          consectetur
          adipiscing elit.
        </motion.h2>
      </div>
    </section>
  )
}

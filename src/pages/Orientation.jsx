import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import orientation from "../assets/orientation.jpg"

const Orientation = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Class of 2024-25 Orientation</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Welcoming the brightest minds to our community</p>
      </motion.div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-2xl"
            >
              {/* Replace this with your actual orientation image */}
              <img
                src={orientation}
                alt="Orientation Day"
                className="w-full h-64 sm:h-80 md:h-[400px] object-contain sm:object-cover transform transition-transform duration-300 group-hover:scale-105 bg-black"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-3xl font-bold text-white">A New Beginning</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our orientation program marked the beginning of an exciting journey for our new members. 
              The event was filled with inspiring talks, interactive sessions, and memorable moments that 
              set the foundation for the upcoming academic year.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-emerald-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Engaging workshops and activities</span>
              </div>
              <div className="flex items-center text-emerald-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Networking opportunities</span>
              </div>
              <div className="flex items-center text-emerald-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Insightful presentations</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Orientation

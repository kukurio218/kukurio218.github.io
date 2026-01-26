import { motion } from 'framer-motion'

const titleText = 'Kukurio Apps'
const subtitleText = '日常を便利に、もっと楽しく'

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  }),
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient animate-gradient">
      {/* Mesh gradient overlay */}
      <div className="mesh-gradient" />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/10 blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-app-shifumiru/15 to-app-shifumiru/5 blur-3xl"
        style={{ top: '50%', right: '5%' }}
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-app-kachikan/15 to-app-kachikan/5 blur-3xl"
        style={{ bottom: '10%', left: '20%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Animated title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block text-gradient"
              variants={letterVariants}
              custom={i}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with slide-in effect */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        >
          {subtitleText}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className="text-gray-400 text-sm tracking-wider">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gray-400 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { AppData } from '../../types/app'
import AppCard from './AppCard'

interface AppGridProps {
  apps: AppData[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  },
}

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {apps.map((app, index) => (
        <motion.div key={app.id} variants={itemVariants}>
          <AppCard app={app} index={index} />
        </motion.div>
      ))}
    </motion.div>
  )
}

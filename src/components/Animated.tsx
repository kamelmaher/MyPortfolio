import { motion } from "motion/react"
import { ReactNode } from "react"
type AnimatedProps = {
    children: ReactNode
    className?: string
}
const Animated = ({ children, className }: AnimatedProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Animated

"use client";

import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      // viewport={{ once: false }} // Allow animation to replay every time the element comes into view
      transition={{ duration: 0.5, delay }} // Animation duration and delay
    >
      {children}
    </motion.div>
  );
}


// "use client"

// import { motion } from 'framer-motion';

// export default function AnimatedSection({ children, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//     >
//       {children}
//     </motion.div>
//   );
// }
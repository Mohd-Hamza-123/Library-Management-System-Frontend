'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function Card() {
    return (
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity : 1}}
        transition={{duration : 1}}
        >
            <h1>Hello world</h1>
        </motion.div>
    )
}

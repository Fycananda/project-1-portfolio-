'use client'
import React from 'react';
import { usePathname } from 'next/navigation'; // Pastikan ini diimpor dengan benar
import { AnimatePresence, motion } from 'framer-motion';

//? DIGUNAKAN HANYA JIKA MEMAKAI/ADA PROPS
// interface PageTransitionProps {
//     children: ReactNode;
// }

//? VERSI SEDERHANA JIKA TIDAK MEMAKAI PROPS
// const PageTransition: React.FC<{ children: ReactNode }> = ({ children }) => {return()}

//? INI MENGGUNAKAN VERSI PALING SEDERHANA JIKA DI TYPESCRIPT
const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen fixed bg-customPrimary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;

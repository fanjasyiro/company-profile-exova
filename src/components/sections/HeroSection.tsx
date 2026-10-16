'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function HeroSection() {
  return (
    <Section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1 px-3 mb-6 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold tracking-wider uppercase"
            >
              Mitra Teknologi Terpercaya
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6 leading-[1.1]"
            >
              Membangun Solusi Digital untuk Bisnis yang Lebih Baik
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl leading-relaxed"
            >
              Kami membantu perusahaan Anda bertransformasi dan berkembang di era digital melalui solusi perangkat lunak yang inovatif, aman, dan dapat diandalkan.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] font-medium transition-colors hover:bg-[var(--primary)]/90"
              >
                Layanan Kami
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium transition-colors hover:bg-[var(--muted)]"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Placeholder */}
          <motion.div 
            className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted)] to-[var(--border)] rounded-2xl flex items-center justify-center border border-[var(--border)]/50 shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <span className="text-[var(--muted-foreground)] font-medium text-lg relative z-10">
                Visual Placeholder
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

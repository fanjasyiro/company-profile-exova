'use client';

import { motion, Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatItem } from '@/components/ui/StatItem';

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

export function AboutSection() {
  return (
    <Section className="py-16 md:py-24 bg-[var(--background)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Placeholder (Left Column) */}
          <motion.div 
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-[var(--muted)] flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808012_25%,transparent_25%,transparent_75%,#80808012_75%,#80808012),linear-gradient(45deg,#80808012_25%,transparent_25%,transparent_75%,#80808012_75%,#80808012)] bg-[size:20px_20px] bg-[position:0_0,10px_10px]"></div>
              <span className="text-[var(--muted-foreground)] font-medium text-lg relative z-10">
                Visual Image Placeholder
              </span>
            </div>
          </motion.div>

          {/* Text Content (Right Column) */}
          <motion.div 
            className="order-1 lg:order-2 flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading 
                overline="Tentang Kami" 
                title="Pengalaman Nyata, Solusi yang Terbukti"
                description="Perusahaan kami telah menjadi pelopor dalam menghadirkan teknologi dan inovasi bagi berbagai industri. Kami mendedikasikan keahlian kami untuk memecahkan masalah kompleks dengan pendekatan yang sederhana, modern, dan efisien."
                className="mb-8"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-10 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Misi Kami</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Memberikan solusi digital yang memberdayakan bisnis untuk beradaptasi dan bertumbuh secara berkelanjutan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">Visi Kami</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Menjadi mitra strategis terdepan di tingkat global dalam transformasi teknologi bisnis modern.
                </p>
              </div>
            </motion.div>

            {/* Statistics Row */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-[var(--border)]"
            >
              <StatItem value="10+" label="Tahun Pengalaman" />
              <StatItem value="50+" label="Proyek Selesai" />
              <StatItem value="30+" label="Klien Aktif" />
              <StatItem value="20+" label="Profesional" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

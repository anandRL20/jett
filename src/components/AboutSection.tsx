import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4"
        >
          About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold mb-10"
        >
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
        >
          Hi, I'm <span className="text-foreground font-semibold">Godwin</span>, a skilled Blender artist specializing in FiveM development. I create and optimize FiveM vehicles, perform high-quality vehicle conversions, and handle map development and optimizations. I work on most aspects of FiveM, ensuring performance, detail, and reliability in every project.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;

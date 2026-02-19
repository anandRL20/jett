import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Custom Sports Car",
    category: "Vehicle Optimization",
  },
  {
    title: "Interior Pack Vol. 1",
    category: "FiveM Models",
  },
  {
    title: "Luxury SUV Fleet",
    category: "Blender & Optimization",
  },
  {
    title: "Street Props Collection",
    category: "FiveM Models",
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background pointer-events-none" />

      <motion.div style={{ y }} className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4"
          >
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Portfolio
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Sharp box image placeholder */}
              <div className="relative h-64 md:h-72 bg-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/20 font-display text-sm tracking-widest uppercase">
                    Image
                  </span>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="text-[10px] text-primary/70 font-display tracking-[0.2em] uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold mt-1 text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;

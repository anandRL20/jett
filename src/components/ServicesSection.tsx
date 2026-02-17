import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Car, Box, Palette } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Vehicle Optimization",
    description: "High-performance vehicle optimization for FiveM servers. LOD management, texture compression, and polygon reduction without sacrificing visual quality.",
  },
  {
    icon: Box,
    title: "FiveM Model Development",
    description: "Custom 3D models built from scratch or converted for FiveM. Props, interiors, vehicles — all game-ready and server-optimized.",
  },
  {
    icon: Palette,
    title: "Blender 3D Work",
    description: "Professional Blender modeling, UV mapping, texturing, and rendering. From concept to final asset with clean topology.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />

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
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Services
          </motion.h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-border/40 py-10 md:py-14"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex items-center gap-5 md:w-64 shrink-0">
                  <span className="text-xs text-muted-foreground/40 font-display">0{i + 1}</span>
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 md:max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

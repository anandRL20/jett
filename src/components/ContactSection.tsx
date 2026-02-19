import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4"
          >
            Let's Work Together
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Got a project
            <br />
            <span className="gradient-text">in mind?</span>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-md mx-auto text-sm leading-relaxed">
            Looking for a FiveM developer or need vehicle optimization? Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Discord
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </motion.a>
            <motion.a
              href="mailto:contact@spacex.dev"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/60 text-foreground font-display font-semibold text-sm tracking-wide hover:border-primary/40 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email Me
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/30 pt-10"
      >
        <p className="font-display font-bold gradient-text text-sm">SPACE X</p>
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Space X Content. All rights reserved.
        </p>
      </motion.div>

      {/* Jett Studio credit */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-6 pb-2"
      >
        <a
          href="https://jettstudio.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-display tracking-[0.25em] uppercase text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300"
        >
          Created by Jett Studio
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;

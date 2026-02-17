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
    </footer>
  );
};

export default Footer;

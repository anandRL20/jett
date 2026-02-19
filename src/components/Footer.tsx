import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const communities = [
  { name: "Blender Workshop", discord: "https://discord.gg/EKz8esFgPA" },
  { name: "Map Dev Community", discord: "https://discord.gg/EKz8esFgPA" },
];

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

      {/* Bottom strip: communities + Jett Studio credit */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl mx-auto mt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        {/* Communities inline */}
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-display tracking-[0.25em] uppercase text-muted-foreground/25">
            Communities
          </span>
          {communities.map((c) => (
            <a
              key={c.name}
              href={c.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-display text-muted-foreground/35 hover:text-muted-foreground/60 transition-colors duration-300"
            >
              <MessageCircle className="w-2.5 h-2.5" />
              {c.name}
            </a>
          ))}
        </div>

        {/* Jett Studio credit */}
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

import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Wrench, Map } from "lucide-react";

const communities = [
  {
    icon: Wrench,
    name: "Blender Workshop",
    tag: "3D Art & Modding",
    description:
      "A space for Blender artists working on FiveM assets — share work, get feedback, and collaborate on 3D projects.",
    discord: "https://discord.gg/EKz8esFgPA",
  },
  {
    icon: Map,
    name: "Map Dev Community",
    tag: "FiveM Map Development",
    description:
      "Everything map-related for FiveM — custom MLOs, map optimizations, and development guides for serious creators.",
    discord: "https://discord.gg/EKz8esFgPA",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="pb-20 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        {/* Divider */}
        <div className="border-t border-border/20 mb-10" />

        {/* Tiny header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground/40 font-display text-[10px] tracking-[0.35em] uppercase mb-6"
        >
          Communities
        </motion.p>

        {/* Compact community rows */}
        <div className="flex flex-col gap-0">
          {communities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 py-5 border-b border-border/20 last:border-b-0"
              >
                {/* Icon — small, no popout */}
                <div className="shrink-0 w-8 h-8 rounded-full border border-border/30 bg-card/30 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground/50" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <p className="font-display font-semibold text-sm text-foreground/70">{c.name}</p>
                    <span className="text-[9px] font-display text-muted-foreground/40 tracking-[0.2em] uppercase">
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/50 leading-relaxed">{c.description}</p>
                </div>

                {/* CTA */}
                <a
                  href={c.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border/30 hover:border-primary/30 text-[10px] font-display font-semibold text-muted-foreground/50 hover:text-foreground transition-all duration-300"
                >
                  <MessageCircle className="w-3 h-3" />
                  Join
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

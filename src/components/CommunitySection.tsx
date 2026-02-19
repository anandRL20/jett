import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Gamepad2, Wrench, Car, Map } from "lucide-react";
import hubLogo from "@/assets/5mhub-logo.jpg";
import jettLogo from "@/assets/jett-studio-logo.png";

const communities = [
  {
    logo: hubLogo,
    name: "5M HUB",
    tag: "Premium Server System",
    description:
      "A premium FiveM community for developers, modders, and players. Access resources, support, and collaboration in one place.",
    icon: Gamepad2,
    discord: "https://discord.gg/EKz8esFgPA",
  },
  {
    logo: jettLogo,
    name: "Jett Studio",
    tag: "Creative Studio",
    description:
      "We bridge top-tier editors and developers with clients who demand exceptional VFX, GFX, professional editing, and modern website development.",
    icon: Car,
    discord: "https://discord.gg/bFW28YBjMU",
  },
  {
    logo: null,
    name: "Blender Workshop",
    tag: "3D Art & Modding",
    description:
      "A space for Blender artists working on FiveM assets — share work, get feedback, and collaborate on 3D projects.",
    icon: Wrench,
    discord: "https://discord.gg/EKz8esFgPA",
  },
  {
    logo: null,
    name: "Map Dev Community",
    tag: "FiveM Map Development",
    description:
      "Everything map-related for FiveM — custom MLOs, map optimizations, and development guides for serious creators.",
    icon: Map,
    discord: "https://discord.gg/EKz8esFgPA",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-4"
        >
          Communities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight"
        >
          Our <span className="gradient-text">FiveM Hubs</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm leading-relaxed mb-16 max-w-lg"
        >
          Join any of our communities — each built around a specific part of FiveM development and modding.
        </motion.p>

        {/* Community list — stacked vertically */}
        <div className="flex flex-col gap-0">
          {communities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 py-10 border-b border-border/30 last:border-b-0"
              >
                {/* Hover line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Number */}
                <span className="font-display text-xs text-muted-foreground/40 tracking-[0.2em] w-6 shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Logo or icon */}
                <div className="relative shrink-0">
                  {c.logo ? (
                    <>
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.img
                        src={c.logo}
                        alt={c.name}
                        className="relative w-16 h-16 object-cover rounded-full border border-primary/30"
                        whileHover={{ scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </>
                  ) : (
                    <div className="w-16 h-16 rounded-full border border-border/40 bg-card/40 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary/70" />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <p className="font-display font-bold text-lg text-foreground">{c.name}</p>
                    <span className="text-[10px] font-display text-primary tracking-[0.2em] uppercase border border-primary/30 rounded-full px-2.5 py-0.5">
                      {c.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>

                {/* CTA */}
                <motion.a
                  href={c.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 hover:border-primary/50 text-xs font-display font-semibold text-muted-foreground hover:text-foreground transition-all duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Join
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

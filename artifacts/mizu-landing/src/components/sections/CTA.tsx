import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import InstallGuide from './InstallGuide';

const team = [
  {
    name: 'زراري محمد',
    role: 'مطور ومصمم',
    img: '/team/mohamed-zerari.jpg',
    url: 'https://www.instagram.com/mohamed.twt',
    floatDelay: 0,
  },
  {
    name: 'محمد بن علاهم',
    role: 'مسؤول الدعم',
    img: '/team/mohamed-benallaham.jpg',
    url: 'https://www.instagram.com/mohamm.1.d',
    floatDelay: 0.7,
  },
];

function TeamAvatar({ member }: { member: typeof team[number] }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: member.floatDelay,
      }}
      className="flex flex-col items-center gap-2"
    >
      <a
        href={member.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center"
      >
        {/* Tooltip — desktop hover only, bonus UX */}
        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
          <div className="bg-[#0d1117] border border-primary/30 rounded-lg px-3 py-2 whitespace-nowrap text-center shadow-lg shadow-black/50">
            <p className="text-white text-xs font-bold">{member.name}</p>
            <p className="text-primary/70 text-[11px]">{member.role}</p>
          </div>
          <div className="w-2 h-2 bg-[#0d1117] border-b border-r border-primary/30 rotate-45 mx-auto -mt-1"></div>
        </div>

        {/* Subtle halo behind card */}
        <div className="absolute inset-0 -m-4 rounded-full bg-primary/6 blur-lg pointer-events-none"></div>

        {/* Gradient glow ring + avatar */}
        <div className="relative w-[108px] h-[108px] rounded-full p-[2.5px] bg-gradient-to-br from-primary/90 to-primary/25 shadow-[0_0_22px_rgba(14,165,233,0.45)] group-hover:shadow-[0_0_34px_rgba(14,165,233,0.75)] group-hover:scale-105 transition-all duration-300">
          <img
            src={member.img}
            alt={member.name}
            width={108}
            height={108}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </a>

      {/* Always-visible name + role */}
      <div className="text-center mt-1">
        <p className="text-white/85 text-[11.5px] font-bold leading-tight">{member.name}</p>
        <p className="text-[#38bdf8] text-[10px] font-semibold mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">

      {/* Intense Glow Background */}
      <div className="absolute inset-0 bg-background z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[150px] z-0 rounded-full pointer-events-none"></div>

      {/* Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Mobile: avatars row above heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex md:hidden gap-10 mb-10"
        >
          {team.map((m) => <TeamAvatar key={m.name} member={m} />)}
        </motion.div>

        {/* Desktop: three-column layout — avatar | content | avatar */}
        <div className="w-full flex items-center justify-center gap-10 xl:gap-14">

          {/* Right avatar (RTL first = visually right) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:flex flex-shrink-0 items-center self-stretch"
          >
            <TeamAvatar member={team[0]} />
          </motion.div>

          {/* Center content */}
          <div className="flex flex-col items-center text-center min-w-0 flex-1 max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              جاهز لتجربة <span className="text-primary drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">Mizu</span>؟
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-white/50 text-base mb-10"
            >
              حمّل التطبيق مباشرةً على هاتفك الأندرويد وابدأ الآن
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center w-full"
            >
              <a
                href="/downloads/mizu.apk"
                download="Mizu.apk"
                className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-primary text-white text-xl font-bold glow-primary glow-primary-hover transition-all flex items-center justify-center gap-3 group"
              >
                <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                حمّل التطبيق الآن
              </a>
              <p className="mt-2 text-xs text-white/40 font-medium">
                الإصدار الحالي: تجريبي (Debug) — الحجم: 14 ميجابايت
              </p>
              <InstallGuide />
            </motion.div>
          </div>

          {/* Left avatar (RTL last = visually left) */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:flex flex-shrink-0 items-center self-stretch"
          >
            <TeamAvatar member={team[1]} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

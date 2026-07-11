import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import InstallGuide from './InstallGuide';

const team = [
  {
    name: 'زراري محمد',
    role: 'مطور ومصمم',
    img: '/team/mohamed-zerari.jpg',
    url: 'https://www.instagram.com/mohamed.twt',
  },
  {
    name: 'محمد بن علاهم',
    role: 'مساعد ومسؤول الدعم',
    img: '/team/mohamed-benallaham.jpg',
    url: 'https://www.instagram.com/mohamm.1.d',
  },
];

function TeamAvatar({ member }: { member: typeof team[number] }) {
  return (
    <a
      href={member.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center"
    >
      {/* Tooltip — desktop hover */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <div className="bg-[#0d1117] border border-primary/30 rounded-lg px-3 py-2 whitespace-nowrap text-center shadow-lg shadow-black/50">
          <p className="text-white text-xs font-bold">{member.name}</p>
          <p className="text-primary/70 text-[11px]">{member.role}</p>
        </div>
        <div className="w-2 h-2 bg-[#0d1117] border-b border-r border-primary/30 rotate-45 mx-auto -mt-1"></div>
      </div>

      {/* Outer glow ring */}
      <div className="w-[90px] h-[90px] rounded-full p-[2px] bg-gradient-to-br from-primary/80 to-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.7)] group-hover:scale-105 transition-all duration-300">
        <img
          src={member.img}
          alt={member.name}
          width={86}
          height={86}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Name label — mobile only */}
      <span className="md:hidden mt-2 text-[11px] text-white/50 font-medium text-center leading-tight max-w-[72px]">
        {member.name}
      </span>
    </a>
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
          className="flex md:hidden gap-8 mb-8"
        >
          {team.map((m) => <TeamAvatar key={m.name} member={m} />)}
        </motion.div>

        {/* Desktop: avatars flank the heading */}
        <div className="w-full flex items-center justify-center gap-10 xl:gap-16">

          {/* Right avatar (RTL first = visually right) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:block flex-shrink-0"
          >
            <TeamAvatar member={team[0]} />
          </motion.div>

          {/* Center content */}
          <div className="flex flex-col items-center text-center min-w-0">
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

            {/* Primary Download Button */}
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

              {/* Install Guide accordion */}
              <InstallGuide />
            </motion.div>
          </div>

          {/* Left avatar (RTL last = visually left) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="hidden md:block flex-shrink-0"
          >
            <TeamAvatar member={team[1]} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

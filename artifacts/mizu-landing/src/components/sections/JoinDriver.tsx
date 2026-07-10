import { motion } from 'framer-motion';
import { ArrowLeft, Truck } from 'lucide-react';

export default function JoinDriver() {
  return (
    <section id="join-driver" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card-gradient border border-card-border rounded-2xl p-8 md:p-10 text-center flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-5">
            <Truck className="w-7 h-7" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            انضم كسائق توصيل مياه في الجزائر والشعيبة
          </h2>
          <p className="text-hierarchy-2 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
            هل لديك سيارة أو دراجة نارية؟ انضم إلى شبكة سائقي ميزو Mizu ووصّل مياه الشرب للعملاء في الجزائر ومنطقة الشعيبة، واربح دخلاً إضافياً بجدول عمل مرن.
          </p>
          <a
            href="#register-driver"
            className="px-7 py-3.5 rounded-xl bg-primary text-white text-base font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
          >
            سجّل كسائق الآن
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { User, Truck } from 'lucide-react';

const steps = [
  { customer: 'يفتح التطبيق ويضغط "طلب جديد"', driver: 'يضبط حالته على "حاضر" (أخضر)' },
  { customer: 'يتم تحديد موقعه تلقائياً (GPS)', driver: 'يستقبل إشعاراً فورياً بطلب قريب' },
  { customer: 'يختار أحجام المياه (حتى 3 أحجام)', driver: 'يرى تفاصيل الطلب (الكمية، العنوان، السعر)' },
  { customer: 'يرى السعر الإجمالي ويضغط "إتمام الطلب"', driver: 'يقبل الطلب وتتغير حالته إلى "قيد التوصيل"' },
  { customer: 'يتابع حالة الطلب من "طلباتي"', driver: 'يتوجه للعنوان ويسلّم الطلب' },
  { customer: 'يستلم المياه ويقيّم السائق ⭐', driver: 'ينتقل الطلب إلى عداد "المكتملة"' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">رحلة الطلب</h2>
          <p className="text-hierarchy-2 text-lg">تزامن تام بين العميل والسائق لتجربة توصيل سلسة.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Headers */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 sticky top-20 z-20 bg-background/90 backdrop-blur-md py-4 border-b border-white/5">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-3">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">العميل</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/20 text-success mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">السائق</h3>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center pulsing line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -translate-x-1/2">
              <motion.div 
                className="w-full bg-primary shadow-[0_0_10px_#0ea5e9] origin-top"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </div>

            <div className="flex flex-col gap-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-2 gap-4 md:gap-8 relative"
                >
                  {/* Sync node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 glow-primary shadow-[0_0_15px_#0ea5e9]"></div>
                  
                  <div className="bg-card-gradient border border-card-border p-4 md:p-6 rounded-2xl md:rounded-r-full text-right flex items-center justify-start md:pr-12">
                    <p className="text-white text-sm md:text-base font-semibold">{step.customer}</p>
                  </div>
                  
                  <div className="bg-card-gradient border border-card-border p-4 md:p-6 rounded-2xl md:rounded-l-full text-right flex items-center justify-start">
                    <p className="text-hierarchy-2 text-sm md:text-base font-semibold">{step.driver}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

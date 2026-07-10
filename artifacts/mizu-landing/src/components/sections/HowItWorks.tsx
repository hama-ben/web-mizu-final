import { motion } from 'framer-motion';
import { Droplet, MapPin, Truck } from 'lucide-react';

const steps = [
  {
    icon: Droplet,
    title: 'اطلب مياهك',
    text: 'افتح تطبيق ميزو Mizu واطلب مياه الشرب التي تحتاجها في ثوانٍ، سواء كنت في الشعيبة أو أي منطقة أخرى في الجزائر.',
  },
  {
    icon: MapPin,
    title: 'سائق قريب يستلم الطلب',
    text: 'أقرب سائق توصيل مياه في منطقتك يستلم طلبك مباشرة، وتتابع حالة الطلب لحظة بلحظة.',
  },
  {
    icon: Truck,
    title: 'يوصلك المياه لباب بيتك',
    text: 'يصلك السائق إلى باب بيتك بسرعة وموثوقية، بدون تعقيد وبأسعار واضحة من البداية.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">كيف تعمل خدمة توصيل مياه الشرب مع ميزو؟</h2>
          <p className="text-hierarchy-2 text-lg">
            ثلاث خطوات بسيطة توصلك بأقرب سائق توصيل مياه في الجزائر والشعيبة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-card-gradient border border-card-border rounded-2xl p-8 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="text-primary font-black text-sm mb-2">{idx + 1}</span>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-hierarchy-2 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

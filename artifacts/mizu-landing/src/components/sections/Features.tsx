import { motion, type Variants } from 'framer-motion';
import { MapPin, Scale, BellRing, ShieldCheck, Map, Headphones } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "تتبع GPS مباشر",
    description: "تعرف على موقع سائقك في كل لحظة، من انطلاقه حتى وصوله لبابك.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Scale,
    title: "نظام عادل (3 طلبات/يوم)",
    description: "يمنع الاحتكار ويضمن وصول المياه للجميع بعدالة.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: BellRing,
    title: "إشعارات فورية للسائقين",
    description: "يستقبل السائق الطلب في ثوانٍ بناءً على قربه الجغرافي.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: ShieldCheck,
    title: "توثيق برقم الهاتف",
    description: "أمان مزدوج لكل طرف يضمن موثوقية الطلبات والتسليم.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Map,
    title: "تغطية بالولايات",
    description: "السائق يحدد ولاية الانطلاق والوصول بمرونة تامة.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "دعم مباشر داخل التطبيق",
    description: "زر التواصل العائم متاح في كل صفحة لحل المشاكل فوراً.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">لماذا <span className="text-primary">Mizu</span>؟</h2>
          <p className="text-hierarchy-2 text-lg">بنينا نظاماً متكاملاً يركز على السرعة، العدالة، والشفافية لحل مشكلة توصيل المياه من الجذور.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-card-gradient border border-card-border p-8 rounded-2xl group hover:border-glow-primary transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 relative z-10`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
                <p className="text-hierarchy-2 leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, CreditCard } from 'lucide-react';
import dashboardImg from '@assets/photo_5940660955966541304_w_1783451826955.jpg';
import subImg from '@assets/photo_5940660955966541305_w_1783451826956.jpg';

export default function DriverPreview() {
  return (
    <section id="driver" className="py-24 bg-[#080b15]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Phones */}
          <div className="flex-1 w-full max-w-md mx-auto relative perspective-[1000px]">
            {/* Main Phone */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, x: -20 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20 rounded-[2rem] border-[8px] border-[#1a1f30] overflow-hidden bg-black shadow-2xl"
              style={{ aspectRatio: '4/8.5' }}
            >
              <img src={dashboardImg} alt="Driver Dashboard" className="w-full h-full object-cover" />
            </motion.div>

            {/* Secondary Phone (Behind) */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, x: -20 }}
              whileInView={{ opacity: 1, rotateY: 5, x: 80, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-10 right-0 z-10 rounded-[2rem] border-[8px] border-[#1a1f30] overflow-hidden bg-black shadow-2xl opacity-60 hover:opacity-100 hover:z-30 transition-all duration-300"
              style={{ aspectRatio: '4/8.5', width: '80%' }}
            >
              <img src={subImg} alt="Driver Subscription" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] z-0 pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">لوحة تحكم <span className="text-success">السائق</span></h2>
            <p className="text-hierarchy-2 text-lg mb-10 leading-relaxed">
              كل ما تحتاجه لإدارة عملك، تتبع أرباحك، واستقبال الطلبات في واجهة واحدة مصممة للسرعة.
            </p>

            <div className="flex flex-col gap-6">
              
              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4 hover:border-success/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">حالة التواجد الذكية</h4>
                  <p className="text-hierarchy-3">تحكم في حالتك (حاضر 🟢 / استراحة 🟠 / مغلق 🔴) بضغطة زر. لا تستقبل طلبات إلا وأنت مستعد.</p>
                </div>
              </div>

              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4 hover:border-warning/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">إحصائيات فورية</h4>
                  <p className="text-hierarchy-3">تابع عدد الطلبات المكتملة وقيد التوصيل في نفس اللحظة عبر بطاقات واضحة أعلى الشاشة.</p>
                </div>
              </div>

              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">تجديد الاشتراك (CCP)</h4>
                  <p className="text-hierarchy-3">عداد تنازلي واضح لوقت الاشتراك المتبقي. جدد عبر رفع صورة وصل التحويل البريدي مباشرة من التطبيق.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

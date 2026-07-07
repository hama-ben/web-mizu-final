import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShoppingBag, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import homeImg from '@assets/photo_5940660955966541306_w_1783451826956.jpg';
import orderImg from '@assets/photo_5940660955966541307_w_1783451826957.jpg';
import historyImg from '@assets/photo_5940660955966541308_w_1783451826958.jpg';

const screens = [
  { img: homeImg, alt: 'الشاشة الرئيسية' },
  { img: orderImg, alt: 'طلب جديد' },
  { img: historyImg, alt: 'طلباتي' }
];

export default function CustomerPreview() {
  const [activeScreen, setActiveScreen] = useState(0);

  const next = () => setActiveScreen((p) => (p + 1) % screens.length);
  const prev = () => setActiveScreen((p) => (p - 1 + screens.length) % screens.length);

  return (
    <section id="customer" className="py-24 bg-background relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">تجربة <span className="text-primary">العميل</span></h2>
            <p className="text-hierarchy-2 text-lg mb-10 leading-relaxed">
              تطبيق مصمم ليكون بديهياً وسريعاً. اطلب المياه بضغطة زر وتتبع وصولها حتى بابك.
            </p>

            <div className="flex flex-col gap-6">
              
              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">طلب جديد بذكاء</h4>
                  <p className="text-hierarchy-3">يحدد التطبيق موقعك تلقائياً (GPS). اختر أحجام القارورات من 5 إلى 1000 لتر، وشاهد السعر الإجمالي فوراً.</p>
                </div>
              </div>

              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-1">
                  <ShoppingBag className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">إدارة الطلبات</h4>
                  <p className="text-hierarchy-3">واجهة واضحة تعرض حالة الطلب الحالي (قيد الانتظار، قيد التوصيل) وتاريخ طلباتك السابقة.</p>
                </div>
              </div>

              <div className="bg-card-gradient border border-card-border p-5 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0 mt-1">
                  <Star className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">تقييم الخدمة</h4>
                  <p className="text-hierarchy-3">بعد الاستلام، قيم السائق لضمان جودة الخدمة المستمرة في مجتمع Mizu.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Phone Carousel */}
          <div className="flex-1 w-full max-w-md mx-auto relative flex flex-col items-center">
            
            <div className="relative z-20 rounded-[2rem] border-[8px] border-[#1a1f30] overflow-hidden bg-black shadow-2xl w-full max-w-[320px]" style={{ aspectRatio: '4/8.5' }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeScreen}
                  src={screens[activeScreen].img}
                  alt={screens[activeScreen].alt}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={next} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {screens.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveScreen(idx)}
                    className={`h-2 rounded-full transition-all ${activeScreen === idx ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>

              <button onClick={prev} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] z-0 pointer-events-none rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

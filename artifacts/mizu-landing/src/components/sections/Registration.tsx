import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lock } from 'lucide-react';

export default function Registration() {
  const [activeTab, setActiveTab] = useState<'customer' | 'driver'>('customer');

  // Sync tab with hash navigation (#register-customer / #register-driver)
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#register-driver') setActiveTab('driver');
      else if (window.location.hash === '#register-customer') setActiveTab('customer');
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <section id="register" className="py-24 bg-background relative overflow-hidden">
      {/* Anchor targets for direct CTA links */}
      <span id="register-customer" className="absolute -top-20" />
      <span id="register-driver" className="absolute -top-20" />
      {/* Glow behind the form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">كيف تسجّل؟</h2>
          <p className="text-hierarchy-2 text-lg">انضم إلى شبكة Mizu في خطوات بسيطة وآمنة.</p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Tabs */}
          <div className="flex p-1 bg-white/5 backdrop-blur-sm rounded-xl mb-8 border border-white/10">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex-1 py-3 text-center rounded-lg font-bold transition-all ${
                activeTab === 'customer' 
                  ? 'bg-card-gradient border border-primary/50 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]' 
                  : 'text-hierarchy-3 hover:text-white'
              }`}
            >
              كعميل 👤
            </button>
            <button
              onClick={() => setActiveTab('driver')}
              className={`flex-1 py-3 text-center rounded-lg font-bold transition-all ${
                activeTab === 'driver' 
                  ? 'bg-card-gradient border border-primary/50 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]' 
                  : 'text-hierarchy-3 hover:text-white'
              }`}
            >
              كسائق 🚚
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-card-gradient border border-card-border rounded-2xl p-6 md:p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-5"
              >
                
                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold text-sm">الاسم الكامل</label>
                  <input type="text" placeholder="محمد الأمين" className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20" disabled />
                  <p className="text-hierarchy-3 text-xs">يستخدم لتعريف الطلب عند التسليم</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold text-sm">البريد الإلكتروني</label>
                  <input type="email" placeholder="mohamed@example.com" className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20" disabled />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold text-sm">رقم الهاتف</label>
                  <input type="tel" placeholder="0555 00 00 00" className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 text-left" dir="ltr" disabled />
                  <p className="text-hierarchy-3 text-xs">يستخدم لتأكيد الطلبات والتواصل</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold text-sm">كلمة المرور</label>
                  <div className="relative">
                    <input type="password" placeholder="••••••••" className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 text-left" dir="ltr" disabled />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white font-semibold text-sm">الولاية</label>
                  <div className="relative">
                    <select className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none" disabled>
                      <option>اختر الولاية...</option>
                    </select>
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                  </div>
                </div>

                {activeTab === 'driver' && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-white font-semibold text-sm">ولاية الوصول (نطاق التوصيل)</label>
                      <div className="relative">
                        <select className="w-full bg-[#0a0e1a] border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:outline-none focus:border-primary/50 transition-all appearance-none" disabled>
                          <option>اختر الولاية...</option>
                        </select>
                        <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="w-full py-4 rounded-xl bg-primary/20 text-primary border border-primary/30 font-bold flex items-center justify-center cursor-not-allowed opacity-80">
                    إرسال رمز التحقق
                  </button>
                  {activeTab === 'driver' && (
                    <p className="text-hierarchy-3 text-xs text-center mt-4">
                      بعد التحقق، يراجع فريق Mizu طلبك خلال 24 ساعة قبل التفعيل
                    </p>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

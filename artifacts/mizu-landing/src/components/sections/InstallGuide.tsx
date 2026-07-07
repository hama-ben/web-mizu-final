import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldAlert, CheckCircle2, Smartphone, Settings } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    text: 'افتح ملف الـ APK بعد اكتمال التحميل',
  },
  {
    icon: ShieldAlert,
    text: 'ستظهر رسالة من Google Play Protect — اضغط "تثبيت على أي حال" أو "مزيد من التفاصيل" ثم "تثبيت"',
  },
  {
    icon: Settings,
    text: 'إذا طلب النظام تفعيل "السماح من هذا المصدر" (Install unknown apps) وافق ثم تابع التثبيت',
  },
  {
    icon: CheckCircle2,
    text: 'افتح التطبيق وأنشئ حسابك',
  },
];

export default function InstallGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 w-full max-w-sm mx-auto">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all text-sm text-white/70 hover:text-white"
        aria-expanded={open}
      >
        <span className="font-semibold flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-warning shrink-0" />
          خطوات التثبيت وتحذير Play Protect
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="guide"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-xl border border-white/10 bg-card-gradient p-5 flex flex-col gap-4">
              {/* Reassurance notice */}
              <div className="flex items-start gap-3 rounded-lg bg-warning/10 border border-warning/20 p-3">
                <ShieldAlert className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                <p className="text-xs text-white/80 leading-relaxed">
                  هذا تحذير عادي يظهر لأي تطبيق يُوزَّع خارج متجر Google Play الرسمي، ولا يعني وجود أي خطر على جهازك.
                </p>
              </div>

              {/* Steps */}
              <ol className="flex flex-col gap-3">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-white/75 leading-relaxed">{step.text}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Section {
  heading: string;
  body: string;
}

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalModal({
  open,
  onClose,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalModalProps) {
  // Lock body scroll & handle Escape key
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(5,7,10,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={onClose}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85dvh] flex flex-col rounded-2xl border border-primary/30 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f1420 0%, #131a2b 100%)',
              boxShadow: '0 0 0 1px rgba(14,165,233,0.08), 0 24px 64px rgba(0,0,0,0.7), 0 0 60px rgba(14,165,233,0.06)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/8 flex-shrink-0">
              <div>
                <h2 className="text-2xl font-black text-white">{title}</h2>
                <p className="text-xs text-white/40 mt-0.5 font-medium">{lastUpdated}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="إغلاق"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div
              className="overflow-y-auto px-6 py-6 flex-1 text-right"
              style={{ direction: 'rtl' }}
            >
              {/* Intro paragraph */}
              <p className="text-white/70 text-sm leading-[1.8] mb-8 border-r-2 border-primary/40 pr-4">
                {intro}
              </p>

              {/* Sections */}
              <div className="flex flex-col gap-7">
                {sections.map((sec, i) => (
                  <div key={i}>
                    <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary text-xs font-black flex-shrink-0">
                        {i + 1}
                      </span>
                      {sec.heading}
                    </h3>
                    <div
                      className="text-white/60 text-sm leading-[1.85] pr-8"
                      dangerouslySetInnerHTML={{ __html: sec.body }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

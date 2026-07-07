import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: "كيف يعمل نظام 3 طلبات يومياً؟",
    a: "هذا النظام يمنع الاحتكار ويضمن عدالة التوزيع. كل عميل له 3 طلبات كحد أقصى يومياً لضمان وصول المياه لأكبر عدد ممكن من المستخدمين."
  },
  {
    q: "كم من الوقت يستغرق وصول السائق؟",
    a: "يتلقى السائقون القريبون الإشعار فوراً. وقت الوصول يعتمد على الموقع الجغرافي وحركة المرور وتوفر السائقين في منطقتك."
  },
  {
    q: "كيف أجدد اشتراكي كسائق؟",
    a: "قم بتحويل مبلغ الاشتراك عبر CCP، ثم ارفع صورة الوصل داخل التطبيق من قسم الاشتراك. سيقوم فريقنا بمراجعته والموافقة عليه خلال 24 ساعة."
  },
  {
    q: "هل يمكنني تغيير ولايتي بعد التسجيل؟",
    a: "نعم، يمكنك التواصل مع فريق الدعم عبر زر 'اتصل بنا' داخل التطبيق لتعديل بياناتك وتغيير نطاق عملك."
  },
  {
    q: "كيف أتواصل مع الدعم إذا واجهت مشكلة؟",
    a: "اضغط على زر السماعة العائم المتاح في كل صفحة داخل التطبيق للتواصل المباشر والفوري مع فريق الدعم لحل أي مشكلة."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#080b15]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
          <p className="text-hierarchy-2 text-lg">كل ما تحتاج معرفته عن استخدام تطبيق Mizu.</p>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Accordion.Item value={`item-${idx}`} className="bg-card-gradient border border-card-border rounded-xl overflow-hidden data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_15px_rgba(14,165,233,0.15)] transition-all">
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-right group">
                    <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-white/50 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-transform duration-300 shrink-0 mr-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-hierarchy-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="p-6 pt-0 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Droplet } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import LegalModal from '../LegalModal';

// ─── Terms of Use content ────────────────────────────────────────────────────
const termsData = {
  title: 'شروط الاستخدام',
  lastUpdated: 'آخر تحديث: يُرجى مراجعة هذه الشروط دورياً',
  intro:
    'مرحباً بك في تطبيق "ميزو" (Mizu). باستخدامك للتطبيق أو الموقع، فإنك توافق على الشروط التالية:',
  sections: [
    {
      heading: 'طبيعة الخدمة',
      body: 'ميزو هي منصة وسيطة تربط بين المستخدمين الراغبين في طلب مياه الشرب ("المستهلكين") والسائقين المستقلين المسجلين على المنصة ("السائقين"). ميزو لا تُنتج أو تُصنّع الماء بنفسها، ودورها يقتصر على تسهيل عملية الطلب والتوصيل بين الطرفين.',
    },
    {
      heading: 'التسجيل والحسابات',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>يجب أن يكون عمر المستخدم 18 سنة فأكثر لإنشاء حساب، أو أن يكون تحت إشراف ولي أمر بالنسبة للقاصرين.</li>
        <li>يلتزم المستخدم بتقديم معلومات صحيحة ودقيقة عند التسجيل (الاسم، رقم الهاتف، البريد الإلكتروني، الموقع الجغرافي).</li>
        <li>المستخدم مسؤول وحده عن الحفاظ على سرية كلمة المرور الخاصة بحسابه وعن أي نشاط يحدث من خلاله.</li>
        <li>تحتفظ ميزو بالحق في تعليق أو حذف أي حساب يقدّم معلومات مزيفة أو يُساء استخدامه.</li>
      </ul>`,
    },
    {
      heading: 'طلبات المستهلكين',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>يخضع كل مستهلك لحد أقصى من الطلبات اليومية (حالياً 3 طلبات/يوم) بهدف ضمان التوزيع العادل للخدمة بين جميع المستخدمين.</li>
        <li>السعر المعروض وقت تأكيد الطلب هو السعر النهائي الملزم، ولا يتحمل المستهلك أي رسوم إضافية غير معلنة.</li>
        <li>يلتزم المستهلك بتوفير عنوان توصيل دقيق (عبر الموقع الجغرافي التلقائي أو اليدوي) لضمان وصول الطلب بسلاسة.</li>
        <li>في حال تعذر الوصول للعنوان بسبب معلومات خاطئة من طرف المستهلك، لا تتحمل ميزو أو السائق مسؤولية التأخير الناتج.</li>
      </ul>`,
    },
    {
      heading: 'حسابات السائقين',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>يخضع تسجيل كل سائق لمراجعة يدوية من فريق ميزو قبل التفعيل (عادة خلال 24 ساعة)، ولميزو الحق في قبول أو رفض أي طلب انضمام دون إبداء أسباب.</li>
        <li>يلتزم السائق بتفعيل حالة "حاضر" فقط عند استعداده الفعلي لاستقبال وتنفيذ الطلبات بأمانة وفي الوقت المناسب.</li>
        <li>السائق مسؤول عن سلامة عملية النقل والتسليم، وعن التزامه بقوانين المرور المعمول بها أثناء تأدية الخدمة.</li>
        <li>اشتراك السائق الشهري إلزامي لاستخدام المنصة، ويتم تفعيله عبر تحويل بريدي (CCP) ومراجعة يدوية من الفريق كما هو موضح داخل التطبيق. ميزو غير مسؤولة عن أي تحويل يتم إلى حساب غير الحساب الرسمي المعلن داخل التطبيق.</li>
      </ul>`,
    },
    {
      heading: 'الدفع والأسعار',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>تُعرض الأسعار بالدينار الجزائري (دج) وتُحسب تلقائياً حسب الكمية المطلوبة.</li>
        <li>طرق الدفع المتاحة حالياً (نقداً عند الاستلام و/أو التحويل البريدي CCP للاشتراكات) قابلة للتغيير أو الإضافة مستقبلاً دون إشعار مسبق ملزم.</li>
      </ul>`,
    },
    {
      heading: 'التقييمات والسلوك',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>يحق لكل طرف (مستهلك/سائق) تقييم الطرف الآخر بعد كل عملية توصيل بشكل نزيه وموضوعي.</li>
        <li>يُمنع استخدام التطبيق لأي غرض مسيء، احتيالي، أو مخالف للقانون الجزائري. تحتفظ ميزو بحق حظر أي حساب يثبت تورطه في سلوك مسيء تجاه الطرف الآخر أو المنصة.</li>
      </ul>`,
    },
    {
      heading: 'حدود المسؤولية',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>ميزو منصة وسيطة، وبالتالي لا تتحمل مسؤولية مباشرة عن جودة المياه المورّدة (ما لم تكن ميزو نفسها هي المورّد المباشر)، أو عن أي ضرر ناتج عن سوء استخدام أحد الطرفين للخدمة.</li>
        <li>تُبذل أقصى جهود ممكنة لضمان دقة التتبع اللحظي والإشعارات، لكن قد تحدث أعطال تقنية عرضية (انقطاع إنترنت، تأخر GPS) لا تتحمل ميزو مسؤوليتها المباشرة.</li>
      </ul>`,
    },
    {
      heading: 'التعديلات على الشروط',
      body: 'تحتفظ ميزو بحق تعديل هذه الشروط في أي وقت، وسيتم إشعار المستخدمين بالتعديلات الجوهرية عبر التطبيق أو الموقع. استمرار استخدام التطبيق بعد التعديل يُعتبر موافقة ضمنية عليه.',
    },
    {
      heading: 'القانون المعمول به',
      body: 'تخضع هذه الشروط للقوانين المعمول بها في الجمهورية الجزائرية الديمقراطية الشعبية، وأي نزاع يُحال للجهات القضائية المختصة محلياً.',
    },
  ],
};

// ─── Privacy Policy content ───────────────────────────────────────────────────
const privacyData = {
  title: 'سياسة الخصوصية',
  lastUpdated: 'آخر تحديث: يُرجى مراجعة هذه السياسة دورياً',
  intro:
    'تحترم ميزو خصوصية مستخدميها، وتوضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك الشخصية.',
  sections: [
    {
      heading: 'البيانات التي نجمعها',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li><strong class="text-white/80">بيانات الحساب:</strong> الاسم الكامل، البريد الإلكتروني، رقم الهاتف، كلمة المرور (مشفّرة).</li>
        <li><strong class="text-white/80">بيانات الموقع الجغرافي (GPS):</strong> تُستخدم لتحديد عنوان التوصيل (المستهلك) أو منطقة التغطية والتنقل (السائق)، ولا تُجمع إلا بموافقتك الصريحة عبر إذن الموقع بالجهاز.</li>
        <li><strong class="text-white/80">بيانات الطلبات:</strong> تفاصيل كل طلب (الكمية، السعر، التاريخ، حالة التسليم) لأغراض تشغيلية وتاريخية.</li>
        <li><strong class="text-white/80">بيانات الدفع (للسائقين):</strong> صور وصولات التحويل البريدي (CCP) المرفوعة لغرض التحقق من الاشتراك فقط.</li>
        <li><strong class="text-white/80">بيانات تقنية:</strong> نوع الجهاز، نظام التشغيل، عنوان IP، لأغراض تحسين الأداء واكتشاف الأعطال.</li>
      </ul>`,
    },
    {
      heading: 'كيف نستخدم بياناتك',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>تنفيذ ومتابعة الطلبات بين المستهلكين والسائقين.</li>
        <li>التحقق من الهوية عبر رمز SMS عند التسجيل.</li>
        <li>تحسين تجربة الاستخدام وتطوير ميزات جديدة بالتطبيق.</li>
        <li>التواصل معك بخصوص حالة الطلب، الاشتراك، أو الدعم الفني.</li>
        <li>لن تُستخدم بياناتك لأي غرض تسويقي خارجي دون موافقتك الصريحة.</li>
      </ul>`,
    },
    {
      heading: 'مشاركة البيانات',
      body: `<ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>تتم مشاركة الحد الأدنى الضروري من المعلومات (الاسم، رقم الهاتف، عنوان التوصيل التقريبي) بين المستهلك والسائق فقط لغرض تنفيذ الطلب، ولا تُشارك بيانات أي طرف مع أي جهة خارجية أخرى لأغراض تجارية.</li>
        <li>قد تُفصح ميزو عن بيانات محددة إذا طُلب ذلك رسمياً من جهة قانونية أو قضائية مختصة في الجزائر.</li>
      </ul>`,
    },
    {
      heading: 'أمان البيانات',
      body: 'تُبذل جهود معقولة لحماية بياناتك (تشفير كلمات المرور، تحكم بالوصول للأنظمة الداخلية)، لكن لا يمكن ضمان أمان مطلق 100% لأي نظام متصل بالإنترنت، ونعمل باستمرار على تحسين إجراءات الحماية.',
    },
    {
      heading: 'الاحتفاظ بالبيانات',
      body: 'تُحفظ بيانات حسابك وطلباتك طالما حسابك نشط. يمكنك طلب حذف حسابك وبياناتك المرتبطة به بالتواصل مع فريق الدعم، وسيتم ذلك خلال مدة معقولة ما لم يوجد التزام قانوني يستوجب الاحتفاظ ببعض السجلات (مثل سجلات المعاملات المالية).',
    },
    {
      heading: 'حقوقك',
      body: `<p class="mb-2">لك الحق في:</p>
      <ul class="list-disc list-inside space-y-1.5 marker:text-primary/60">
        <li>الاطلاع على بياناتك الشخصية المخزنة لدينا.</li>
        <li>طلب تصحيح أي معلومة غير دقيقة.</li>
        <li>طلب حذف حسابك وبياناتك (مع مراعاة الاستثناءات القانونية أعلاه).</li>
        <li>سحب موافقتك على مشاركة الموقع الجغرافي في أي وقت من إعدادات جهازك (مع العلم أن هذا قد يُعطّل بعض ميزات التطبيق الأساسية كتحديد عنوان التوصيل).</li>
      </ul>`,
    },
    {
      heading: 'خصوصية الأطفال',
      body: 'لا يستهدف تطبيق ميزو الأطفال دون سن 18 عاماً، ولا نجمع عن قصد بيانات من قاصرين دون إشراف ولي أمر.',
    },
    {
      heading: 'التعديلات على هذه السياسة',
      body: 'قد تُحدَّث هذه السياسة دورياً لتعكس تغييرات تقنية أو قانونية، وسيُشار دائماً لتاريخ "آخر تحديث" أعلى الصفحة.',
    },
    {
      heading: 'تواصل معنا',
      body: 'لأي استفسار يخص خصوصيتك أو بياناتك، يمكنك التواصل معنا عبر قنوات الدعم المتاحة داخل التطبيق أو صفحاتنا الرسمية على فيسبوك وإنستغرام.',
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modal, setModal] = useState<'terms' | 'privacy' | null>(null);

  return (
    <>
      <footer id="footer" className="bg-[#05070a] pt-16 pb-8 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="#" className="flex items-center gap-2 group">
                <Droplet className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold text-white tracking-tight">Mizu</span>
              </a>
              <p className="text-hierarchy-3 font-medium">مياه نقية، توصيل منظم.</p>
            </div>

            {/* Links */}
            <div className="flex gap-12 text-center md:text-right">
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-hierarchy-3 hover:text-white transition-colors">الرئيسية</a>
                <a href="#timeline" className="text-hierarchy-3 hover:text-white transition-colors">كيف يعمل</a>
                <a href="#faq" className="text-hierarchy-3 hover:text-white transition-colors">الأسئلة الشائعة</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#customer" className="text-hierarchy-3 hover:text-white transition-colors">العملاء</a>
                <a href="#driver" className="text-hierarchy-3 hover:text-white transition-colors">السائقين</a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1BxkymfTDG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فيسبوك"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 transition-all"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/wmizu1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستغرام"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary/20 transition-all"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-hierarchy-3 text-sm">© {currentYear} Mizu. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => setModal('terms')}
                className="text-hierarchy-3 hover:text-white transition-colors"
              >
                شروط الاستخدام
              </button>
              <button
                onClick={() => setModal('privacy')}
                className="text-hierarchy-3 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        open={modal === 'terms'}
        onClose={() => setModal(null)}
        {...termsData}
      />
      <LegalModal
        open={modal === 'privacy'}
        onClose={() => setModal(null)}
        {...privacyData}
      />
    </>
  );
}

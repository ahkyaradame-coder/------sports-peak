
import React from 'react';

interface Props {
  onBack?: () => void;
}

const AboutSection: React.FC<Props> = ({ onBack }) => {
  const uiGuide = [
    { 
      title: "نظام الألوان", 
      desc: "نستخدم لغة بصرية قوية تعتمد على 3 ألوان رئيسية:",
      items: [
        { color: "#0B1221", label: "الكحلي العميق", role: "لون الخلفية والاحترافية، يمنح شعوراً بالثقة والتركيز على المحتوى." },
        { color: "#FF4D00", label: "البرتقالي الصارخ", role: "لون التفاعل (Call to Action)، يستخدم للأزرار الحيوية والأخبار العاجلة." },
        { color: "#39FF14", label: "الأخضر النيون", role: "يرمز للحياة والنتائج المباشرة (LIVE) وحالة الـ VIP." }
      ]
    },
    {
      title: "الأزرار وتفاعلاتها",
      desc: "كل زر في الموقع مصمم لغرض محدد:",
      items: [
        { btn: "VIP / باقة القمة", desc: "زر الوصول للمحتوى الحصري، بلون أخضر فسفوري للتميز." },
        { btn: "مشاهدة البث", desc: "زر كبير باللون البرتقالي في واجهة الموقع لبدء المتابعة اللحظية." },
        { btn: "المساعد الذكي (P)", desc: "الزر العائم في الأسفل، بوابتك للتحدث مع الذكاء الاصطناعي الرياضي." },
        { btn: "أيقونة الجرس", desc: "في قسم المباريات، تهدف لتذكيرك بموعد انطلاق صافرة البداية." }
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 animate-in fade-in duration-700">
      {onBack && (
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-[#FF4D00] font-bold hover:scale-105 transition-transform">
           ← العودة للرئيسية
        </button>
      )}

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-[#0B1221]">تفاصيل <span className="text-[#FF4D00]">المنصة</span></h1>
          <p className="text-gray-500 text-lg">دليل المستخدم لفهم فلسفة التصميم وتجربة الاستخدام في القمة الرياضية</p>
        </div>

        <div className="grid gap-12">
          {uiGuide.map((section, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
               <h2 className="text-3xl font-black mb-4 text-[#0B1221]">{section.title}</h2>
               <p className="text-gray-600 mb-8 font-medium">{section.desc}</p>
               
               <div className="grid gap-6">
                 {section.items.map((item: any, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                      {item.color ? (
                        <div className="w-16 h-16 rounded-2xl shadow-lg flex-shrink-0" style={{backgroundColor: item.color}}></div>
                      ) : (
                        <div className="bg-[#0B1221] text-white px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap">{item.btn}</div>
                      )}
                      <div>
                        <h4 className="font-black text-lg text-[#0B1221]">{item.label || item.btn}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.role || item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1221] text-white rounded-[3rem] p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <h3 className="text-2xl font-black mb-4">لماذا القمة الرياضية؟</h3>
           <p className="text-gray-400 max-w-2xl mx-auto font-medium">
             هدفنا هو دمج التكنولوجيا الحديثة مع الشغف الرياضي. كل زر صممناه هو خطوة لتقريبك من فريقك المفضل، وكل لون اخترناه هو لتعزيز حماسك أثناء المتابعة.
           </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

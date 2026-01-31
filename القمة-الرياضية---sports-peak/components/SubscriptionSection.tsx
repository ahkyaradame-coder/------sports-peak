
import React from 'react';

interface Props {
  onSubscribe: (plan: string) => void;
  onBack: () => void;
}

const SubscriptionSection: React.FC<Props> = ({ onSubscribe, onBack }) => {
  const plans = [
    { name: 'مجاني', price: '0', features: ['أخبار حصرية', 'نتائج مباشرة', 'ملخصات قصيرة'], color: 'gray' },
    { name: 'محترف', price: '29', features: ['كل مميزات المجاني', 'بث مباشر HD', 'بدون إعلانات', 'تنبيهات مخصصة'], color: '#39FF14', popular: true },
    { name: 'VIP القمة', price: '99', features: ['بث 4K فائق الجودة', 'مقابلات حصرية', 'كاميرات إضافية', 'تحليل فني متقدم'], color: '#FF4D00' },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* زر الرجوع */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-[#0B1221] font-bold hover:text-[#FF4D00] transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          العودة للرئيسية
        </button>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-black mb-4 text-[#0B1221]">اختر باقتك الرياضية</h2>
        <p className="text-gray-500 text-lg">لا تفوت أي لحظة حاسمة، اشترك الآن واحصل على تجربة رياضية لا مثيل لها.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative bg-white rounded-[2.5rem] p-8 shadow-xl border-2 flex flex-col ${plan.popular ? 'border-[#39FF14] scale-105' : 'border-transparent'}`}>
            {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#39FF14] text-[#0B1221] px-6 py-1 rounded-full font-black text-sm">الأكثر طلباً</span>}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1"><span className="text-4xl font-black text-[#0B1221]">${plan.price}</span><span className="text-gray-400">/شهرياً</span></div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-medium text-gray-700">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white bg-[#39FF14]"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onSubscribe(plan.name)}
              className="w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg"
              style={{ backgroundColor: plan.color, color: plan.color === 'gray' ? 'white' : '#0B1221' }}
            >
              ابدأ الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionSection;


import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (method: string, name: string) => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const isNameEmpty = name.trim().length === 0;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#0B1221]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 sm:p-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF4D00] rounded-lg flex items-center justify-center font-black text-white transform -rotate-12">P</div>
              <span className="text-xl font-black text-[#0B1221]">إنشاء حساب</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-[#FF4D00] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-[#0B1221] mb-2">انضم للقمة الرياضية</h3>
            <p className="text-gray-500">من فضلك أدخل اسمك لتبدأ رحلتك معنا</p>
          </div>

          <div className="space-y-6">
            {/* Name Input Field */}
            <div className="space-y-2">
              <label className="block text-sm font-black text-[#0B1221] mr-1">الاسم الكامل</label>
              <div className="relative">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: محمد أحمد"
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pr-12 pl-4 font-bold text-[#0B1221] outline-none focus:border-[#FF4D00] transition-all"
                />
              </div>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase font-black"><span className="bg-white px-4 text-gray-400">اختر طريقة الدخول</span></div>
            </div>

            {/* Google Login Button */}
            <button 
              disabled={isNameEmpty}
              onClick={() => onLoginSuccess('Gmail', name)}
              className={`w-full flex items-center justify-center gap-3 border-2 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-sm ${
                isNameEmpty 
                ? 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-white border-gray-100 text-[#0B1221] hover:bg-gray-50 hover:border-gray-200'
              }`}
            >
              <svg className="w-6 h-6" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              الدخول بواسطة Gmail
            </button>

            <button 
              disabled={isNameEmpty}
              onClick={() => onLoginSuccess('Apple', name)}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-xl ${
                isNameEmpty 
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed' 
                : 'bg-[#0B1221] text-white hover:bg-black'
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.671-1.48 3.675-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2.001-.156-3.35 1.09-4.001 1.09zM15.53 1.488c.884 1.066.637 2.844.637 2.844s-1.78.234-2.844-.883c-.884-1.066-.637-2.844-.637-2.844s1.78-.234 2.844.883z" />
              </svg>
              الدخول بواسطة Apple
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-400 font-bold leading-relaxed">
              بالاستمرار، أنت توافق على <a href="#" className="text-[#FF4D00] hover:underline">شروط الخدمة</a> و <a href="#" className="text-[#FF4D00] hover:underline">سياسة الخصوصية</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

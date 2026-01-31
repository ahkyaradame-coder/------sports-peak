
import React, { useState, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  currentImage?: string | null;
  onUpdate: (newName: string, newImage?: string) => void;
}

const ProfileModal: React.FC<Props> = ({ isOpen, onClose, currentName, currentImage, onUpdate }) => {
  const [name, setName] = useState(currentName);
  const [image, setImage] = useState<string | undefined>(currentImage || undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-[#0B1221]/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 sm:p-10">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-[#0B1221]">تعديل ملفك الرياضي</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-[#FF4D00] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col items-center gap-4 mb-8">
               <div className="relative group">
                 <div className="w-28 h-28 bg-gradient-to-tr from-[#FF4D00] to-orange-400 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-xl ring-4 ring-orange-50 overflow-hidden">
                   {image ? (
                     <img src={image} className="w-full h-full object-cover" alt="Profile Preview" />
                   ) : (
                     name.charAt(0)
                   )}
                 </div>
                 <button 
                  onClick={triggerFileInput}
                  className="absolute bottom-0 right-0 bg-[#0B1221] text-white p-2 rounded-full shadow-lg hover:bg-[#FF4D00] transition-colors border-2 border-white"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </button>
               </div>
               
               <input 
                 type="file" 
                 ref={fileInputRef} 
                 className="hidden" 
                 accept="image/*" 
                 onChange={handleImageChange} 
               />
               
               <button onClick={triggerFileInput} className="text-xs font-black text-[#FF4D00] hover:underline uppercase tracking-widest">تغيير الصورة الرمزية</button>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-black text-[#0B1221]">الاسم الظاهر</label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0B1221] outline-none focus:border-[#FF4D00] transition-all"
                placeholder="اسمك هنا..."
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-black text-[#0B1221]">الفريق المفضل</label>
              <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold text-[#0B1221] outline-none focus:border-[#FF4D00] transition-all">
                <option>ريال مدريد</option>
                <option>برشلونة</option>
                <option>الهلال</option>
                <option>النصر</option>
                <option>الأهلي</option>
                <option>الزمالك</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => onUpdate(name, image)}
                className="flex-grow bg-[#0B1221] text-white py-4 rounded-2xl font-black text-lg hover:bg-black transition-all active:scale-95 shadow-lg"
              >
                حفظ التغييرات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

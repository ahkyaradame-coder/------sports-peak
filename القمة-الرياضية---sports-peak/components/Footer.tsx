
import React from 'react';
import { ViewType } from '../types';

interface Props {
  onNav: (view: ViewType) => void;
  onSocial: (name: string) => void;
}

const Footer: React.FC<Props> = ({ onNav, onSocial }) => {
  return (
    <footer className="bg-[#0B1221] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNav('HOME')}>
              <div className="w-10 h-10 bg-[#FF4D00] rounded-lg flex items-center justify-center font-black text-2xl transform -rotate-12">P</div>
              <span className="text-2xl font-black tracking-tighter">القمة<span className="text-[#FF4D00]">الرياضية</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">منصتكم الأولى لمتابعة أهم الأحداث الرياضية العربية والعالمية بدقة واحترافية عالية.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FF4D00]">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNav('HOME')} className="hover:text-white transition-colors">الرئيسية</button></li>
              <li><button onClick={() => onNav('NEWS')} className="hover:text-white transition-colors">الأخبار</button></li>
              <li><button onClick={() => onNav('MATCHES')} className="hover:text-white transition-colors">المباريات</button></li>
              <li><button onClick={() => onNav('SUBSCRIPTION')} className="hover:text-white transition-colors">الاشتراكات</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FF4D00]">البطولات</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNav('STANDINGS')} className="hover:text-white transition-colors">ترتيب الدوريات</button></li>
              <li><button className="hover:text-white transition-colors">دوري أبطال أوروبا</button></li>
              <li><button className="hover:text-white transition-colors">دوري روشن السعودي</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FF4D00]">تابعنا على</h4>
            <div className="flex gap-4">
              <button onClick={() => onSocial('X')} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FF4D00] transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></button>
              <button onClick={() => onSocial('Instagram')} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-all"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></button>
              <button onClick={() => onSocial('YouTube')} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FF0000] transition-all"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} القمة الرياضية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

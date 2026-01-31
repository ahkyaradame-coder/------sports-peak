
import React from 'react';
import { Notification } from '../types';

interface Props {
  notifications: Notification[];
  onClose: () => void;
  onMarkRead: (id: number) => void;
}

const NotificationPanel: React.FC<Props> = ({ notifications, onClose, onMarkRead }) => {
  return (
    <div className="absolute top-16 left-0 md:left-4 w-[320px] bg-white text-[#0B1221] rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-[100] animate-in slide-in-from-top-4 duration-300">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-black text-sm">التنبيهات الرياضية</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-[#FF4D00]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <p className="font-bold text-sm">لا توجد تنبيهات جديدة</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div 
              key={notif.id} 
              onClick={() => onMarkRead(notif.id)}
              className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer relative ${!notif.isRead ? 'bg-orange-50/30' : ''}`}
            >
              {!notif.isRead && <div className="absolute top-4 right-2 w-2 h-2 bg-[#FF4D00] rounded-full"></div>}
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  notif.type === 'MATCH' ? 'bg-[#39FF14]/10 text-[#39FF14]' : 'bg-[#FF4D00]/10 text-[#FF4D00]'
                }`}>
                  {notif.type === 'MATCH' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black leading-tight mb-1">{notif.title}</span>
                  <span className="text-[10px] text-gray-400 font-bold">{notif.time}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-3 bg-white text-center">
        <button className="text-[10px] font-black text-[#FF4D00] hover:underline uppercase tracking-widest">مشاهدة جميع الإشعارات</button>
      </div>
    </div>
  );
};

export default NotificationPanel;

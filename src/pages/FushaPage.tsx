import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldCheck, User, List, Hash, Cloud, Tag, Smile, MessageSquare } from 'lucide-react';

function Dumbbell({ size = 28, color = '#6B52B5' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      {/* left weight plates */}
      <rect x="2" y="14" width="8" height="20" rx="3" fill={color} />
      <rect x="8" y="18" width="5" height="12" rx="2" fill={color} />
      {/* right weight plates */}
      <rect x="38" y="14" width="8" height="20" rx="3" fill={color} />
      <rect x="35" y="18" width="5" height="12" rx="2" fill={color} />
      {/* bar connecting both sides */}
      <rect x="13" y="21" width="22" height="6" rx="3" fill={color} />
    </svg>
  );
}

const ITEMS = [
  {
    id: 1,
    label: 'القراءة',
    path: '/abjadiya',
    icon: BookOpen,
    iconBg: '#F5E6C8',
    iconColor: '#C49A3C',
    rowBg: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
    chevronColor: '#C49A3C',
  },
  {
    id: 2,
    label: 'الضمائر',
    path: '/damair',
    icon: ShieldCheck,
    iconBg: '#D8EDE0',
    iconColor: '#4A8B62',
    rowBg: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
    chevronColor: '#4A8B62',
  },
  {
    id: 3,
    label: 'الأسماء',
    path: '/asmaa',
    icon: User,
    iconBg: '#D6E8F5',
    iconColor: '#3D6F9E',
    rowBg: 'linear-gradient(135deg, #F4F9FE 0%, #E0EEF9 100%)',
    chevronColor: '#3D6F9E',
  },
  {
    id: 4,
    label: 'الأفعال',
    path: '/afaal',
    icon: null,
    iconBg: '#E6DEFF',
    iconColor: '#6B52B5',
    rowBg: 'linear-gradient(135deg, #F8F6FF 0%, #EDE8FF 100%)',
    chevronColor: '#6B52B5',
  },
  {
    id: 5,
    label: 'الصفات',
    path: null,
    icon: List,
    iconBg: '#FDDBD8',
    iconColor: '#B54540',
    rowBg: 'linear-gradient(135deg, #FFF8F7 0%, #FDEAE9 100%)',
    chevronColor: '#B54540',
  },
  {
    id: 6,
    label: 'الأرقام',
    path: null,
    icon: Hash,
    iconBg: '#F5E6C8',
    iconColor: '#C49A3C',
    rowBg: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
    chevronColor: '#C49A3C',
  },
  {
    id: 7,
    label: 'الظروف',
    path: null,
    icon: Cloud,
    iconBg: '#D8EDE0',
    iconColor: '#4A8B62',
    rowBg: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
    chevronColor: '#4A8B62',
  },
  {
    id: 8,
    label: 'حروف الجر',
    path: null,
    icon: Tag,
    iconBg: '#D6E8F5',
    iconColor: '#3D6F9E',
    rowBg: 'linear-gradient(135deg, #F4F9FE 0%, #E0EEF9 100%)',
    chevronColor: '#3D6F9E',
  },
  {
    id: 9,
    label: 'التعابير الانفعالية',
    path: null,
    icon: Smile,
    iconBg: '#E6DEFF',
    iconColor: '#6B52B5',
    rowBg: 'linear-gradient(135deg, #F8F6FF 0%, #EDE8FF 100%)',
    chevronColor: '#6B52B5',
  },
  {
    id: 10,
    label: 'عبارات يومية',
    path: null,
    icon: MessageSquare,
    iconBg: '#FDDBD8',
    iconColor: '#B54540',
    rowBg: 'linear-gradient(135deg, #FFF8F7 0%, #FDEAE9 100%)',
    chevronColor: '#B54540',
  },
];

function LeafDecoration() {
  return (
    <svg
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-32 h-40 opacity-40 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path d="M60 160 Q80 120 70 80 Q90 60 100 30 Q80 50 70 70 Q60 40 50 10 Q40 40 50 70 Q40 50 20 30 Q30 60 50 80 Q40 120 60 160Z" fill="#8FAF72" />
      <path d="M60 160 Q65 130 62 100" stroke="#6B8A54" strokeWidth="1.5" fill="none" />
      <path d="M68 110 Q78 95 85 78" stroke="#6B8A54" strokeWidth="1" fill="none" />
      <path d="M55 110 Q45 95 38 78" stroke="#6B8A54" strokeWidth="1" fill="none" />
    </svg>
  );
}

function FushaPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EDD8', direction: 'rtl' }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
        style={{ backgroundColor: 'rgba(139,106,62,0.15)', color: '#5C4A32' }}
        title="back"
      >
        <ArrowRight size={22} />
      </button>

      {/* Title block */}
      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{
            fontFamily: "'Amiri', serif",
            fontWeight: 700,
            color: '#3B2A14',
          }}
        >
          بالفصحى
        </h1>
        {/* Ornamental divider */}
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px w-14 md:w-20" style={{ backgroundColor: '#C49A3C' }} />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#C49A3C" />
          </svg>
          <div className="h-px w-14 md:w-20" style={{ backgroundColor: '#C49A3C' }} />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {ITEMS.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => item.path && navigate(item.path)}
              className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md active:scale-[0.99]"
              style={{
                background: item.rowBg,
                boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                border: '1.5px solid rgba(255,255,255,0.8)',
                cursor: item.path ? 'pointer' : 'default',
                opacity: item.path ? 1 : 0.72,
              }}
            >
              {/* Icon badge (right side — RTL first child) */}
              <div
                className="m-2 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon
                  ? <item.icon size={28} color={item.iconColor} strokeWidth={1.6} />
                  : <Dumbbell size={28} color={item.iconColor} />}
              </div>

              {/* Label */}
              <span
                className="flex-1 text-right text-xl md:text-2xl"
                style={{
                  fontFamily: "'Amiri', serif",
                  fontWeight: 700,
                  color: item.chevronColor,
                }}
              >
                {item.label}
              </span>

              {/* Chevron (left side — RTL last child) */}
              <div className="pr-4 pl-5 py-5">
                <svg width="10" height="17" viewBox="0 0 10 17" fill="none">
                  <path d="M8.5 1.5L1.5 8.5L8.5 15.5" stroke={item.chevronColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      <LeafDecoration />

      {/* Bottom color blob */}
      <div
        className="absolute bottom-0 left-0 w-40 h-24 rounded-tr-full pointer-events-none"
        style={{ backgroundColor: 'rgba(143,175,114,0.25)' }}
      />
      <div
        className="absolute bottom-0 right-8 w-28 h-16 rounded-tl-full pointer-events-none"
        style={{ backgroundColor: 'rgba(210,185,140,0.3)' }}
      />
    </div>
  );
}

export default FushaPage;

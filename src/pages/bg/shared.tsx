import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AudioCell } from '../../components/AudioCell';
import type { ReactNode } from 'react';

export function OrnamentalDivider({ width = 'w-14 md:w-20' }: { width?: string }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className={`h-px ${width}`} style={{ backgroundColor: '#C49A3C' }} />
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#C49A3C" />
      </svg>
      <div className={`h-px ${width}`} style={{ backgroundColor: '#C49A3C' }} />
    </div>
  );
}

export function LeafDecoration() {
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

export function BottomBlobs() {
  return (
    <>
      <div
        className="absolute bottom-0 left-0 w-40 h-24 rounded-tr-full pointer-events-none"
        style={{ backgroundColor: 'rgba(143,175,114,0.25)' }}
      />
      <div
        className="absolute bottom-0 right-8 w-28 h-16 rounded-tl-full pointer-events-none"
        style={{ backgroundColor: 'rgba(210,185,140,0.3)' }}
      />
    </>
  );
}

export type Theme = {
  badgeBg: string;
  badgeColor: string;
  rowBg: string;
};

export const goldTheme: Theme = {
  badgeBg: '#F5E6C8',
  badgeColor: '#C49A3C',
  rowBg: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
};

export const greenTheme: Theme = {
  badgeBg: '#D8EDE0',
  badgeColor: '#4A8B62',
  rowBg: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
};

export const blueTheme: Theme = {
  badgeBg: '#D6E8F5',
  badgeColor: '#3D6F9E',
  rowBg: 'linear-gradient(135deg, #F4F9FE 0%, #E0EEF9 100%)',
};

export const purpleTheme: Theme = {
  badgeBg: '#E6DEFF',
  badgeColor: '#6B52B5',
  rowBg: 'linear-gradient(135deg, #F8F6FF 0%, #EDE8FF 100%)',
};

export const redTheme: Theme = {
  badgeBg: '#FDDBD8',
  badgeColor: '#B54540',
  rowBg: 'linear-gradient(135deg, #FFF8F7 0%, #FDEAE9 100%)',
};

export const tealTheme: Theme = {
  badgeBg: '#CCEEE8',
  badgeColor: '#2E8B7A',
  rowBg: 'linear-gradient(135deg, #F2FBF8 0%, #DCF3EE 100%)',
};

export const orangeTheme: Theme = {
  badgeBg: '#FDE6D2',
  badgeColor: '#C9743C',
  rowBg: 'linear-gradient(135deg, #FFF8F2 0%, #FDEEE0 100%)',
};

export function PageShell({
  title,
  children,
  backPath = '/bulgarian',
}: {
  title: string;
  children: ReactNode;
  backPath?: string;
}) {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EDD8', direction: 'ltr' }}
    >
      <button
        onClick={() => navigate(backPath)}
        className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
        style={{ backgroundColor: 'rgba(139,106,62,0.15)', color: '#5C4A32' }}
        title="back"
      >
        <ArrowRight size={22} className="rotate-180" />
      </button>

      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{
            fontFamily: "'Amiri', serif",
            fontWeight: 700,
            color: '#3B2A14',
          }}
        >
          {title}
        </h1>
        <OrnamentalDivider />
      </div>

      {children}

      <LeafDecoration />
      <BottomBlobs />
    </div>
  );
}

export function SubHeading({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex flex-col items-center pt-8 pb-2">
      <h2
        className="text-3xl md:text-4xl tracking-wide"
        style={{
          fontFamily: "'Amiri', serif",
          fontWeight: 700,
          color,
        }}
      >
        {label}
      </h2>
    </div>
  );
}

export function Row({
  italian,
  translation,
  theme,
  showAudio = false,
  secondary,
}: {
  italian: string;
  translation: string;
  theme: Theme;
  showAudio?: boolean;
  secondary?: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md"
      style={{
        background: theme.rowBg,
        boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
        border: '1.5px solid rgba(255,255,255,0.8)',
      }}
    >
      {/* Italian badge (left side — LTR) */}
      <div
        className="m-2 min-w-14 h-14 md:min-w-16 md:h-16 px-3 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: theme.badgeBg }}
      >
        <span
          className="text-2xl md:text-3xl font-bold"
          style={{ color: theme.badgeColor, fontFamily: "'Amiri', serif" }}
        >
          {italian}
        </span>
      </div>

      {/* Bulgarian translation */}
      <div
        className="flex-1 text-left text-2xl md:text-3xl px-2"
        style={{
          fontFamily: "'Amiri', serif",
          fontWeight: 700,
          color: theme.badgeColor,
        }}
      >
        {translation}
      </div>

      {/* Audio + secondary (right side — LTR) */}
      <div className="flex items-center gap-2 px-3 md:px-4 text-right flex-shrink-0">
        {secondary && (
          <div
            className="text-sm md:text-base max-w-[35%]"
            style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
          >
            {secondary}
          </div>
        )}
        {showAudio && <AudioCell wordKey={italian} accentColor={theme.badgeColor} />}
      </div>
    </div>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
      {children}
    </div>
  );
}

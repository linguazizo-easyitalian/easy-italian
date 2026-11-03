import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AudioCell } from '../components/AudioCell';

function OrnamentalDivider({ width = 'w-14 md:w-20' }: { width?: string }) {
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

type Theme = {
  badgeBg: string;
  badgeColor: string;
  rowBg: string;
};

const blueTheme: Theme = {
  badgeBg: '#D6E8F5',
  badgeColor: '#3D6F9E',
  rowBg: 'linear-gradient(135deg, #F4F9FE 0%, #E0EEF9 100%)',
};

const greenTheme: Theme = {
  badgeBg: '#D8EDE0',
  badgeColor: '#4A8B62',
  rowBg: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
};

const goldTheme: Theme = {
  badgeBg: '#F5E6C8',
  badgeColor: '#C49A3C',
  rowBg: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
};

const redTheme: Theme = {
  badgeBg: '#FDDBD8',
  badgeColor: '#B54540',
  rowBg: 'linear-gradient(135deg, #FFF8F7 0%, #FDEAE9 100%)',
};

const purpleTheme: Theme = {
  badgeBg: '#E6DEFF',
  badgeColor: '#6B52B5',
  rowBg: 'linear-gradient(135deg, #F8F6FF 0%, #EDE8FF 100%)',
};

const tealTheme: Theme = {
  badgeBg: '#CCEEE8',
  badgeColor: '#2E8B7A',
  rowBg: 'linear-gradient(135deg, #F2FBF8 0%, #DCF3EE 100%)',
};

const orangeTheme: Theme = {
  badgeBg: '#FDE6D2',
  badgeColor: '#C9743C',
  rowBg: 'linear-gradient(135deg, #FFF8F2 0%, #FDEEE0 100%)',
};

function Row({
  italian,
  arabic,
  theme,
  showAudio = false,
}: {
  italian: string;
  arabic: string;
  theme: Theme;
  showAudio?: boolean;
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
      {/* Italian badge (right side — RTL first child) */}
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

      {/* Arabic translation */}
      <div
        className="flex-1 text-right text-3xl md:text-4xl px-2"
        style={{
          fontFamily: "'Amiri', serif",
          fontWeight: 700,
          color: theme.badgeColor,
        }}
      >
        {arabic}
      </div>

      {/* Audio (left side — RTL last child) */}
      <div className="flex items-center gap-2 px-3 md:px-4 flex-shrink-0">
        {showAudio && <AudioCell wordKey={italian} accentColor={theme.badgeColor} />}
      </div>
    </div>
  );
}

function SubHeading({ label, color }: { label: string; color: string }) {
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

function AsmaaPage() {
  const navigate = useNavigate();

  const famiglia = [
    { italian: 'padre / papà', arabic: 'أب' },
    { italian: 'madre / mamma', arabic: 'أم' },
    { italian: 'genitori', arabic: 'الوالدان' },
    { italian: 'figlio', arabic: 'ابن' },
    { italian: 'figlia', arabic: 'ابنة' },
    { italian: 'fratello', arabic: 'أخ' },
    { italian: 'sorella', arabic: 'أخت' },
    { italian: 'nonno', arabic: 'جد' },
    { italian: 'nonna', arabic: 'جدة' },
    { italian: 'nipote', arabic: 'حفيد / حفيدة' },
    { italian: 'zio', arabic: 'عم / خال' },
    { italian: 'zia', arabic: 'عمة / خالة' },
    { italian: 'cugino', arabic: 'ابن عم / ابن خال' },
    { italian: 'cugina', arabic: 'ابنة عم / ابنة خال' },
    { italian: 'marito', arabic: 'زوج' },
    { italian: 'moglie', arabic: 'زوجة' },
    { italian: 'figlio unico', arabic: 'الابن الوحيد' },
    { italian: 'figlia unica', arabic: 'الابنة الوحيدة' },
    { italian: 'gemelli', arabic: 'توأم' },
  ];

  const lavoro = [
    { italian: 'capo', arabic: 'مدير' },
    { italian: 'collega', arabic: 'زميل' },
    { italian: 'dipendente', arabic: 'موظف' },
    { italian: 'pausa', arabic: 'استراحة' },
    { italian: 'riposo', arabic: 'راحة' },
    { italian: 'giorno di riposo', arabic: 'يوم راحة' },
    { italian: 'contratto', arabic: 'عقد' },
    { italian: 'stipendio', arabic: 'راتب' },
    { italian: 'documenti', arabic: 'مستندات' },
  ];

  const animali = [
    { italian: 'cane', arabic: 'كلب' },
    { italian: 'gatto', arabic: 'قطة' },
    { italian: 'cavallo', arabic: 'حصان' },
    { italian: 'mucca', arabic: 'بقرة' },
    { italian: 'pecora', arabic: 'خروف' },
    { italian: 'gallo', arabic: 'ديك' },
    { italian: 'gallina', arabic: 'دجاجة' },
    { italian: 'coniglio', arabic: 'أرنب' },
    { italian: 'topo', arabic: 'فأر' },
    { italian: 'pesce', arabic: 'سمكة' },
    { italian: 'uccello', arabic: 'طائر' },
    { italian: 'aquila', arabic: 'نسر' },
    { italian: 'leone', arabic: 'أسد' },
    { italian: 'tigre', arabic: 'نمر' },
    { italian: 'elefante', arabic: 'فيل' },
    { italian: 'scimmia', arabic: 'قرد' },
    { italian: 'serpente', arabic: 'ثعبان' },
    { italian: 'giraffa', arabic: 'زرافة' },
    { italian: 'maiale', arabic: 'خنزير' },
    { italian: 'lupo', arabic: 'ذئب' },
    { italian: 'tartaruga', arabic: 'سلحفاة' },
    { italian: 'rana', arabic: 'ضفدع' },
  ];

  const cibi = [
    { italian: 'pane', arabic: 'خبز' },
    { italian: 'acqua', arabic: 'ماء' },
    { italian: 'latte', arabic: 'حليب' },
    { italian: 'riso', arabic: 'أرز' },
    { italian: 'pasta', arabic: 'معكرونة' },
    { italian: 'carne', arabic: 'لحم' },
    { italian: 'pollo', arabic: 'دجاج' },
    { italian: 'pesce', arabic: 'سمك' },
    { italian: 'formaggio', arabic: 'جبن' },
    { italian: 'uova', arabic: 'بيض' },
    { italian: 'zucchero', arabic: 'سكر' },
    { italian: 'sale', arabic: 'ملح' },
    { italian: 'olio', arabic: 'زيت' },
    { italian: 'frutta', arabic: 'فاكهة' },
    { italian: 'verdura', arabic: 'خضار' },
    { italian: 'mela', arabic: 'تفاحة' },
    { italian: 'banana', arabic: 'موزة' },
    { italian: 'pomodoro', arabic: 'طماطم' },
    { italian: 'patata', arabic: 'بطاطس' },
    { italian: 'cipolla', arabic: 'بصل' },
  ];

  const casa = [
    { italian: 'porta', arabic: 'باب' },
    { italian: 'finestra', arabic: 'نافذة' },
    { italian: 'tavolo', arabic: 'طاولة' },
    { italian: 'sedia', arabic: 'كرسي' },
    { italian: 'letto', arabic: 'سرير' },
    { italian: 'divano', arabic: 'أريكة' },
    { italian: 'armadio', arabic: 'خزانة' },
    { italian: 'specchio', arabic: 'مرآة' },
    { italian: 'lampada', arabic: 'مصباح' },
    { italian: 'tappeto', arabic: 'سجاد' },
    { italian: 'cucina', arabic: 'مطبخ' },
    { italian: 'bagno', arabic: 'حمام' },
    { italian: 'salotto', arabic: 'صالة' },
    { italian: 'camera', arabic: 'غرفة' },
    { italian: 'scala', arabic: 'درج' },
    { italian: 'soffitto', arabic: 'سقف' },
    { italian: 'pavimento', arabic: 'أرضية' },
    { italian: 'muro', arabic: 'جدار' },
    { italian: 'chiave', arabic: 'مفتاح' },
    { italian: 'orologio', arabic: 'ساعة' },
  ];

  const tempo = [
    { italian: 'adesso', arabic: 'الآن' },
    { italian: 'più tardi', arabic: 'لاحقاً' },
    { italian: 'secondo', arabic: 'ثانية' },
    { italian: 'minuto', arabic: 'دقيقة' },
    { italian: "mezz'ora", arabic: 'نصف ساعة' },
    { italian: 'le tre e un quarto', arabic: 'الثالثة والربع' },
    { italian: 'le tre meno un quarto', arabic: 'الثالثة إلا ربع' },
    { italian: 'ora', arabic: 'ساعة' },
    { italian: 'giorno', arabic: 'يوم' },
    { italian: 'anno', arabic: 'سنة' },
    { italian: 'secolo', arabic: 'قرن' },
  ];

  const viaggio = [
    { italian: 'viaggio', arabic: 'رحلة' },
    { italian: 'viaggiatore', arabic: 'مسافر' },
    { italian: 'turista', arabic: 'سائح' },
    { italian: 'turismo', arabic: 'سياحة' },
    { italian: 'valigia', arabic: 'حقيبة سفر' },
    { italian: 'passaporto', arabic: 'جواز سفر' },
    { italian: 'biglietto', arabic: 'تذكرة' },
    { italian: 'aeroporto', arabic: 'مطار' },
    { italian: 'aereo', arabic: 'طائرة' },
    { italian: 'treno', arabic: 'قطار' },
    { italian: 'nave', arabic: 'سفينة' },
    { italian: 'autobus', arabic: 'حافلة' },
    { italian: 'taxi', arabic: 'سيارة أجرة' },
    { italian: 'mappa', arabic: 'خريطة' },
    { italian: 'destinazione', arabic: 'وجهة' },
    { italian: 'hotel', arabic: 'فندق' },
    { italian: 'spiaggia', arabic: 'شاطئ' },
    { italian: 'guida', arabic: 'مرشد' },
    { italian: 'souvenir', arabic: 'تذكار' },
    { italian: 'partenza', arabic: 'مغادرة' },
    { italian: 'ristorante', arabic: 'مطعم' },
    { italian: 'strada', arabic: 'شارع' },
    { italian: 'museo', arabic: 'متحف' },
    { italian: 'negozio', arabic: 'متجر' },
  ];

  const direzioni = [
    { italian: 'a destra', arabic: 'يميناً' },
    { italian: 'a sinistra', arabic: 'يساراً' },
    { italian: 'dritto', arabic: 'مستقيم' },
    { italian: 'vicino', arabic: 'قريب' },
    { italian: 'lontano', arabic: 'بعيد' },
    { italian: 'qui', arabic: 'هنا' },
    { italian: 'lì / là', arabic: 'هناك' },
    { italian: 'la strada', arabic: 'الشارع / الطريق' },
    { italian: 'il centro', arabic: 'وسط المدينة' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#F5EDD8', direction: 'rtl' }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate('/fusha')}
        className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
        style={{ backgroundColor: 'rgba(139,106,62,0.15)', color: '#5C4A32' }}
        title="back"
      >
        <ArrowRight size={22} />
      </button>

      {/* Title block: الأسماء */}
      <div className="flex flex-col items-center pt-10 pb-2">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl tracking-wide"
          style={{
            fontFamily: "'Amiri', serif",
            fontWeight: 700,
            color: '#3B2A14',
          }}
        >
          الأسماء
        </h1>
        <OrnamentalDivider />
      </div>

      {/* Sub-section: العائلة - La famiglia */}
      <SubHeading label="العائلة — La famiglia" color={blueTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {famiglia.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={blueTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: العمل - Il lavoro */}
      <SubHeading label="العمل — Il lavoro" color={greenTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {lavoro.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={greenTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: الحيوانات - Gli animali */}
      <SubHeading label="الحيوانات — Gli animali" color={redTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {animali.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={redTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: الطعام - I cibi */}
      <SubHeading label="الطعام — I cibi" color={goldTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {cibi.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={goldTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: أغراض البيت - Gli oggetti della casa */}
      <SubHeading label="أغراض البيت — Gli oggetti della casa" color={purpleTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {casa.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={purpleTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: الوقت - Il tempo */}
      <SubHeading label="الوقت — Il tempo" color={blueTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {tempo.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={blueTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: السفر - Il viaggio */}
      <SubHeading label="السفر — Il viaggio" color={tealTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {viaggio.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={tealTheme}
            showAudio
          />
        ))}
      </div>

      {/* Sub-section: الاتجاهات - Le direzioni */}
      <SubHeading label="الاتجاهات — Le direzioni" color={orangeTheme.badgeColor} />

      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {direzioni.map((item) => (
          <Row
            key={item.italian + item.arabic}
            italian={item.italian}
            arabic={item.arabic}
            theme={orangeTheme}
            showAudio
          />
        ))}
      </div>

      <LeafDecoration />

      {/* Bottom color blobs */}
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

export default AsmaaPage;

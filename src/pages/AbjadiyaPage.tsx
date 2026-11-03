import { useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
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

function AbjadiyaPage() {
  const navigate = useNavigate();
  const [showHInfo, setShowHInfo] = useState(false);
  const [showAInfo, setShowAInfo] = useState(false);
  const [showGInfo, setShowGInfo] = useState(false);
  const [showGiInfo, setShowGiInfo] = useState(false);
  const [showCiInfo, setShowCiInfo] = useState(false);
  const [showEInfo, setShowEInfo] = useState(false);
  const [showSInfo, setShowSInfo] = useState(false);
  const [showZInfo, setShowZInfo] = useState(false);

  const italianAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];

  const arabicMapping: Record<string, string> = {
    'A': 'ا',
    'B': 'ب',
    'C': 'ك',
    'D': 'د',
    'E': 'ايه',
    'F': 'ف',
    'G': 'ج / گ',
    'H': 'ه',
    'I': 'ي',
    'L': 'ل',
    'M': 'م',
    'N': 'ن',
    'O': 'و',
    'P': 'پ / ب',
    'Q': 'ك',
    'R': 'ر',
    'S': 'س',
    'T': 'ت',
    'U': 'و',
    'V': 'ڤ / ف',
    'Z': 'ز'
  };

  const renderArabic = (letter: string) => {
    if (letter === 'G') return (
      <div className="flex flex-col items-end gap-1">
        <div>ج <span className="text-xl">(مصري)</span></div>
        <div>گ <span className="text-xl">(ق عراقي)</span></div>
      </div>
    );
    if (letter === 'V') return (
      <div className="flex flex-col items-end gap-1">
        <div>ڤ</div>
        <div>ف <span className="text-xl">(قريب)</span></div>
      </div>
    );
    if (letter === 'P') return (
      <div className="flex flex-col items-end gap-1">
        <div>پ</div>
        <div>ب <span className="text-xl">(قريب)</span></div>
      </div>
    );
    if (letter === 'O') return <><span>و</span> <span className="text-xl">(قريب)</span></>;
    return arabicMapping[letter];
  };

  const specialCases = [
    { italian: 'chi', arabic: 'كي' },
    { italian: 'che', arabic: 'ك + ايه', displayType: 'che' },
    { italian: 'ci', arabic: 'تشي/چي', displayType: 'ci' },
    { italian: 'ce', arabic: 'تش/چ + ايه', displayType: 'ce' },
    { italian: 'ghi', arabic: 'غي', displayType: 'ghi' },
    { italian: 'ghe', arabic: 'غ + ايه', displayType: 'ghe' },
    { italian: 'gi', arabic: 'جي', displayType: 'gi' },
    { italian: 'ge', arabic: 'ج + ايه', displayType: 'ge' },
    { italian: 'sci', arabic: 'شي' },
    { italian: 'sce', arabic: 'ش + ايه', displayType: 'sce' },
    { italian: 'gli', arabic: 'لي' },
    { italian: 'gn', arabic: 'نّي' }
  ];

  const renderSpecialArabic = (item: typeof specialCases[0]) => {
    if (item.displayType === 'ghi') return (
      <div className="flex flex-col items-end gap-1">
        <div>جي <span className="text-xl">(مصري)</span></div>
        <div>گي <span className="text-xl">(ق عراقي)</span></div>
      </div>
    );
    if (item.displayType === 'ghe') return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end gap-1">
          <div>ج <span className="text-xl">(مصري)</span></div>
          <div className="flex items-center gap-1">
            <span className="text-xl">(ق عراقي)</span>
            <div>گ</div>
          </div>
        </div>
        <div className="text-4xl">+ ايه</div>
      </div>
    );
    if (item.displayType === 'gi') return <>{item.arabic} <span className="text-xl">(القراءة الفصحى)</span></>;
    return item.arabic;
  };

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
          الأبجدية
        </h1>
        <OrnamentalDivider />
      </div>

      {/* Alphabet cards */}
      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6">
        {italianAlphabet.map((letter) => (
          <div
            key={letter}
            className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #FFFDF5 0%, #FDF3DC 100%)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              border: '1.5px solid rgba(255,255,255,0.8)',
            }}
          >
            {/* Italian letter badge (right side — RTL first child) */}
            <div
              className="m-2 min-w-14 h-14 md:min-w-16 md:h-16 px-3 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#F5E6C8' }}
            >
              <div className="flex items-baseline gap-1">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: '#8B6F1F', fontFamily: "'Amiri', serif" }}
                >
                  {letter}
                </span>
                <span
                  className="text-2xl md:text-3xl"
                  style={{ color: '#B8973A', fontFamily: "'Amiri', serif" }}
                >
                  {letter.toLowerCase()}
                </span>
              </div>
            </div>

            {/* Arabic translation */}
            <div
              className="flex-1 text-right text-3xl md:text-4xl px-2"
              style={{
                fontFamily: "'Amiri', serif",
                fontWeight: 700,
                color: '#2E7D32',
              }}
            >
              {renderArabic(letter)}
            </div>

            {/* Audio + Info button (left side — RTL last child) */}
            <div className="flex items-center gap-1 m-2 flex-shrink-0">
              <AudioCell wordKey={letter} accentColor="#8B6F1F" />
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                {(letter === 'A' || letter === 'H' || letter === 'E' || letter === 'S' || letter === 'Z') && (
                  <button
                    onClick={() =>
                      letter === 'A' ? setShowAInfo(!showAInfo) :
                      letter === 'H' ? setShowHInfo(!showHInfo) :
                      letter === 'E' ? setShowEInfo(!showEInfo) :
                      letter === 'Z' ? setShowZInfo(!showZInfo) :
                      setShowSInfo(!showSInfo)
                    }
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 shadow-md"
                    style={{
                      backgroundColor: '#FFD54F',
                      color: '#5C4A32'
                    }}
                  >
                    !
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special cases title */}
      <div className="flex flex-col items-center pt-10 pb-2">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl tracking-wide"
          style={{
            fontFamily: "'Amiri', serif",
            fontWeight: 700,
            color: '#3B2A14',
          }}
        >
          الحالات الخاصة
        </h2>
        <OrnamentalDivider width="w-10 md:w-16" />
      </div>

      {/* Special cases cards */}
      <div className="flex flex-col gap-3 w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 py-6 pb-24">
        {specialCases.map((item) => (
          <div
            key={item.italian}
            className="flex items-center justify-between rounded-2xl overflow-hidden transition-all hover:scale-[1.015] hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, #F5FBF7 0%, #E4F4EB 100%)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              border: '1.5px solid rgba(255,255,255,0.8)',
            }}
          >
            {/* Italian digraph badge (right side — RTL first child) */}
            <div
              className="m-2 min-w-14 h-14 md:min-w-16 md:h-16 px-3 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D8EDE0' }}
            >
              <span
                className="text-2xl md:text-3xl font-bold"
                style={{ color: '#4A8B62', fontFamily: "'Amiri', serif" }}
              >
                {item.italian}
              </span>
            </div>

            {/* Arabic translation */}
            <div
              className="flex-1 text-right text-3xl md:text-4xl px-2"
              style={{
                fontFamily: "'Amiri', serif",
                fontWeight: 700,
                color: '#2E7D32',
              }}
            >
              {renderSpecialArabic(item)}
            </div>

            {/* Audio + Info button (left side — RTL last child) */}
            <div className="flex items-center gap-1 m-2 flex-shrink-0">
              <AudioCell wordKey={item.italian} accentColor="#4A8B62" />
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                {(item.italian === 'gi' || item.italian === 'ci') && (
                  <button
                    onClick={() => item.italian === 'gi' ? setShowGiInfo(!showGiInfo) : setShowCiInfo(!showCiInfo)}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 shadow-md"
                    style={{
                      backgroundColor: '#FFD54F',
                      color: '#5C4A32'
                    }}
                  >
                    !
                  </button>
                )}
              </div>
            </div>
          </div>
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

      {/* Info modals */}
      {showCiInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowCiInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-right w-11/12 max-w-md z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-2xl font-bold"
                style={{ color: '#5C4A32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                ci + a/o/u/e (أي حرف علة) =
              </div>
              <div
                className="text-2xl font-bold"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                تش/چ + الحرف العلة الثاني
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: ciao = تشاو/چاو
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                يعني مرحباً
              </div>
            </div>
            <button
              onClick={() => setShowCiInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showGiInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowGiInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-right w-11/12 max-w-md z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-2xl font-bold"
                style={{ color: '#5C4A32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                gi + a/o/u/e (أي حرف علة) =
              </div>
              <div
                className="text-2xl font-bold"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                ج + الحرف العلة الثاني
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: giallo = جاللو
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                ليس جياللو
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                يعني أصفر
              </div>
            </div>
            <button
              onClick={() => setShowGiInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showAInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowAInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-right w-11/12 max-w-md z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-xl font-bold"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                أول حرف في بداية الجملة أو أسماء الأشخاص يكون كبير، وباقي الحروف تكون صغيرة
              </div>
            </div>
            <button
              onClick={() => setShowAInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showHInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowHInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 pb-12 rounded-xl shadow-2xl text-right w-auto max-w-xs z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-xl font-bold text-center"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                (لا نقرؤه أبدًا، نتخطاه ونكمل بالحرف الذي بعده)
              </div>
            </div>
            <button
              onClick={() => setShowHInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showEInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowEInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 pb-12 rounded-xl shadow-2xl text-right w-auto max-w-xs z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-xl font-bold text-center"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثل النطق المصري لكن أقصر
              </div>
            </div>
            <button
              onClick={() => setShowEInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showSInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowSInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-right w-11/12 max-w-md z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-xl"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                عندما يكون هناك حرف S واحد بين حرفي علة يُنطق ز
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال : Casa = كازا
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                يعني بيت
              </div>
            </div>
            <button
              onClick={() => setShowSInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}

      {showZInfo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowZInfo(false)}
          />
          <div
            className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 pb-10 rounded-xl shadow-2xl text-right w-11/12 max-w-md z-[1000]"
            style={{
              backgroundColor: '#FFF3CD',
              border: '2px solid #FFD54F'
            }}
          >
            <div className="space-y-2">
              <div
                className="text-xl"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                عندما يكون هناك حرف Z واحد أو حرفا ZZ بين حرفي علة تُنطق مثل تس
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: lezione = ليتسيوني (درس)
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: pazzo = باتسو (مجنون)
              </div>
              <div
                className="text-xl"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                عندما لا يكون هناك حرفٌ قبل Z ويأتي بعده حرفُ علة، فإن Z يُنطق دز
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: zio = دزيو (عم\خال)
              </div>
              <div
                className="text-xl"
                dir="rtl"
                style={{ color: '#2E7D32', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                عندما يكون هناك حرفٌ ساكن قبل Z ويأتي بعد Z حرفُ علة، فإن Z يصبح دز
              </div>
              <div
                className="text-xl"
                style={{ color: '#8B7355', fontFamily: "'Amiri', serif", fontWeight: 700 }}
              >
                مثال: zanzara = دزاندزارا (بعوضة)
              </div>
            </div>
            <button
              onClick={() => setShowZInfo(false)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: '#FFD54F',
                color: '#5C4A32'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AbjadiyaPage;

import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function AfaalPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#3D2817' }}>
            الأفعال
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Verbs
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-center text-gray-600 text-lg">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AfaalPage;

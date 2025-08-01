import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './styling.css';

export default function App() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === '310325') {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Kode salah. Coba lagi.');
    }
  };

  const handleNavigate = () => {
    navigate('/ucapan');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      {!isUnlocked ? (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Masukkan Passcode</h1>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            placeholder="Contoh: 310325"
          />
          <button
            type="submit"
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Passcode benar 🎉</h2>
          <button
            onClick={handleNavigate}
            className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition-all"
          >
            Masuk ke Ucapan
          </button>
        </div>
      )}
    </div>
  );
}
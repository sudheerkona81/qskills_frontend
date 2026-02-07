import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-700 to-purple-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl hover:opacity-90 transition"
        >
          <Zap size={28} />
          TextTools
        </Link>

        <div className="flex gap-8">
          <Link
            to="/"
            className="hover:text-violet-200 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/translator"
            className="hover:text-violet-200 transition font-medium"
          >
            Translator
          </Link>
          <Link
            to="/string-generator"
            className="hover:text-violet-200 transition font-medium"
          >
            String Generator
          </Link>
        </div>
      </nav>
    </header>
  );
}

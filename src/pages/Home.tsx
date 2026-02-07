import { Link } from 'react-router-dom';
import { Languages, Dices } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to TextTools</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A powerful suite of text utilities to translate languages and generate random strings.
            Built with React, Tailwind CSS, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/translator"
            className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-l-4 border-blue-500"
          >
            <Languages size={40} className="text-blue-500 mb-4 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Text Translator</h2>
            <p className="text-gray-600 mb-4">
              Convert English text to your favorite language. Powered by RapidAPI's translation engine for accurate and quick translations.
            </p>
            <span className="inline-block text-blue-600 font-semibold group-hover:translate-x-2 transition">
              Get Started →
            </span>
          </Link>

          <Link
            to="/string-generator"
            className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-l-4 border-green-500"
          >
            <Dices size={40} className="text-green-500 mb-4 group-hover:scale-110 transition" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">String Generator</h2>
            <p className="text-gray-600 mb-4">
              Generate random strings with customizable length. Perfect for testing, passwords, and unique identifiers.
            </p>
            <span className="inline-block text-green-600 font-semibold group-hover:translate-x-2 transition">
              Get Started →
            </span>
          </Link>
        </div>

        <div className="mt-20 bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Features</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Multi-language translation support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Random string generation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Clean and intuitive interface</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">✓</span>
              <span>Instant results</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

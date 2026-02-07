import { useState, useCallback } from 'react';
import { Copy, Loader } from 'lucide-react';

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const languages = {
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    pt: 'Portuguese',
    ru: 'Russian',
    ja: 'Japanese',
    ko: 'Korean',
    zh: 'Chinese (Simplified)',
    ar: 'Arabic',
    tr: 'Turkish',
  };

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter text to translate');
      return;
    }

    setLoading(true);
    setError('');
    setTranslatedText('');

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=en|${targetLanguage}`
      );

      if (!response.ok) throw new Error('Translation failed');

      const data = await response.json();

      if (data.responseStatus === 200) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        setError('Translation service unavailable. Please try again.');
      }
    } catch (err) {
      setError(
        'Error during translation. Please check your connection and try again.'
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [inputText, targetLanguage]);

  const handleCopy = useCallback(() => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [translatedText]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Text Translator
        </h1>
        <p className="text-gray-600 mb-8">
          Translate English text to your favorite language instantly.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                English Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter English text here..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                {inputText.length} characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Translated Text
              </label>
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-gray-50 resize-none"
              />
              {translatedText && (
                <button
                  onClick={handleCopy}
                  className="mt-2 flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium text-sm"
                >
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy to clipboard'}
                </button>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Target Language
            </label>
            <select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {Object.entries(languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleTranslate}
            disabled={loading || !inputText.trim()}
            className="w-full mt-6 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Translating...
              </>
            ) : (
              'Translate'
            )}
          </button>
        </div>

        <div className="mt-8 bg-violet-50 rounded-lg p-6 border border-violet-200">
          <h3 className="font-semibold text-gray-900 mb-3">
            Supported Languages:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.values(languages).map((lang) => (
              <div key={lang} className="text-sm text-gray-700">
                • {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

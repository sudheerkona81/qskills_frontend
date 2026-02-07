import { useState, useCallback, useEffect } from 'react';
import { Copy, RefreshCw, Trash2 } from 'lucide-react';

interface GeneratedString {
  id: string;
  value: string;
  timestamp: Date;
}

export default function StringGenerator() {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [currentString, setCurrentString] = useState('');
  const [generatedStrings, setGeneratedStrings] = useState<GeneratedString[]>([]);
  const [copied, setCopied] = useState(false);

  const generateString = useCallback(() => {
    let characters = '';

    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!characters) {
      setCurrentString('Please select at least one character type');
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setCurrentString(result);
    setGeneratedStrings((prev) => [
      {
        id: Date.now().toString(),
        value: result,
        timestamp: new Date(),
      },
      ...prev,
    ]);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generateString();
  }, []);

  const handleCopy = useCallback(() => {
    if (currentString && !currentString.includes('Please select')) {
      navigator.clipboard.writeText(currentString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [currentString]);

  const handleClearHistory = useCallback(() => {
    setGeneratedStrings([]);
  }, []);

  const copyHistoryItem = useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">String Generator</h1>
        <p className="text-gray-600 mb-8">Generate random strings with customizable options.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Generated String</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={currentString}
                    readOnly
                    className="flex-1 p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-lg break-all"
                  />
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold flex items-center gap-2 transition"
                  >
                    <Copy size={20} />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Length: <span className="text-green-600">{length}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="128"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>128</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Character Types</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeUppercase}
                      onChange={(e) => setIncludeUppercase(e.target.checked)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 font-medium">Uppercase (A-Z)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeLowercase}
                      onChange={(e) => setIncludeLowercase(e.target.checked)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 font-medium">Lowercase (a-z)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 font-medium">Numbers (0-9)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 font-medium">Symbols (!@#$%...)</span>
                  </label>
                </div>
              </div>

              <button
                onClick={generateString}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                <RefreshCw size={20} />
                Generate New String
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">History</h3>
              {generatedStrings.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  className="text-gray-400 hover:text-red-600 transition"
                  title="Clear history"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>

            {generatedStrings.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-8">No strings generated yet</p>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {generatedStrings.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => copyHistoryItem(item.value)}
                    className="p-3 bg-gray-50 hover:bg-green-50 rounded-lg cursor-pointer transition border border-gray-200 hover:border-green-300"
                    title="Click to copy"
                  >
                    <p className="text-xs text-gray-500 mb-1">
                      {item.timestamp.toLocaleTimeString()}
                    </p>
                    <p className="font-mono text-sm text-gray-800 break-all">{item.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

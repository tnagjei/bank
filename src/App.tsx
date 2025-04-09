import React, { useState } from 'react';
import { Music, Sparkles, Users, Globe2, MessageCircle, Gift, CreditCard, HelpCircle, ChevronRight } from 'lucide-react';

function App() {
  const [keywords, setKeywords] = useState('');
  const [generatedNames, setGeneratedNames] = useState<Array<{name: string, language: string}>>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ZH', name: '中文' },
    { code: 'JA', name: '日本語' },
    { code: 'KO', name: '한국어' },
    { code: 'ES', name: 'Español' },
    { code: 'DE', name: 'Deutsch' }
  ];

  const generateNames = async () => {
    if (!keywords.trim()) return;
    
    setIsGenerating(true);
    // Simulated API call - replace with actual AI implementation
    setTimeout(() => {
      // Generate 5-8 names in the selected language
      const numberOfNames = Math.floor(Math.random() * 4) + 5; // Random number between 5-8
      const mockNames = [];
      
      // Example name patterns for each language
      const patterns = {
        EN: [
          `The ${keywords} Experience`,
          `${keywords} Theory`,
          `${keywords} Collective`,
          `The ${keywords} Project`,
          `${keywords} Revolution`,
          `${keywords} Society`,
          `${keywords} Empire`,
          `${keywords} Alliance`
        ],
        ZH: [
          `${keywords}之声`,
          `${keywords}乐团`,
          `${keywords}计划`,
          `${keywords}现象`,
          `${keywords}时代`,
          `${keywords}帝国`,
          `${keywords}联盟`,
          `${keywords}革命`
        ],
        JA: [
          `${keywords}の世界`,
          `${keywords}バンド`,
          `${keywords}プロジェクト`,
          `${keywords}エクスペリエンス`,
          `${keywords}レボリューション`,
          `${keywords}アライアンス`,
          `${keywords}ソサエティ`,
          `${keywords}エンパイア`
        ],
        KO: [
          `${keywords}의 소리`,
          `${keywords}프로젝트`,
          `${keywords}혁명`,
          `${keywords}세계`,
          `${keywords}시대`,
          `${keywords}연합`,
          `${keywords}제국`,
          `${keywords}현상`
        ],
        ES: [
          `Los ${keywords}`,
          `El ${keywords} Proyecto`,
          `La Revolución ${keywords}`,
          `${keywords} Experiencia`,
          `Sociedad ${keywords}`,
          `Imperio ${keywords}`,
          `Alianza ${keywords}`,
          `${keywords} Colectivo`
        ],
        DE: [
          `Die ${keywords}`,
          `${keywords} Projekt`,
          `${keywords} Revolution`,
          `${keywords} Erfahrung`,
          `${keywords} Gesellschaft`,
          `${keywords} Reich`,
          `${keywords} Allianz`,
          `${keywords} Kollektiv`
        ]
      };

      for (let i = 0; i < numberOfNames; i++) {
        const namePatterns = patterns[selectedLanguage];
        const randomPattern = namePatterns[Math.floor(Math.random() * namePatterns.length)];
        mockNames.push({
          name: randomPattern,
          language: selectedLanguage
        });
      }

      setGeneratedNames(mockNames);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">BandNameGenerator.online</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400">How It Works</a>
            <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Your Perfect Band Name with AI
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Generate unique band names instantly using advanced AI technology.
            Choose your language and get creative name suggestions for your band.
          </p>
          
          <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="mb-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white mb-4"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords (e.g., cosmic, metal, journey)"
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white"
              />
            </div>
            <button
              onClick={generateNames}
              disabled={isGenerating}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              {isGenerating ? 'Generating...' : 'Generate Names'}
            </button>
          </div>

          {/* Generated Names */}
          {generatedNames.length > 0 && (
            <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Generated Band Names</h2>
              <div className="space-y-4">
                {generatedNames.map((name, index) => (
                  <div key={index} className="flex justify-between items-center bg-black/30 p-4 rounded-lg">
                    <div>
                      <span className="text-sm text-blue-400">[{name.language}]</span>
                      <span className="ml-3">{name.name}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(name.name)}
                      className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Generator</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <Globe2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Language-Specific Generation</h3>
              <p className="text-gray-400">Generate names in your chosen language - English, Chinese, Japanese, Korean, Spanish, or German.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-400">Advanced AI algorithms ensure unique and creative band names in your selected language.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Tested</h3>
              <p className="text-gray-400">Trusted by thousands of musicians worldwide for language-specific band names.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">1. Choose Your Language</h3>
                  <p className="text-gray-400">Select the language you want your band name in.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. Enter Keywords</h3>
                  <p className="text-gray-400">Input words that reflect your band's style, theme, or vision.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. Get Creative Names</h3>
                  <p className="text-gray-400">Receive 5-8 unique band name suggestions in your chosen language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Musicians Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">"Perfect for our English-language rock band. The suggestions were creative and exactly what we were looking for."</p>
              <div className="text-sm">
                <p className="font-bold">Alex Chen</p>
                <p className="text-gray-400">Lead Guitarist, Cosmic Echoes</p>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">"As a Spanish band, finding the right name was crucial. This tool gave us amazing Spanish-language suggestions."</p>
              <div className="text-sm">
                <p className="font-bold">Maria Rodriguez</p>
                <p className="text-gray-400">Vocalist, Luna Voltage</p>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">"The Japanese name suggestions were perfect for our J-rock band. Culturally relevant and creative."</p>
              <div className="text-sm">
                <p className="font-bold">Yuki Tanaka</p>
                <p className="text-gray-400">Drummer, 星の響き</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg border border-gray-800">
              <div className="text-blue-400 font-bold mb-4">Free</div>
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>5 name generations per day</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>Basic AI suggestions</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span>3 languages support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                Get Started
              </button>
            </div>
            <div className="bg-blue-600 p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-sm font-bold px-4 py-1">Popular</div>
              <div className="text-white font-bold mb-4">Pro</div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-6">$9.99</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  <span>Unlimited generations</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  <span>Advanced AI algorithms</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  <span>All languages supported</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How does the language-specific generation work?</h3>
              <p className="text-gray-400">Our AI is trained to understand the cultural and linguistic nuances of each supported language, ensuring that generated names are appropriate and meaningful in your chosen language.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Are the generated names unique?</h3>
              <p className="text-gray-400">While our AI generates creative names, we recommend doing a quick search to ensure the name isn't already in use by another band in your target market.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Which languages are supported?</h3>
              <p className="text-gray-400">We currently support English, Chinese, Japanese, Korean, Spanish, and German. Premium users get access to additional languages and regional variations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-blue-500" />
                <span className="font-bold">BandNameGenerator.online</span>
              </div>
              <p className="text-gray-400">Creating unique band names with AI technology.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">tangjei@gmail.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 BandNameGenerator.online. All rights reserved. Created by tangjei</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Heart, Send, ArrowRight, CheckCircle, Copy, ExternalLink, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [copiedContact, setCopiedContact] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const [clickedLinks, setClickedLinks] = useState(new Set());

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sparkle generation
  const generateSparkle = (x, y) => {
    const newSparkle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      size: Math.random() * 10 + 5,
      opacity: 1
    };
    setSparkles(prev => [...prev, newSparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      generateSparkle(400, 300);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    generateSparkle(mousePosition.x, mousePosition.y);
    setTimeout(() => setCopiedContact(null), 3000);
  };

  const handleLinkClick = (link) => {
    setClickedLinks(prev => new Set([...prev, link]));
    generateSparkle(mousePosition.x, mousePosition.y);
    setTimeout(() => {
      setClickedLinks(prev => {
        const newSet = new Set(prev);
        newSet.delete(link);
        return newSet;
      });
    }, 2000);
  };

  const socialLinks = [
    { icon: Facebook, color: "text-blue-600", bg: "bg-blue-50", name: "Facebook", count: "12K" },
    { icon: Twitter, color: "text-sky-500", bg: "bg-sky-50", name: "Twitter", count: "8.5K" },
    { icon: Instagram, color: "text-pink-600", bg: "bg-pink-50", name: "Instagram", count: "15K" },
    { icon: Youtube, color: "text-red-600", bg: "bg-red-50", name: "YouTube", count: "25K" }
  ];

  const quickLinks = [
    { name: "About Us", badge: "New" },
    { name: "Features", badge: null },
    { name: "Pricing", badge: "50% Off" },
    { name: "Safety & Privacy", badge: null },
    { name: "Help Center", badge: "24/7" },
    { name: "Blog", badge: "Hot" }
  ];

  const parentLinks = [
    { name: "How It Works", icon: "🎯" },
    { name: "Educational Benefits", icon: "🧠" },
    { name: "Screen Time Guidelines", icon: "⏰" },
    { name: "Progress Tracking", icon: "📊" },
    { name: "Family Challenges", icon: "🏆" },
    { name: "Support", icon: "💬" }
  ];

  return (
    <div className="relative">
      {/* Floating Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            opacity: sparkle.opacity
          }}
        >
          <Sparkles 
            className="text-yellow-400 animate-ping" 
            style={{ fontSize: sparkle.size }}
          />
        </div>
      ))}

      <footer className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 border-t border-slate-200 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 transform-gpu">
                    Ayla
                  </h3>
                  <div className="h-1 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-700 rounded-full transform origin-left"></div>
                  <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm hover:text-slate-800 transition-colors duration-300 cursor-default">
                  Transforming screen time into brain time with engaging educational games for children aged 5-12.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  Follow Us
                  <div className="flex -space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, color, bg, name, count }) => (
                    <button
                      key={name}
                      onClick={() => generateSparkle(mousePosition.x, mousePosition.y)}
                      className={`group relative p-4 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 transform hover:scale-110 hover:shadow-xl active:scale-95 ${bg}`}
                      onMouseEnter={() => setHoveredSocial(name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-6 h-6 ${color} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`} />
                        <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                          {count}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-slate-600 mt-2 group-hover:text-slate-800 transition-colors duration-300">
                        {name}
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:animate-pulse"></div>
                      
                      {/* Tooltip */}
                      <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 transition-all duration-500 pointer-events-none ${hoveredSocial === name ? 'opacity-100 -translate-y-2' : ''}`}>
                        Follow us on {name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-slate-800 text-lg border-b-2 border-slate-200 pb-3 flex items-center gap-2">
                Quick Links
                <ArrowRight className="w-4 h-4 text-blue-600 animate-bounce" />
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(({ name, badge }, index) => (
                  <li key={name} className="group">
                    <button 
                      onClick={() => handleLinkClick(name)}
                      className={`w-full text-left flex items-center justify-between p-3 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-md ${clickedLinks.has(name) ? 'bg-blue-100 text-blue-700 scale-105' : 'hover:bg-slate-50'}`}
                      style={{transitionDelay: `${index * 100}ms`}}
                    >
                      <div className="flex items-center gap-3">
                        <ArrowRight className={`w-4 h-4 transition-all duration-500 ${clickedLinks.has(name) ? 'text-blue-600 translate-x-2' : 'text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1'}`} />
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                      {badge && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${badge === 'New' ? 'bg-green-100 text-green-700' : badge === 'Hot' ? 'bg-red-100 text-red-700' : badge === '50% Off' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'} animate-pulse`}>
                          {badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parents Section */}
            <div className="space-y-6">
              <h4 className="font-semibold text-slate-800 text-lg border-b-2 border-slate-200 pb-3 flex items-center gap-2">
                For Parents
                <Heart className="w-4 h-4 text-pink-600 animate-pulse" />
              </h4>
              <ul className="space-y-4">
                {parentLinks.map(({ name, icon }, index) => (
                  <li key={name} className="group">
                    <button 
                      onClick={() => handleLinkClick(name)}
                      className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-md ${clickedLinks.has(name) ? 'bg-purple-100 text-purple-700 scale-105' : 'hover:bg-slate-50'}`}
                      style={{transitionDelay: `${index * 100}ms`}}
                    >
                      <span className="text-lg transform group-hover:scale-125 transition-transform duration-300">
                        {icon}
                      </span>
                      <span className="text-sm font-medium flex-1">{name}</span>
                      <ArrowRight className={`w-4 h-4 transition-all duration-500 ${clickedLinks.has(name) ? 'text-purple-600 translate-x-2' : 'text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1'}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-8">
              <h4 className="font-semibold text-slate-800 text-lg border-b-2 border-slate-200 pb-3 flex items-center gap-2">
                Contact & Subscribe
                <Mail className="w-4 h-4 text-blue-600 animate-bounce" style={{animationDelay: '0.5s'}} />
              </h4>
              
              {/* Contact Info */}
              <ul className="space-y-4">
                <li className="group">
                  <button
                    onClick={() => copyToClipboard('anasraheem@webzics.com', 'email')}
                    className="w-full flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-500 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-active:scale-95 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-slate-800">Email</div>
                      <div className="text-xs text-slate-600">anasraheem@webzics.com</div>
                    </div>
                    <Copy className={`w-4 h-4 transition-all duration-500 ${copiedContact === 'email' ? 'text-green-600 scale-125' : 'text-slate-400 group-hover:text-blue-600'}`} />
                    
                    {copiedContact === 'email' && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-md animate-bounce">
                        Copied! ✓
                      </div>
                    )}
                  </button>
                </li>

                <li className="group">
                  <button
                    onClick={() => copyToClipboard('+92 346 2440356', 'phone')}
                    className="w-full flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-green-300 transition-all duration-500 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="p-3 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 group-active:scale-95 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-slate-800">Phone</div>
                      <div className="text-xs text-slate-600">+92 346 2440356</div>
                    </div>
                    <Copy className={`w-4 h-4 transition-all duration-500 ${copiedContact === 'phone' ? 'text-green-600 scale-125' : 'text-slate-400 group-hover:text-green-600'}`} />
                    
                    {copiedContact === 'phone' && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-md animate-bounce">
                        Copied! ✓
                      </div>
                    )}
                  </button>
                </li>

                <li className="group">
                  <button
                    onClick={() => copyToClipboard('Islamabad, Pakistan', 'location')}
                    className="w-full flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-300 transition-all duration-500 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
                  >
                    <div className="p-3 rounded-lg bg-pink-100 text-pink-600 group-hover:bg-pink-200 group-active:scale-95 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-slate-800">Location</div>
                      <div className="text-xs text-slate-600">Islamabad, Pakistan</div>
                    </div>
                    <Copy className={`w-4 h-4 transition-all duration-500 ${copiedContact === 'location' ? 'text-green-600 scale-125' : 'text-slate-400 group-hover:text-pink-600'}`} />
                    
                    {copiedContact === 'location' && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-green-600 text-white text-xs rounded-md animate-bounce">
                        Copied! ✓
                      </div>
                    )}
                  </button>
                </li>
              </ul>

              {/* Newsletter Signup */}
              <div className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                
                <h5 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  🎉 Stay Updated
                  {!isSubscribed && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full animate-pulse">
                      FREE
                    </span>
                  )}
                </h5>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for exclusive updates..."
                      className={`w-full px-4 py-4 text-sm border-2 rounded-xl outline-none transition-all duration-500 ${
                        isSubscribed 
                          ? 'bg-green-50 border-green-300 text-green-700' 
                          : email 
                            ? 'bg-blue-50 border-blue-300' 
                            : 'bg-white border-slate-200 hover:border-blue-300 focus:border-blue-400'
                      }`}
                      disabled={isSubscribed}
                    />
                    {isSubscribed && (
                      <CheckCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-600 animate-spin" />
                    )}
                  </div>
                  
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribed || !email}
                    className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                      isSubscribed 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isSubscribed ? (
                        <>
                          <CheckCircle className="w-5 h-5 animate-bounce" />
                          Successfully Subscribed! 🎉
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                    
                    {!isSubscribed && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-pulse"></div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-2 border-slate-200 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-600">
                <span className="font-medium">© 2025 Ayla. All rights reserved.</span>
                <div className="flex gap-6">
                  {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
                    <button 
                      key={link}
                      onClick={() => handleLinkClick(link)}
                      className={`transition-all duration-300 relative group ${clickedLinks.has(link) ? 'text-blue-600 scale-110' : 'hover:text-blue-600'}`}
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-slate-600 group cursor-default">
                <span>Made with</span>
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse group-hover:animate-bounce group-hover:scale-125 transition-all duration-500" />
                <span>for kids</span>
                <div className="text-lg animate-bounce" style={{animationDelay: '1s'}}>🇵🇰</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
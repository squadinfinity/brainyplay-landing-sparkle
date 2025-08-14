import { useState, useEffect } from 'react';
import { ArrowRight, Play, Brain, Shield, Clock, Smartphone, TrendingUp, Users, Eye, RefreshCw, Zap, Target } from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentStat, setCurrentStat] = useState(0);
  const [timeWasted, setTimeWasted] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const harmfulStats = [
    { value: "3.5hrs", label: "Daily Doom Scrolling", trend: "↗️" },
    { value: "150x", label: "Phone Checks/Day", trend: "⚠️" },
    { value: "40%", label: "Decreased Focus", trend: "📉" },
    { value: "2.5x", label: "Attention Issues", trend: "🚨" }
  ];

  const productiveStats = [
    { value: "50+", label: "Brain Games", icon: Brain },
    { value: "100+", label: "Educational Videos", icon: Play },
    { value: "15min", label: "Focused Sessions", icon: Clock },
    { value: "98%", label: "Parent Approval", icon: Shield }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % harmfulStats.length);
      setTimeWasted(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [harmfulStats.length]);

  const ParallaxElement = ({ children, x, y, speed = 0.01 }) => (
    <div
      className="absolute opacity-10 pointer-events-none transition-transform duration-300 ease-out hidden lg:block"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: isMobile ? 'none' : `translate(${mousePos.x * speed}px, ${mousePos.y * speed}px)`
      }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      
      {/* Subtle Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/3 via-transparent to-green-500/3" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Floating Background Elements - Hidden on mobile for performance */}
      <ParallaxElement x="10" y="20" speed={0.005}>
        <Smartphone size={150} className="text-red-300" />
      </ParallaxElement>
      <ParallaxElement x="85" y="25" speed={0.008}>
        <Brain size={120} className="text-green-400" />
      </ParallaxElement>
      <ParallaxElement x="15" y="75" speed={0.006}>
        <Eye size={100} className="text-red-300" />
      </ParallaxElement>
      <ParallaxElement x="80" y="80" speed={0.007}>
        <Target size={110} className="text-green-400" />
      </ParallaxElement>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] py-8 sm:py-12 lg:py-16">
          
          {/* Left Content - 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10 max-w-4xl">
            
            {/* Alert Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-red-50 border border-red-200 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-sm hover:shadow-md transition-all duration-300 max-w-full overflow-hidden">
              <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 whitespace-nowrap">Screen Time Crisis</span>
              </div>
              <div className="w-px h-3 sm:h-4 bg-red-300 flex-shrink-0" />
              <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                <RefreshCw size={14} className="text-red-600 animate-spin flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-red-700 truncate">
                  {timeWasted} seconds wasted today
                </span>
              </div>
            </div>

            {/* Main Headlines - Responsive Typography */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] text-gray-900">
                <span className="block">Stop</span>
                <span className="block text-red-600">Doom Scrolling</span>
                <span className="block">Start</span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Smart Learning
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-full" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Transform endless scrolling into 
                <span className="font-semibold text-gray-800"> productive screen time</span> with 
                <span className="font-semibold text-green-600"> mind games, educational videos,</span> and 
                <span className="font-semibold text-blue-600"> focused learning sessions</span> 
                designed for children aged 5-12.
              </p>
            </div>

            {/* Problem vs Solution Comparison - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
              {/* Problem Side */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="text-red-600 flex-shrink-0" size={20} />
                  <h3 className="font-bold text-red-800 text-sm sm:text-base">Current Reality</h3>
                </div>
                
                <div className="space-y-3">
                  <div 
                    key={currentStat}
                    className="bg-red-100 rounded-lg p-3 border border-red-200 animate-pulse"
                  >
                    <div className="text-lg sm:text-xl font-bold text-red-700 flex items-center gap-2">
                      <span className="truncate">{harmfulStats[currentStat].value}</span>
                      <span className="text-sm flex-shrink-0">{harmfulStats[currentStat].trend}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-red-600 font-medium">
                      {harmfulStats[currentStat].label}
                    </div>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-red-700 space-y-1">
                    <div>• Mindless scrolling addiction</div>
                    <div>• Decreased attention span</div>
                    <div>• Wasted potential learning time</div>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Brain className="text-green-600 flex-shrink-0" size={20} />
                  <h3 className="font-bold text-green-800 text-sm sm:text-base">Our Solution</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {productiveStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-green-100 rounded-lg p-2 sm:p-3 border border-green-200 text-center hover:bg-green-200 transition-colors duration-200"
                    >
                      <stat.icon size={16} className="text-green-600 mx-auto mb-1 flex-shrink-0" />
                      <div className="text-sm sm:text-base font-bold text-green-700">{stat.value}</div>
                      <div className="text-xs text-green-600 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs sm:text-sm text-green-700 space-y-1">
                  <div>✓ Engaging brain exercises</div>
                  <div>✓ Educational entertainment</div>
                  <div>✓ Productive screen time</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Fully Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px] sm:min-h-[56px]">
                <Shield size={18} className="flex-shrink-0" />
                <span className="truncate">Protect My Child Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </button>
              
              <button className="group bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl text-sm sm:text-base lg:text-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px] sm:min-h-[56px]">
                <Play size={18} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="truncate">See How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Content - 5 columns on large screens */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div 
              className="relative group max-w-md mx-auto lg:max-w-none"
              style={{
                transform: isMobile ? 'none' : `perspective(1000px) rotateY(${mousePos.x * 0.003}deg) rotateX(${mousePos.y * -0.003}deg)`
              }}
            >
              {/* Before/After Phone Comparison */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                
                {/* Phone Header */}
                <div className="bg-gray-900 p-3 sm:p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse" />
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full" />
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium">Child's Phone</div>
                    <div className="text-xs sm:text-sm">12:34 PM</div>
                  </div>
                </div>

                {/* Split Screen Content */}
                <div className="flex h-56 sm:h-72 md:h-80 lg:h-96">
                  {/* Before - Doom Scrolling */}
                  <div className="w-1/2 bg-red-50 border-r-2 border-red-200 p-2 sm:p-3 md:p-4 overflow-hidden">
                    <div className="text-center mb-2 sm:mb-3 md:mb-4">
                      <div className="text-xs sm:text-sm font-bold text-red-700">❌ Before</div>
                      <div className="text-xs text-red-600">Endless Scrolling</div>
                    </div>
                    
                    {/* Simulated Social Feed */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3 animate-scroll">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-white rounded-lg p-1.5 sm:p-2 md:p-3 border border-red-200 opacity-70">
                          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                            <div className="w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-gray-300 rounded-full flex-shrink-0" />
                            <div className="h-2 sm:h-3 bg-gray-300 rounded flex-1" />
                          </div>
                          <div className="h-8 sm:h-12 md:h-16 bg-gradient-to-r from-red-200 to-pink-200 rounded mb-1 sm:mb-2" />
                          <div className="space-y-0.5 sm:space-y-1">
                            <div className="h-1 sm:h-1.5 md:h-2 bg-gray-200 rounded w-full" />
                            <div className="h-1 sm:h-1.5 md:h-2 bg-gray-200 rounded w-3/4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After - Productive Learning */}
                  <div className="w-1/2 bg-green-50 p-2 sm:p-3 md:p-4">
                    <div className="text-center mb-2 sm:mb-3 md:mb-4">
                      <div className="text-xs sm:text-sm font-bold text-green-700">✅ After</div>
                      <div className="text-xs text-green-600">Smart Learning</div>
                    </div>
                    
                    {/* Learning Activities */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <div className="bg-white rounded-lg p-1.5 sm:p-2 md:p-3 border border-green-200">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                          <Brain size={10} className="text-blue-600 flex-shrink-0 sm:w-3 sm:h-3" />
                          <span className="text-xs font-semibold truncate">Math Puzzle</span>
                        </div>
                        <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="aspect-square bg-blue-100 rounded text-xs flex items-center justify-center font-bold text-blue-600">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-1.5 sm:p-2 md:p-3 border border-green-200">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                          <Play size={10} className="text-purple-600 flex-shrink-0 sm:w-3 sm:h-3" />
                          <span className="text-xs font-semibold truncate">Science Video</span>
                        </div>
                        <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded h-8 sm:h-10 md:h-16 flex items-center justify-center">
                          <Play size={12} className="text-purple-600 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-1.5 sm:p-2 md:p-3 border border-green-200">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Target size={10} className="text-green-600 flex-shrink-0 sm:w-3 sm:h-3" />
                          <span className="text-xs font-semibold truncate">Focus: 15min ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 p-2 sm:p-3">
                  <div className="flex justify-between text-xs">
                    <div className="text-red-600 font-semibold truncate">📉 -80% Mindless Time</div>
                    <div className="text-green-600 font-semibold truncate">📈 +200% Learning</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-red-500 rounded-full animate-pulse shadow-lg" />
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full animate-pulse shadow-lg" />
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-3 sm:w-5 h-3 sm:h-5 bg-blue-500 rounded-full animate-ping" />
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-3 sm:w-5 h-3 sm:h-5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Wave Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 fill-white/90">
          <path d="M0,40 C300,80 600,0 900,40 C1050,60 1150,20 1200,40 L1200,100 L0,100 Z" />
        </svg>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 6s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
import { Brain, Zap, Shield, Target, Users, Gamepad2, Play, Star, ArrowRight, Clock, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Features = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const videoCategories = [
    { title: "Brain Puzzles", icon: Brain, color: "from-purple-500 to-blue-500" },
    { title: "Creative Challenges", icon: Gamepad2, color: "from-green-500 to-teal-500" },
    { title: "Science Fun", icon: Zap, color: "from-orange-500 to-red-500" },
    { title: "Memory Games", icon: Target, color: "from-pink-500 to-purple-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoCategories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Safe & Ad-Free Environment</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Stop
                </span>
                <br />
                <span className="text-gray-800">Endless Scrolling</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Start Learning!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Transform your child's screen time into productive adventures with engaging mind games, educational videos, and creative challenges.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-center">
              <div className="bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Brain Games</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">Endless</div>
                <div className="text-sm text-gray-600">Opportunities</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-2xl font-bold text-green-600">Innovative</div>
                <div className="text-sm text-gray-600">Digital environment</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl border border-gray-200 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 from 100+ Experts</span>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            
            {/* Main Device Mockup */}
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              
              {/* Phone Frame */}
              <div className="bg-white rounded-[3rem] p-4 shadow-2xl border-8 border-gray-200 relative overflow-hidden">
                
                {/* Screen Content */}
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-[2rem] p-6 space-y-4 min-h-[600px] relative overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">Lumixcorp</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">15min left</span>
                    </div>
                  </div>

                  {/* Current Activity */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200">
                    <div className={`w-12 h-12 bg-gradient-to-r ${videoCategories[currentVideo].color} rounded-xl flex items-center justify-center mb-3 transform transition-all duration-500`}>
                      
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{videoCategories[currentVideo].title}</h3>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000" 
                           style={{ width: `${((currentVideo + 1) / videoCategories.length) * 100}%` }}></div>
                    </div>
                  </div>

                  {/* Quick Access Games */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Target, label: "Memory Match", color: "from-pink-400 to-purple-400" },
                      { icon: Zap, label: "Quick Math", color: "from-yellow-400 to-orange-400" },
                      { icon: Users, label: "Team Challenge", color: "from-green-400 to-teal-400" },
                      { icon: Gamepad2, label: "Logic Puzzle", color: "from-blue-400 to-indigo-400" }
                    ].map((game, index) => (
                      <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-md border border-gray-200 hover:scale-105 transition-transform cursor-pointer">
                        <div className={`w-8 h-8 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center mb-2`}>
                          <game.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{game.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 shadow-lg animate-bounce">
                    <Heart className="w-5 h-5 text-white" />
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center gap-2 pt-4">
                    {videoCategories.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentVideo ? 'bg-blue-500 w-8' : 'bg-gray-300'
                      }`}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl p-3 shadow-xl animate-float">
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -top-8 -right-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl p-3 shadow-xl animate-float delay-1000">
                <Zap className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -right-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl p-3 shadow-xl animate-float delay-2000">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float.delay-1000 {
          animation-delay: 1s;
        }
        .animate-float.delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Features;
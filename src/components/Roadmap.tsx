import { CheckCircle, Circle, Clock, Rocket, Shield, Brain, Users, Smartphone } from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Core Platform & Safety Foundation",
      status: "completed",
      timeline: "Q1 2025",
      description: "Built the secure foundation with essential brain games, robust parental controls, and comprehensive safety measures to protect children from harmful content.",
      features: ["25+ Brain Games", "Parental Controls", "Content Filtering", "User Safety System"],
      icon: Shield,
      progress: 100
    },
    {
      phase: "Phase 2", 
      title: "AI-Powered Smart Learning",
      status: "in-progress",
      timeline: "Q2 2025",
      description: "Implementing intelligent content curation and personalized learning paths to maximize educational value and minimize mindless consumption.",
      features: ["Smart Content Curation", "Adaptive Learning Paths", "Usage Analytics", "Focus Time Tracking"],
      icon: Brain,
      progress: 75
    },
    {
      phase: "Phase 3",
      title: "Family Ecosystem & Screen Time Management", 
      status: "upcoming",
      timeline: "Q3 2025",
      description: "Launching comprehensive family tools, advanced screen time controls, and real-time monitoring to help parents guide their children's digital habits.",
      features: ["Family Dashboard", "Screen Time Limits", "Real-time Monitoring", "Educational Reporting"],
      icon: Users,
      progress: 25
    },
    {
      phase: "Phase 4",
      title: "Mobile App & Full Launch",
      status: "planned",
      timeline: "Q4 2025",
      description: "Complete mobile experience with 50+ games, advanced AI personalization, and comprehensive tools to replace doom scrolling with productive learning.",
      features: ["Mobile Apps (iOS/Android)", "50+ Educational Games", "Advanced AI Features", "Social Learning Features"],
      icon: Smartphone,
      progress: 10
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-600 animate-pulse" />;
      case "upcoming":
        return <Circle className="w-6 h-6 text-purple-600" />;
      case "planned":
        return <Rocket className="w-6 h-6 text-gray-500" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50 shadow-green-100";
      case "in-progress":
        return "border-blue-200 bg-blue-50 shadow-blue-100";
      case "upcoming":
        return "border-purple-200 bg-purple-50 shadow-purple-100";
      case "planned":
        return "border-gray-200 bg-gray-50 shadow-gray-100";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "upcoming":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "planned":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "upcoming":
        return "bg-purple-500";
      case "planned":
        return "bg-gray-400";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Rocket size={16} className="text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Development Roadmap</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Building the Future of
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
              Productive Screen Time
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we develop comprehensive tools to transform mindless scrolling 
            into meaningful learning experiences for children worldwide.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {roadmapItems.map((item, index) => (
            <div key={index} className="text-center space-y-3 sm:space-y-4">
              <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-2xl flex items-center justify-center ${getStatusColor(item.status)}`}>
                <item.icon size={20} className={`${item.status === 'completed' ? 'text-green-600' : item.status === 'in-progress' ? 'text-blue-600' : item.status === 'upcoming' ? 'text-purple-600' : 'text-gray-500'}`} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-700">{item.phase}</div>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                  {item.status.replace('-', ' ').toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-gray-300 hidden lg:block opacity-30"></div>

          <div className="space-y-6 sm:space-y-8">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ 
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`
                }}
              >
                {/* Timeline Dot - Desktop */}
                <div className={`absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-white hidden lg:block z-10 ${getProgressColor(item.status)}`}></div>
                
                {/* Main Card */}
                <div className={`lg:ml-20 rounded-3xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group-hover:shadow-2xl ${getStatusColor(item.status)}`}>
                  
                  {/* Card Header */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          {getStatusIcon(item.status)}
                          <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                            {item.phase}
                          </span>
                          <span className="text-xs sm:text-sm bg-white/70 text-gray-700 px-3 py-1 rounded-full font-medium border">
                            {item.timeline}
                          </span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Progress Circle - Mobile/Tablet */}
                      <div className="sm:hidden flex-shrink-0">
                        <div className="relative w-16 h-16">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-200" />
                            <circle 
                              cx="32" 
                              cy="32" 
                              r="28" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="4" 
                              strokeDasharray={`${(item.progress / 100) * 175.93}, 175.93`}
                              className={item.status === 'completed' ? 'text-green-500' : item.status === 'in-progress' ? 'text-blue-500' : item.status === 'upcoming' ? 'text-purple-500' : 'text-gray-400'}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-700">{item.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 bg-white/60 rounded-lg px-3 sm:px-4 py-2 sm:py-3 border border-white/60 hover:bg-white/80 transition-colors duration-200">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getProgressColor(item.status)}`}></div>
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar - Desktop */}
                    <div className="hidden sm:block mt-6 sm:mt-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-600">Development Progress</span>
                        <span className="text-sm font-bold text-gray-700">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(item.status)}`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Transform Screen Time?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of families already using our platform to replace doom scrolling with productive learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                🚀 Get Early Access
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-300">
                📧 Stay Updated
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
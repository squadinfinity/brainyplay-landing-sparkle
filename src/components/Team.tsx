import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail, Users, Award, Target, ArrowRight, ChevronDown, ChevronUp, Star, Briefcase, Code, Palette, Brain, MapPin, Calendar, Sparkles, Crown, Trophy, Zap, Server, Database } from "lucide-react";
import { useState, useEffect } from "react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Dyne Asif",
      role: "Product Developer",
      bio: "Expert in user experience design and front-end development. Crafts intuitive interfaces that enhance learning experiences.",
      image: "src/assets/dyne.webp",
      primaryColor: "purple",
      gradients: {
        card: "from-purple-50/80 via-pink-50/60 to-white",
        accent: "from-purple-500 via-pink-500 to-purple-600",
        hover: "from-purple-100/90 via-pink-100/80 to-purple-50/90",
        glow: "shadow-purple-500/20"
      },
      skills: ["UI/UX Design", "React Development", "Child Psychology", "Accessibility"],
      experience: "1+ Years",
      department: "Product Design",
      icon: Palette,
      category: "design",
      rating: 5,
      projects: 12,
      badge: {
        type: "creative",
        icon: Sparkles,
        label: "Creative Genius",
        color: "from-purple-400 to-pink-500"
      },
      socials: {
        linkedin: "#",
        github: "#",
        email: "dyne@ayla.com"
      }
    },
    {
      name: "Anas Raheem",
      role: "Project Lead",
      bio: "Passionate about creating educational technology that makes a real difference. Drives Ayla's vision of transforming screen time into meaningful learning experiences.",
      image: "src/assets/anas.webp",
      primaryColor: "blue",
      gradients: {
        card: "from-blue-50/80 via-cyan-50/60 to-white",
        accent: "from-blue-500 via-cyan-500 to-blue-600",
        hover: "from-blue-100/90 via-cyan-100/80 to-blue-50/90",
        glow: "shadow-blue-500/20"
      },
      isLeader: true,
      skills: ["Product Strategy", "Team Leadership", "EdTech Innovation", "Stakeholder Management"],
      experience: "5+ Years",
      department: "Executive Leadership",
      icon: Crown,
      category: "leadership",
      rating: 5,
      projects: 60,
      badge: {
        type: "leader",
        icon: Crown,
        label: "Team Leader",
        color: "from-blue-400 via-cyan-400 to-blue-500"
      },
      socials: {
        linkedin: "#",
        github: "#",
        email: "anasraheem@ayla.com"
      }
    },
    {
      name: "Muhammad Kashir",
      role: "ML Engineer",
      bio: "Machine learning specialist focused on educational AI. Develops intelligent algorithms that personalize each child's learning journey.",
      image: "src/assets/kashir.webp",
      primaryColor: "emerald",
      gradients: {
        card: "from-emerald-50/80 via-teal-50/60 to-white",
        accent: "from-emerald-500 via-teal-500 to-emerald-600",
        hover: "from-emerald-100/90 via-teal-100/80 to-emerald-50/90",
        glow: "shadow-emerald-500/20"
      },
      skills: ["Machine Learning", "Python/TensorFlow", "Data Science", "AI Ethics"],
      experience: "3+ Years",
      department: "Engineering",
      icon: Brain,
      category: "engineering",
      rating: 5,
      projects: 24,
      badge: {
        type: "technical",
        icon: Zap,
        label: "Tech Innovator",
        color: "from-emerald-400 to-teal-500"
      },
      socials: {
        linkedin: "#",
        github: "#",
        email: "kashir@ayla.com"
      }
    },
    {
      name: "Dua Fatima",
      role: "Backend Developer",
      bio: "Scalable backend systems architect with expertise in cloud infrastructure and API development. Ensures robust, secure, and high-performance server-side solutions.",
      image: "/api/placeholder/400/400",
      primaryColor: "orange",
      gradients: {
        card: "from-orange-50/80 via-red-50/60 to-white",
        accent: "from-orange-500 via-red-500 to-orange-600",
        hover: "from-orange-100/90 via-red-100/80 to-orange-50/90",
        glow: "shadow-orange-500/20"
      },
      skills: ["Node.js/Express", "Database Design", "Cloud Architecture", "API Development"],
      experience: "4+ Years",
      department: "Backend Engineering",
      icon: Server,
      category: "engineering",
      rating: 5,
      projects: 38,
      badge: {
        type: "backend",
        icon: Database,
        label: "Backend Specialist",
        color: "from-orange-400 to-red-500"
      },
      socials: {
        linkedin: "#",
        github: "#",
        email: "dua@ayla.com"
      }
    }
  ];

  const filters = [
    { 
      key: 'all', 
      label: 'All Team', 
      icon: Users,
      count: teamMembers.length,
      gradient: "from-gray-400 to-gray-600"
    },
    { 
      key: 'leadership', 
      label: 'Leadership', 
      icon: Crown,
      count: teamMembers.filter(m => m.category === 'leadership').length,
      gradient: "from-blue-400 to-cyan-500"
    },
    { 
      key: 'design', 
      label: 'Design', 
      icon: Palette,
      count: teamMembers.filter(m => m.category === 'design').length,
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      key: 'engineering', 
      label: 'Engineering', 
      icon: Code,
      count: teamMembers.filter(m => m.category === 'engineering').length,
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        ring: 'ring-purple-100'
      },
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        ring: 'ring-blue-100'
      },
      emerald: {
        bg: 'bg-emerald-500',
        light: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        ring: 'ring-emerald-100'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200',
        ring: 'ring-orange-100'
      }
    };
    return colorMap[color];
  };

  return (
    <section id="team" className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-pink-200/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-r from-emerald-200/30 via-teal-200/20 to-cyan-200/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-emerald-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className={`text-center space-y-6 md:space-y-8 mb-12 md:mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Premium Hero Badge */}
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white/90 backdrop-blur-xl text-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
              <Users className="w-5 md:w-6 h-5 md:h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative flex flex-col items-center sm:items-start">
              <span className="text-base md:text-lg font-semibold">Meet Our Elite Team</span>
              <span className="text-xs md:text-sm text-gray-500">Transforming education through innovation</span>
            </div>
          </div>

          {/* Enhanced Title */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-black leading-tight text-gray-900 tracking-tight">
              The Visionaries Behind
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2 relative">
                Ayla's Revolution
                <div className="absolute -top-2 md:-top-4 right-0 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Our world-class team combines cutting-edge technology, creative brilliance, and educational expertise 
              to revolutionize how children learn and grow in the digital age.
            </p>
          </div>

          {/* Enhanced Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-6 px-2">
            {filters.map((filter, index) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group relative flex flex-col sm:flex-row items-center gap-2 md:gap-3 px-3 md:px-6 py-2.5 md:py-3.5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden text-sm md:text-base ${
                  activeFilter === filter.key
                    ? 'bg-white text-gray-900 shadow-2xl border-2 border-blue-200/50 scale-105'
                    : 'bg-white/70 text-gray-600 hover:bg-white hover:text-gray-900 shadow-lg border border-gray-200/30 hover:shadow-xl'
                }`}
              >
                {activeFilter === filter.key && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${filter.gradient} opacity-10`}></div>
                )}
                
                <div className={`relative w-6 md:w-8 h-6 md:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  activeFilter === filter.key 
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  <filter.icon className="w-3 md:w-4 h-3 md:h-4" />
                </div>
                
                <div className="relative flex flex-col items-center sm:items-start">
                  <span className="text-xs md:text-sm font-semibold">{filter.label}</span>
                  <span className="text-xs opacity-70">{filter.count} member{filter.count !== 1 ? 's' : ''}</span>
                </div>

                {activeFilter === filter.key && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Simplified Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {filteredMembers.map((member, index) => {
            const colors = getColorClasses(member.primaryColor);
            return (
              <Card 
                key={member.name}
                className={`group relative transition-all duration-700 cursor-pointer overflow-visible bg-white/90 backdrop-blur-xl border border-white/50 hover:border-gray-200/60 rounded-3xl ${
                  member.isLeader 
                    ? `shadow-2xl hover:shadow-3xl ${member.gradients.glow} ring-1 ring-blue-200/30` 
                    : `shadow-xl hover:shadow-2xl ${member.gradients.glow}`
                } hover:-translate-y-3 hover:scale-105 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.15 + 0.3}s`,
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <CardContent className="p-0 relative overflow-hidden">
                  {/* Image Container - Simplified */}
                  <div className="relative p-6 pb-4">
                    <div className="relative mx-auto w-28 h-28 mb-4">
                      {/* Animated border ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradients.accent} rounded-full p-1 animate-spin-slow`}>
                        <div className="w-full h-full bg-white rounded-full p-2">
                          <div className="w-full h-full rounded-full overflow-hidden shadow-xl ring-2 ring-white relative">
                            <img 
                              src={member.image} 
                              alt={`${member.name} - ${member.role}`}
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                hoveredMember === index ? 'scale-110' : 'scale-100'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Experience badge - Simplified */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-20">
                        <div className={`bg-gradient-to-r ${member.gradients.accent} text-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg`}>
                          {member.experience}
                        </div>
                      </div>
                    </div>
                    
                    {/* Specialty Badge - Kept as requested */}
                    <div className="absolute -top-1 -right-1 z-20">
                      <div className={`w-12 h-12 bg-gradient-to-r ${member.badge.color} rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 border-2 border-white/30`}>
                        <member.badge.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Simplified */}
                  <div className="px-6 pb-6 space-y-4">
                    {/* Name and Role */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-black text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-medium">{member.role}</p>
                      
                      <div className={`inline-flex items-center gap-2 text-xs font-bold ${colors.text} bg-white/90 px-3 py-1 rounded-lg shadow-sm border border-gray-200/30`}>
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${member.gradients.accent} rounded-full`}></div>
                        {member.department}
                      </div>
                    </div>

                    {/* Bio - Shortened */}
                    <p className="text-gray-700 text-sm text-center leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expanded Details - Simplified */}
                    {selectedMember === index && (
                      <div className="space-y-4 animate-fadeIn border-t border-gray-200/50 pt-4">
                        {/* Skills - Simplified */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-2 text-center">Core Skills</h4>
                          <div className="flex flex-wrap justify-center gap-2">
                            {member.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Stats - Simplified */}
                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div className="p-3 bg-gray-50 rounded-xl">
                            <div className={`text-2xl font-black bg-gradient-to-r ${member.gradients.accent} bg-clip-text text-transparent`}>
                              {member.projects}
                            </div>
                            <div className="text-xs text-gray-600">Projects</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-xl">
                            <div className="flex justify-center gap-1 mb-1">
                              {[...Array(member.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <div className="text-xs text-gray-600">Rating</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Footer - Simplified */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/40">
                      {/* Social Links - Simplified */}
                      <div className="flex gap-2">
                        {[
                          { icon: Linkedin, href: member.socials.linkedin, color: "text-blue-500 hover:bg-blue-50" },
                          { icon: Github, href: member.socials.github, color: "text-gray-600 hover:bg-gray-50" },
                          { icon: Mail, href: `mailto:${member.socials.email}`, color: "text-emerald-500 hover:bg-emerald-50" }
                        ].map(({ icon: Icon, href, color }, socialIndex) => (
                          <a 
                            key={socialIndex}
                            href={href} 
                            className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>

                      {/* Expand Button - Simplified */}
                      <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                        {selectedMember === index ? (
                          <>
                            Less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            More <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section - Kept as requested */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { number: "13+", label: "Years Combined Experience", icon: Award, gradient: "from-purple-400 via-pink-400 to-purple-500" },
            { number: "134+", label: "Projects Delivered", icon: Trophy, gradient: "from-blue-400 via-cyan-400 to-blue-500" },
            { number: "15K+", label: "Students Impacted", icon: Users, gradient: "from-emerald-400 via-teal-400 to-emerald-500" },
            { number: "99%", label: "Client Satisfaction", icon: Star, gradient: "from-yellow-400 via-orange-400 to-yellow-500" }
          ].map((stat, index) => (
            <div key={index} className="group text-center bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-2xl group-hover:scale-110 transition-all duration-500 bg-gradient-to-br ${stat.gradient} border-2 border-white/30`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative text-3xl font-black mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {stat.number}
              </div>
              
              <div className="relative text-gray-700 font-bold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Team;
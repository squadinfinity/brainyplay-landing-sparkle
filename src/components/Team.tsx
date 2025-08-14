import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail, Users, Award, Target, ArrowRight, ChevronDown, ChevronUp, Star, Briefcase, Code, Palette, Brain, MapPin, Calendar, Sparkles, Crown, Trophy, Zap } from "lucide-react";
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
      bio: "Expert in user experience design and front-end development. Crafts intuitive interfaces that enhance learning experiences, specializing in child-friendly design patterns and accessibility standards.",
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
      achievement: "Design Excellence Award",
      department: "Product Design",
      icon: Palette,
      category: "design",
      rating: 5,
      projects: 12,
      location: "New York, USA",
      joinDate: "Jan 2023",
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
      bio: "Passionate about creating educational technology that makes a real difference. With extensive experience in product management, drives Ayla's vision of transforming screen time into meaningful learning experiences.",
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
      achievement: "Innovation Leadership",
      department: "Executive Leadership",
      icon: Crown,
      category: "leadership",
      rating: 5,
      projects: 60,
      location: "San Francisco, USA",
      joinDate: "Mar 2021",
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
      bio: "Machine learning specialist focused on educational AI. Develops intelligent algorithms that personalize each child's learning journey, ensuring optimal challenge and engagement levels through data-driven insights.",
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
      achievement: "AI Innovation Expert",
      department: "Engineering",
      icon: Brain,
      category: "engineering",
      rating: 5,
      projects: 24,
      location: "London, UK",
      joinDate: "Aug 2022",
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
      }
    };
    return colorMap[color];
  };

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 via-purple-200/20 to-pink-200/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-200/30 via-teal-200/20 to-cyan-200/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-pink-200/20 via-orange-200/10 to-yellow-200/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-emerald-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Enhanced Header Section */}
        <div className={`text-center space-y-8 mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Premium Hero Badge */}
          <div className="relative inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl text-gray-800 px-8 py-4 rounded-2xl font-medium shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
              <Users className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative flex flex-col items-start">
              <span className="text-lg font-semibold">Meet Our Elite Team</span>
              <span className="text-sm text-gray-500">Transforming education through innovation</span>
            </div>
            
            <div className="relative flex gap-2 ml-4">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    i === 0 ? 'bg-blue-500' : 
                    i === 1 ? 'bg-purple-500' : 
                    i === 2 ? 'bg-emerald-500' : 'bg-pink-500'
                  }`}
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Title */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-7xl font-black leading-tight text-gray-900 tracking-tight">
              The Visionaries Behind
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block mt-2 relative">
                Ayla's Revolution
                <div className="absolute -top-4 right-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Our world-class team combines cutting-edge technology, creative brilliance, and educational expertise 
              to revolutionize how children learn and grow in the digital age.
            </p>
          </div>

          {/* Enhanced Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {filters.map((filter, index) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  activeFilter === filter.key
                    ? 'bg-white text-gray-900 shadow-2xl border-2 border-blue-200/50 scale-105'
                    : 'bg-white/70 text-gray-600 hover:bg-white hover:text-gray-900 shadow-lg border border-gray-200/30 hover:shadow-xl'
                }`}
              >
                {/* Active indicator gradient */}
                {activeFilter === filter.key && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${filter.gradient} opacity-10`}></div>
                )}
                
                <div className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  activeFilter === filter.key 
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}>
                  <filter.icon className="w-4 h-4" />
                </div>
                
                <div className="relative flex flex-col items-start">
                  <span className="text-sm font-semibold">{filter.label}</span>
                  <span className="text-xs opacity-70">{filter.count} member{filter.count !== 1 ? 's' : ''}</span>
                </div>

                {activeFilter === filter.key && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Team Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {filteredMembers.map((member, index) => {
            const colors = getColorClasses(member.primaryColor);
            return (
              <Card 
                key={member.name}
                className={`group relative transition-all duration-700 cursor-pointer overflow-visible bg-white/90 backdrop-blur-xl border border-white/50 hover:border-gray-200/60 rounded-3xl ${
                  member.isLeader 
                    ? `shadow-2xl hover:shadow-3xl ${member.gradients.glow} hover:shadow-2xl ring-1 ring-blue-200/30` 
                    : `shadow-xl hover:shadow-2xl ${member.gradients.glow}`
                } hover:-translate-y-4 hover:rotate-1 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.15 + 0.3}s`,
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <CardContent className="p-0 relative overflow-hidden">


                  {/* Enhanced Image Container */}
                  <div className="relative p-10 pb-6">
                    <div className="relative mx-auto w-52 h-52 mb-8">
                      {/* Animated border rings */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradients.accent} rounded-full p-1 animate-spin-slow`}>
                        <div className="w-full h-full bg-white rounded-full p-3">
                          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white relative">
                            <img 
                              src={member.image} 
                              alt={`${member.name} - ${member.role}`}
                              className={`w-full h-full object-cover transition-all duration-700 ${
                                hoveredMember === index ? 'scale-110 rotate-3' : 'scale-100'
                              }`}
                            />
                            {/* Subtle overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradients.accent} opacity-0 hover:opacity-20 transition-opacity duration-300`}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating role badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-white/95 backdrop-blur-xl text-gray-800 px-5 py-2.5 rounded-2xl text-sm font-bold shadow-xl flex items-center gap-2 border border-gray-200/30 group-hover:scale-110 transition-all duration-300">
                          <member.icon className="w-5 h-5 text-gray-600" />
                          
                          <div className={`w-2 h-2 bg-gradient-to-r ${member.gradients.accent} rounded-full animate-pulse`}></div>
                        </div>
                      </div>

                      {/* Experience badge */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className={`bg-gradient-to-r ${member.gradients.accent} text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-2xl border border-white/20 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer"></div>
                          <span className="relative">{member.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Specialty Badge */}
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className={`w-16 h-16 bg-gradient-to-r ${member.badge.color} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 border-2 border-white/30`}>
                        <member.badge.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className={`px-8 pb-8 space-y-6 transition-all duration-500 rounded-b-3xl relative overflow-hidden ${
                    selectedMember === index ? `bg-gradient-to-br ${member.gradients.hover}` : 'bg-white/95'
                  }`}>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Name and Department */}
                    <div className="relative space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-black text-gray-900">
                          {member.name}
                        </h3>
                        <div className={`w-4 h-4 bg-gradient-to-r ${member.gradients.accent} rounded-full animate-pulse`}></div>
                      </div>
                      
                      <div className={`inline-flex items-center gap-2 text-sm font-bold ${colors.text} bg-white/90 px-4 py-2 rounded-xl shadow-lg border border-gray-200/30`}>
                        <div className={`w-2 h-2 bg-gradient-to-r ${member.gradients.accent} rounded-full`}></div>
                        {member.department}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="relative text-gray-700 leading-relaxed font-medium">
                      {member.bio}
                    </p>

                    {/* Enhanced Quick Stats */}
                    <div className="relative flex items-center justify-between text-sm bg-white/60 rounded-xl p-3 border border-gray-200/30">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{member.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Since {member.joinDate}</span>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedMember === index && (
                      <div className="relative space-y-6 animate-fadeIn border-t border-white/60 pt-6">
                        {/* Skills with enhanced design */}
                        <div>
                          <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-3">
                            <div className={`w-8 h-8 bg-gradient-to-r ${member.gradients.accent} rounded-lg flex items-center justify-center`}>
                              <Target className="w-4 h-4 text-white" />
                            </div>
                            Core Expertise
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {member.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="group px-4 py-2.5 bg-white/95 text-gray-800 text-sm font-semibold rounded-xl border border-gray-200/40 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                              >
                                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradients.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <span className="relative">{skill}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Enhanced Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-6 bg-white/95 rounded-2xl border border-gray-200/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className={`text-4xl font-black bg-gradient-to-r ${member.gradients.accent} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                              {member.projects}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">Projects Completed</div>
                          </div>
                          <div className="text-center p-6 bg-white/95 rounded-2xl border border-gray-200/40 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="flex justify-center gap-1 mb-3 group-hover:scale-110 transition-transform duration-300">
                              {[...Array(member.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold">Excellence Rating</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Enhanced Footer */}
                    <div className="relative flex items-center justify-between pt-6 border-t border-gray-200/40">
                      {/* Social Links with enhanced design */}
                      <div className="flex gap-3">
                        {[
                          { icon: Linkedin, href: member.socials.linkedin, color: "bg-blue-50 hover:bg-blue-500 text-blue-500 hover:text-white" },
                          { icon: Github, href: member.socials.github, color: "bg-gray-50 hover:bg-gray-800 text-gray-600 hover:text-white" },
                          { icon: Mail, href: `mailto:${member.socials.email}`, color: "bg-emerald-50 hover:bg-emerald-500 text-emerald-500 hover:text-white" }
                        ].map(({ icon: Icon, href, color }, socialIndex) => (
                          <a 
                            key={socialIndex}
                            href={href} 
                            className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl border border-gray-200/30`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>

                      {/* Enhanced Expand Button */}
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 px-4 py-2.5 rounded-xl hover:bg-white/80 font-semibold border border-gray-200/30 hover:border-gray-300/50 hover:shadow-lg">
                        {selectedMember === index ? (
                          <>
                            Show Less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Explore More <ChevronDown className="w-4 h-4" />
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

        {/* Enhanced Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { number: "12+", label: "Years Combined Experience", icon: Award, gradient: "from-purple-400 via-pink-400 to-purple-500", textColor: "text-purple-600" },
            { number: "96+", label: "Projects Delivered", icon: Trophy, gradient: "from-blue-400 via-cyan-400 to-blue-500", textColor: "text-blue-600" },
            { number: "10K+", label: "Students Impacted", icon: Users, gradient: "from-emerald-400 via-teal-400 to-emerald-500", textColor: "text-emerald-600" },
            { number: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-yellow-400 via-orange-400 to-yellow-500", textColor: "text-yellow-600" }
          ].map((stat, index) => (
            <div key={index} className="group text-center bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 bg-gradient-to-br ${stat.gradient} border-2 border-white/30`}>
                <stat.icon className="w-10 h-10 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
              </div>
              
              <div className={`relative text-5xl font-black mb-3 ${stat.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              
              <div className="relative text-gray-700 font-bold text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Animations and Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.85) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-slideUp {
          animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        /* Enhanced hover effects */
        .group:hover .animate-spin-slow {
          animation-duration: 3s;
        }
        
        /* Glassmorphism effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        /* Custom shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Enhanced focus states for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export default Team;
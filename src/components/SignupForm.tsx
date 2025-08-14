import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, Baby, ArrowRight, CheckCircle, Shield, Gift, Bell, AlertCircle } from "lucide-react";

const Features = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    childAge: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_u1u15bl';
  const EMAILJS_TEMPLATE_ID = 'template_razpile';
  const EMAILJS_PUBLIC_KEY = 'gKptc1k1ECBbefqyG';

  const handleSubmit = async () => {
    if (!isFormValid || isLoading) return;
    
    setIsLoading(true);
    setError("");

    try {
      // Load EmailJS script if not already loaded
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          sendEmail();
        };
        document.head.appendChild(script);
      } else {
        await sendEmail();
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setError("Failed to join waitlist. Please try again.");
      setIsLoading(false);
    }
  };

  const sendEmail = async () => {
    try {
      // Initialize EmailJS with your public key
      if (!window.emailjs.init) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }

      // Prepare template parameters
      const templateParams = {
        parent_name: formData.parentName,
        email: formData.email,
        child_age: formData.childAge,
        to_name: formData.parentName,
        to_email: formData.email,
        reply_to: formData.email,
        timestamp: new Date().toLocaleString(),
      };

      // Send email
      const result = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Success:', result);
      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError("Failed to join waitlist. Please check your connection and try again.");
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const isFormValid = formData.parentName && formData.email && formData.childAge;

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Celebration Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <Card className="text-center p-8 shadow-2xl border-2 border-green-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            {/* Success Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 animate-pulse"></div>
            
            <CardContent className="space-y-8 relative z-10">
              {/* Success Icon */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto animate-ping opacity-20"></div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    🎉 You're In!
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Welcome to the <strong>Luxim</strong> family! We'll keep you updated on our progress and notify you as soon as we're ready to launch.
                  </p>
                </div>

                {/* What's Next Section */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-purple-600" />
                    What's Next?
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Bell className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Early Access</p>
                      <p className="text-xs text-gray-600">Be first to try new features</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Gift className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Special Offers</p>
                      <p className="text-xs text-gray-600">Exclusive launch discounts</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Priority Support</p>
                      <p className="text-xs text-gray-600">Direct line to our team</p>
                    </div>
                  </div>
                </div>

                {/* User Info Display */}
                <div className="bg-white/60 rounded-2xl p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    📧 Updates will be sent to <strong>{formData.email}</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
            <Shield className="w-4 h-4" />
            Limited Early Access
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
            Be the first to know when <strong>Luxim</strong> launches and get exclusive early access to transform your child's screen time!
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-blue-600">2,847</div>
              <div className="text-sm text-gray-600">Families Waiting</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-transparent hover:border-purple-300 bg-white/90 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <CardHeader className="text-center relative z-10">
            <CardTitle className="text-3xl font-bold text-gray-800">Reserve Your Spot</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Join thousands of families already on our waitlist ✨
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="parentName" className="text-base font-semibold flex items-center gap-2 text-gray-700">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    Parent/Guardian Name
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full h-14 px-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-semibold flex items-center gap-2 text-gray-700">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-14 px-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="childAge" className="text-base font-semibold flex items-center gap-2 text-gray-700">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Baby className="w-4 h-4 text-pink-600" />
                    </div>
                    Child's Age
                  </label>
                  <input
                    id="childAge"
                    name="childAge"
                    type="number"
                    min="3"
                    max="15"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    placeholder="How old is your child?"
                    required
                    className="w-full h-14 px-4 rounded-2xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                  />
                </div>
              </div>

              <button
                type="button" 
                disabled={!isFormValid || isLoading}
                onClick={handleSubmit}
                className={`w-full h-14 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${
                  isFormValid && !isLoading
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="text-center space-y-3 pt-2">
                <div className="flex justify-center items-center gap-6 text-sm font-medium">
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Early Access
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Exclusive Content
                  </div>
                  <div className="flex items-center gap-2 text-purple-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Zero Spam
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
                              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">GDPR Compliant • Ad-Free Environment • Child Safe</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Features;
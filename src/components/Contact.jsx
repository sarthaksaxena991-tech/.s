import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUp, Sparkles, MessageSquare, Info } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactInfo, personalInfo } from '../data/portfolio';
import Toast from './Toast';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email).then(() => {
      setCopied(true);
      triggerToast('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      triggerToast('Please fill in required fields.');
      return;
    }

    // Direct genuine mailto submission
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    triggerToast('Opening your email client to send message...');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#08090E]">
      {/* Ambient Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#10E79D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#10E79D] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {contactInfo.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            {contactInfo.subheading}
          </p>
        </div>

        {/* Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Direct Connection Cards (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl bg-[#0F111A] border border-white/10 hover:border-white/20 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10E79D]/10 border border-[#10E79D]/20 flex items-center justify-center text-[#10E79D]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10E79D]" />
                      <span className="text-[#10E79D]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-[#10E79D] transition-colors break-all"
              >
                {contactInfo.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click to compose in default client or use the copy button.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub Link Card */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Profile</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white group-hover:text-[#10E79D] transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  Explore repositories
                </p>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Network</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  Connect professionally
                </p>
              </a>

            </div>

            {/* Status / Availability Notice */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
              <span className="text-slate-300 font-medium block mb-1">
                📍 Location & Active Focus
              </span>
              <span>Based in Bhopal, India. Dedicated to MCA studies at VIT Bhopal University and practical software engineering.</span>
            </div>

          </div>

          {/* Right Column: Transparent Functional Message Composer (Col 6-12) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0F111A] border border-white/10 shadow-xl">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400">
                Draft an inquiry directly. This form opens your system's default email client with your message pre-populated.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10E79D] focus:ring-1 focus:ring-[#10E79D] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10E79D] focus:ring-1 focus:ring-[#10E79D] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project collaboration, query, or greeting"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10E79D] focus:ring-1 focus:ring-[#10E79D] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea, technical discussion, or project..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10E79D] focus:ring-1 focus:ring-[#10E79D] transition-colors resize-none"
                />
              </div>

              {/* Form Submission Mechanism Disclosure */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2 text-xs text-slate-400">
                <Info className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>
                  Uses client-side dispatch (<code className="text-[#10E79D] font-mono">mailto:</code>). For automated background delivery, EmailJS or Formspree endpoints can be plugged in easily.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider bg-[#10E79D] text-black hover:bg-[#10E79D]/90 transition-all shadow-md shadow-[#10E79D]/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Back To Top Control */}
        <div className="flex justify-center pt-6 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#10E79D]" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>

      <Toast message={toastMessage} visible={showToast} />
    </section>
  );
}

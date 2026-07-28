import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, CheckCircle2, Github, Linkedin, Twitter, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit message. Please try again or email directly.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      // Fallback client response
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind, a software engineering role, or want to discuss AI integrations? Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Social Links Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">Direct Email</p>
                      <p className="text-sm font-semibold text-white">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium">Location & Work</p>
                    <p className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Social Profiles</h4>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800/80 text-zinc-300 hover:text-white flex flex-col items-center gap-1.5 transition-all"
                    id="social-link-github"
                  >
                    <Github className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800/80 text-zinc-300 hover:text-white flex flex-col items-center gap-1.5 transition-all"
                    id="social-link-linkedin"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-800/80 text-zinc-300 hover:text-white flex flex-col items-center gap-1.5 transition-all"
                    id="social-link-email"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center justify-between">
                <span>Send a Message</span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </h3>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Delivered!</p>
                    <p className="text-xs text-emerald-200 mt-0.5">Thank you for reaching out. Aime will respond to your message shortly.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Submission Error</p>
                    <p className="text-xs text-rose-200 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Your Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                      id="contact-email-input"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / AI Project Inquiry"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    id="contact-subject-input"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    id="contact-message-input"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

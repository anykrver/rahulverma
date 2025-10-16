import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const validateEmail = (email) =>
  /^\S+@\S+\.\S+$/.test(email);

export default function ContactFormPopup({ open, onClose, onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!form.message.trim()) newErrors.message = 'Project details are required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm(initialState);
      if (onSubmit) onSubmit(form);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in">
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 animate-popup-open">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Let's Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              className={`w-full px-5 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition shadow-sm`}
              value={form.name}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className={`w-full px-5 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition shadow-sm`}
              value={form.email}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              className={`w-full px-5 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition shadow-sm`}
              value={form.phone}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company/Website (optional)"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition shadow-sm"
              value={form.company}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Project Details / Message*"
              rows={4}
              className={`w-full px-5 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 transition shadow-sm resize-none`}
              value={form.message}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 group"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-500 text-center mt-2">Message sent! Thank you.</p>}
        </form>
      </div>
      <style>{`
        @keyframes popup-open {
          0% { transform: scale(0.95) translateY(40px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-popup-open {
          animation: popup-open 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
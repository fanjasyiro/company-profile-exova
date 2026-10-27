'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData, ContactFormErrors } from '@/types';

interface ContactFormProps {
  className?: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama minimal 2 karakter';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format alamat email tidak valid (contoh: nama@perusahaan.com)';
    }

    // Phone validation (optional, but if filled should be reasonable)
    if (formData.phone.trim() && formData.phone.trim().length < 8) {
      newErrors.phone = 'Nomor telepon minimal 8 digit';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Pesan terlalu pendek, mohon jelaskan minimal 15 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Dummy submission simulation (no backend as specified in issue requirements)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div
        className={`p-8 sm:p-10 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col items-center text-center justify-center min-h-[460px] ${className}`}
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Pesan Berhasil Terkirim!</h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mb-8 leading-relaxed">
          Terima kasih telah menghubungi Exova Technology. Konsultan enterprise kami telah menerima
          pesan Anda dan akan menghubungi kembali dalam waktu 1x24 jam kerja.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs"
        >
          Kirim Pesan Lainnya
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-sm space-y-5 ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Nama Lengkap <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alexander Pratama"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Email Bisnis <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. alex@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Nomor Telepon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +62 812 3456 7890"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
            }`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            Nama Perusahaan
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. PT Maju Digital Nusantara"
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="message" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
            Pesan / Kebutuhan Proyek <span className="text-rose-500">*</span>
          </label>
          <span className="text-xs text-muted-foreground font-mono">
            {formData.message.length} kar
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ceritakan mengenai kebutuhan transformasi digital, modernisasi sistem, atau proyek yang ingin Anda kembangkan bersama Exova..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y min-h-[120px] ${
            errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-border focus:border-primary'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Mengirim Pesan...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

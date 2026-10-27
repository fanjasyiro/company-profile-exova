import React from 'react';
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';
import { ContactInfoData } from '@/types';

interface ContactInfoProps {
  info: ContactInfoData;
  className?: string;
}

export function ContactInfo({ info, className = '' }: ContactInfoProps) {
  return (
    <div className={`flex flex-col justify-between space-y-8 ${className}`}>
      <div>
        <div className="space-y-6">
          {/* Office Address */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                Kantor Pusat
              </h4>
              <p className="text-foreground/90 font-medium text-base leading-snug">
                {info.address.suite}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {info.address.street}, {info.address.city} {info.address.postalCode},{' '}
                {info.address.country}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                Email Korespondensi
              </h4>
              <a
                href={`mailto:${info.email}`}
                className="text-foreground/90 hover:text-primary transition-colors text-base font-medium inline-block"
              >
                {info.email}
              </a>
              <p className="text-muted-foreground text-xs mt-0.5">
                Tim enterprise kami merespons dalam 1x24 jam kerja
              </p>
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                Telepon & Direct Call
              </h4>
              <a
                href={`tel:${info.phone.replace(/[^0-9+]/g, '')}`}
                className="text-foreground/90 hover:text-primary transition-colors text-base font-medium inline-block"
              >
                {info.phone}
              </a>
              {info.whatsapp && (
                <p className="text-muted-foreground text-xs mt-0.5">
                  WhatsApp: <span className="text-foreground/80 font-medium">{info.whatsapp}</span>
                </p>
              )}
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">
                Jam Operasional
              </h4>
              <p className="text-foreground/90 font-medium text-base">
                {info.businessHours.days}
              </p>
              <p className="text-muted-foreground text-sm">
                {info.businessHours.hours} {info.businessHours.timezone} (Hari Kerja)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Card / Placeholder */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xs group">
        <div className="relative h-48 sm:h-56 w-full bg-muted/40">
          {info.embedMapUrl ? (
            <iframe
              src={info.embedMapUrl}
              title="Lokasi Kantor Exova Technology"
              aria-label="Peta Google Maps Lokasi Kantor Exova"
              className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-radial from-card to-muted">
              <MapPin className="w-8 h-8 text-primary mb-2 animate-bounce" />
              <p className="text-sm font-medium text-foreground">Kawasan SCBD, Jakarta Selatan</p>
              <p className="text-xs text-muted-foreground">Google Maps Preview</p>
            </div>
          )}

          {/* Badge & External link button */}
          <div className="absolute bottom-3 right-3 z-10">
            <a
              href={info.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md text-foreground text-xs font-medium border border-border shadow-xs hover:bg-primary hover:text-white transition-colors"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ContactInfoData } from '@/types';

export const contactInfo: ContactInfoData = {
  address: {
    street: 'Jl. Jend. Sudirman Kav. 52-53, SCBD',
    suite: 'Exova Technology Tower, Lantai 18',
    city: 'Jakarta Selatan',
    postalCode: '12190',
    country: 'Indonesia',
  },
  email: 'contact@exova.id',
  phone: '+62 (21) 5208-900',
  whatsapp: '+62 811-8899-770',
  businessHours: {
    days: 'Senin — Jumat',
    hours: '08:30 — 17:30',
    timezone: 'WIB',
  },
  mapsUrl: 'https://maps.google.com/?q=SCBD+Jakarta+Selatan',
  embedMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2736173004523!2d106.80802707579737!3d-6.227607761005844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15033c56a31%3A0xe54c4ccba968ce12!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
};

export function getContactInfo(): ContactInfoData {
  return contactInfo;
}

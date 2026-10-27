export interface ContactInfoData {
  address: {
    street: string;
    suite: string;
    city: string;
    postalCode: string;
    country: string;
  };
  email: string;
  phone: string;
  whatsapp?: string;
  businessHours: {
    days: string;
    hours: string;
    timezone: string;
  };
  mapsUrl: string;
  embedMapUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

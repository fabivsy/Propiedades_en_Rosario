export const validatePhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Basic validation rules:
  // 1. International numbers (with or without + prefix)
  // 2. Must be between 8 and 15 digits (international standard)
  // 3. Can start with country code (optional)
  
  // If it's too short or too long, it's invalid
  if (cleaned.length < 8 || cleaned.length > 15) {
    return false;
  }

  // Check if it's a valid phone number format
  // This regex allows:
  // - Optional + prefix
  // - Optional country code (1-3 digits)
  // - Main number (8-12 digits)
  const phoneRegex = /^(?:\+)?(?:[0-9]{1,3})?[0-9]{8,12}$/;
  return phoneRegex.test(cleaned);
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  // If it starts with +, preserve it
  const hasPlus = phone.startsWith('+');
  
  // Format based on length
  if (cleaned.length <= 10) {
    // Local number format: XXX XXX-XXXX
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else {
    // International number format: +XX XXX XXX-XXXX
    const countryCode = cleaned.slice(0, cleaned.length - 10);
    const rest = cleaned.slice(cleaned.length - 10);
    return `${hasPlus ? '+' : ''}${countryCode} ${rest.slice(0, 3)} ${rest.slice(3, 6)}-${rest.slice(6)}`;
  }
};
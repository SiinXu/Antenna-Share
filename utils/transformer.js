import { encode, decode } from "js-base64";

const sanitizeString = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
};

const sanitizeObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }

  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value);
    } else if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};

export const encodeData = (obj) => {
  try {
    const sanitizedObj = sanitizeObject(obj);
    return encode(JSON.stringify(sanitizedObj));
  } catch (error) {
    console.error('Error encoding data:', error);
    return '';
  }
};

export const decodeData = (base64) => {
  try {
    if (!base64) return null;
    const decoded = decode(base64);
    const parsed = JSON.parse(decoded);
    return sanitizeObject(parsed);
  } catch (error) {
    console.error('Error decoding data:', error);
    return null;
  }
};

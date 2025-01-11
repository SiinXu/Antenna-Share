export const encodeData = (data) => {
  try {
    const jsonStr = JSON.stringify(data);
    const base64 = btoa(encodeURIComponent(jsonStr));
    return base64;
  } catch (error) {
    console.error('Error encoding data:', error);
    throw error;
  }
};

export const decodeData = (base64) => {
  try {
    const jsonStr = decodeURIComponent(atob(base64));
    const data = JSON.parse(jsonStr);
    return data;
  } catch (error) {
    console.error('Error decoding data:', error);
    throw error;
  }
};

export const isSafariBrowser = () => {
  return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
}

export const isChromeBrowser = () => {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}

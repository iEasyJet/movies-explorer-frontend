function isWindowListener(width, setWidth, setShowMore, setPlusNumber) {
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  if (width >= 1280) {
    setShowMore(12);
    setPlusNumber(3);
  } 
  if (width >= 768) {
    setShowMore(8);
    setPlusNumber(2);
  } 
  if (width > 320) {
    setShowMore(5);
    setPlusNumber(1);
  }
}

export default isWindowListener;

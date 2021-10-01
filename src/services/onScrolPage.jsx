export const onScrollPage = page => {
  if (page > 1) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
};

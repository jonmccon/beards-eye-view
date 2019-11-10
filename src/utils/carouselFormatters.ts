const carouselFormatters = {
  getAltText: ({ data, index }: { data: { caption: string }; index: number }) =>
    data.caption || `${index + 1}. picture`,

  getNextLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Show me ${currentIndex + 2}. picture of ${views.length} of`,
  getPrevLabel: ({
    currentIndex,
    views,
  }: {
    currentIndex: number;
    views: { [key: string]: any }[];
  }) => `Show me ${currentIndex}. picture of ${views.length} of`,

  getNextTitle: () => 'Next (right arrow)',
  getPrevTitle: () => 'Previous (left arrow)',

  getCloseLabel: () => 'Close (esc)',
  getFullscreenLabel: ({ isFullscreen }: { isFullscreen: boolean }) =>
    isFullscreen ? 'Exit fullscreen (f)' : 'Switch to fullscreen(f)',
};

export default carouselFormatters;

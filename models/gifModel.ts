type GifModel = {
  id: string;
  title: string;
  rating: string;
  images: {
    original: {
      height: string;
      width: string;
      url: string;
      mp4: string;
      webp: string;
    };
    downsized: {
      height: string;
      width: string;
      url: string;
    };
  };
};

export default GifModel;

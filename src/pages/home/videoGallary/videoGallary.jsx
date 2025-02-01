import TitleOne from "@/components/shared/titleOne/titleOne";

const videoData = [
  {
    id: "1",
    name: "Math Videos",
    link: "https://youtu.be/Jc4gplDQQU8",
  },
  {
    id: "2",
    name: "Math Videos",
    link: "https://youtu.be/TpbVSL6W8mU",
  },
  {
    id: "3",
    name: "Math Videos",
    link: "https://youtu.be/rzP_EfzrzTI",
  },
];

const VideoGallery = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <TitleOne title={"ভিডিও"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoData.map((video) => {
          const embedUrl = video.link.replace(
            "youtu.be/",
            "youtube.com/embed/"
          );

          return (
            <div key={video.id} className="video-container">
              <iframe
                className="rounded-lg"
                width="360"
                height="200"
                src={embedUrl}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoGallery;

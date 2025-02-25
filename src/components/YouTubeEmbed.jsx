const YouTubeEmbed = ({ videoId }) => {
    return (
      <div className="flex justify-center">
        <iframe
          width="935"
          height="526"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeEmbed;
  
const YouTubeShort = ({ url }) => {
    // Extract the video ID from a Shorts URL
    const videoId = url.split("/shorts/")[1]?.split("?")[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 200, // smaller width for more compact display
          aspectRatio: "9 / 16", // keeps vertical format
        }}
      >
        <iframe
          src={`${embedUrl}?modestbranding=1&rel=0`}
          title="YouTube Short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: 12,
          }}
        />
      </div>
    );
  }
  
export default YouTubeShort
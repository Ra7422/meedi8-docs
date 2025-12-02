import React from 'react';

interface VideoEmbedProps {
  youtubeId: string;
  title?: string;
  caption?: string;
}

export default function VideoEmbed({
  youtubeId,
  title = "Video Tutorial",
  caption
}: VideoEmbedProps) {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && (
        <p className="video-caption">{caption}</p>
      )}
    </div>
  );
}

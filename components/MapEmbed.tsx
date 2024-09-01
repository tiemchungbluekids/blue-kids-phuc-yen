// components/MapEmbed.tsx

import React from 'react';

interface MapEmbedProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ src, width = '100%', height = '450' }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapEmbed;
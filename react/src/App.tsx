import { PremiumPlayer } from '@blendvision/player/react'
import './App.css'
import { useMemo } from 'react';


// Option 1: Define source outside the component (static, avoids re-renders)
const staticVideoSources = [
  {
    type: 'application/dash+xml',
    src: 'https://d2mxta927rohme.cloudfront.net/sample/video/vod/dash.mpd',
  },
  {
    type: 'application/x-mpegurl',
    src: 'https://d2mxta927rohme.cloudfront.net/sample/video/vod/hls.m3u8',
  },
];

function App() {
  // Option 2: Dynamic source using useMemo (prevents re-creation unless dependencies change)
  const memoizedVideoSources = useMemo(() => [
    {
      type: 'application/dash+xml',
      src: 'https://d2mxta927rohme.cloudfront.net/sample/video/vod/dash.mpd',
    },
    {
      type: 'application/x-mpegurl',
      src: 'https://d2mxta927rohme.cloudfront.net/sample/video/vod/hls.m3u8',
    },
  ], []); // Empty dependency array ensures memoization

  // Toggle between the two approaches depending on your use case
  const useStaticSource = true;
  const selectedSource = useStaticSource ? staticVideoSources : memoizedVideoSources;

  return (
    <PremiumPlayer
      title="BlendVision One"
      source={selectedSource}
    // license is optional in local development, make sure to add it before deploying to your domain.
    // license="your-license-key"
    />
  )
}

export default App

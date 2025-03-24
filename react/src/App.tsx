import { PremiumPlayer } from "@blendvision/player/react";
import "./App.css";
import { useMemo } from "react";

//+-----------------------------------------------------------------+
//| 🚀 MPEG-DASH Playback URL
//+-----------------------------------------------------------------+
// To load this content into your player SDK, use the following URL as the source URL
// Resolution: 720P, 480P, 360P, 240P

// https://d2j1h4umoqg4za.cloudfront.net/out/v1/6b17a1e872cd4c44b4eca200fb7236f1/index.mpd

//+-----------------------------------------------------------------+
//| 🚀 HLS Playback URL
//+-----------------------------------------------------------------+
// To load this content into your player SDK, use the following URL as the source URL
// Resolution: 720P, 480P, 360P, 240P

// https://d2j1h4umoqg4za.cloudfront.net/out/v1/a169566f9a0847158e25c532c20303b4/index.m3u8

//+-----------------------------------------------------------------+
//| 🚀 License Key
//+-----------------------------------------------------------------+
// Initialize the SDK with your License Key
// Please note that each license key is unique and tied to your organization. Sharing or distributing your license key is strictly prohibited and may result in revocation of your license

// 446a42ce-4441-46db-b7f0-6669b41da92b

//+-----------------------------------------------------------------+
//| 🚀 DRM URL
//+-----------------------------------------------------------------+
// License Request URL
// https://drm.platform.blendvision.com/api/v3/drm/license

// Fairplay Certificate URL
// https://drm.platform.blendvision.com/api/v3/drm/license/fairplay_cert

// Option 1: Define source outside the component (static, avoids re-renders)
const staticVideoSources = [
  {
    type: "application/dash+xml",
    src: "https://d2j1h4umoqg4za.cloudfront.net/out/v1/6b17a1e872cd4c44b4eca200fb7236f1/index.mpd",
  },
  {
    type: "application/x-mpegurl",
    src: "https://d2j1h4umoqg4za.cloudfront.net/out/v1/a169566f9a0847158e25c532c20303b4/index.m3u8",
  },
];

function App() {
  // Option 2: Dynamic source using useMemo (prevents re-creation unless dependencies change)
  const memoizedVideoSources = useMemo(
    () => [
      {
        type: "application/dash+xml",
        src: "https://d2j1h4umoqg4za.cloudfront.net/out/v1/6b17a1e872cd4c44b4eca200fb7236f1/index.mpd",
      },
      {
        type: "application/x-mpegurl",
        src: "https://d2j1h4umoqg4za.cloudfront.net/out/v1/a169566f9a0847158e25c532c20303b4/index.m3u8",
      },
    ],
    []
  ); // Empty dependency array ensures memoization

  // Toggle between the two approaches depending on your use case
  const useStaticSource = true;
  const selectedSource = useStaticSource
    ? staticVideoSources
    : memoizedVideoSources;

  return (
    <PremiumPlayer
      title="BlendVision One"
      source={selectedSource}
      // license is optional in local development, make sure to add it before deploying to your domain.
      // license="your-license-key"
    />
  );
}

export default App;

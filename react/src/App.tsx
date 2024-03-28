import {PremiumPlayer} from '@blendvision/player/react'
import './App.css'

function App() {

  return (
    <PremiumPlayer
      title="BlendVision One"
      source={[
        {
          type: 'application/dash+xml',
          src: 'https://d2mxta927rohme.cloudfront.net/376c618f-b27a-4a3d-9457-ad7076ee87e3/vod/dea931c3-8766-477d-a87b-1c3f91490139/vod/dash.mpd',
        },
        {
          type: 'application/x-mpegurl',
          src: 'https://d2mxta927rohme.cloudfront.net/376c618f-b27a-4a3d-9457-ad7076ee87e3/vod/dea931c3-8766-477d-a87b-1c3f91490139/vod/hls.m3u8',
        },
      ]}
    // license is optional in local development, make sure to add it before deploying to your domain.
    // license="your-license-key"
    />
  )
}

export default App

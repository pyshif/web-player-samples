# Playerback API Sample App - React

This React / next.js sample app demonstrates how to integrate with BlendVision One Playback API, get playback info and play with the player component provided by the player SDK.

You may also refer to BlendVision <a href="https://developers.blendvision.com/docs/player/web-sdk/quick-start" target="_blank"> Getting Started</a> integration guide.



## DRM Integration

DRM integration is also included in this sample app, this part is required if you want to use DRM protected stream.

> [!Important]  
> License requests accept `x-custom-data` header instead.

If you are not using BV One player SDK, please refer to this [guide](https://developers.blendvision.com/docs/content-protection/drm-license) for request BlendVision DRM license.

## How to Run this Sample App

- Clone this repository
- Install dependencies: `yarn` or `npm install`
- Specify API host by `API_HOST` variable of `src/getStreamManifestUrs.js`
- Replace `apiKey`, `origId`, you may create one in [BlendVison console](https://app.one.blendvision.com/en/developers/api-token).
- Replace `resourceType`, `resourceId`, your BlendVision VODs can be get via [List VODs](https://developers.blendvision.com/docs/api/bv-one/public-cms-service-list-vo-ds) API.
- Start development server: `yarn dev` or `npm run dev`
- Open http://localhost:3000 in your browser

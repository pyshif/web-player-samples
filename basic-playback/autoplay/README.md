# 🌐 BV Web Player Sample - Basic Playback with Autoplay Options

This project demonstrates how to integrate and configure the **BlendVision Web Player** for basic video playback. The sample includes autoplay options that allow flexibility based on user preferences.

## 🎛️ Autoplay Options

The `autoplay` property allows you to control how and when the video starts playing. Below are the available options:

| Option    | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `true`    | Starts playing immediately if possible.                                              |
| `false`   | Autoplay is disabled; user must click play.                                          |
| `'muted'` | Autoplay only if the video is muted (bypasses autoplay restrictions).                |
| `'play'`  | Autoplay if allowed; if blocked, video will attempt to start after user interaction. |

## 📋 How to Integrate

### 📥 Include the Player Library

Add the BlendVision player script to your HTML using:

```html
<script src="https://unpkg.com/@blendvision/player@2.21.2"></script>
```

### 🗂️ Create Player Container

Add a container for the player in your HTML:

```html
<div id="my-player"></div>
```

### ⚙️ Initialize the Player

Use JavaScript to initialize and configure the player. Set the `autoplay` property based on your preferred behavior.

```javascript
const player = BlendVision.createPlayer("my-player", {
  title: "BlendVision One",
  autoplay: false, // Adjust based on your needs, and its default value is false
  source: [
    {
      type: "application/dash+xml",
      src: "https://example.com/video.mpd",
    },
    {
      type: "application/x-mpegurl",
      src: "https://example.com/video.m3u8",
    },
  ],
});
```

### 🔑 License (Production Only)

Add your BlendVision Player license key during production deployment.

```javascript
licenseKey: "YOUR BV PLAYER LICENSE KEY";
```

## 📝 Notes

- Use `muted` or `any` for better autoplay support across different browsers.
- Ensure the video source URLs point to valid media files.

## 🚀 How to Run this Sample App

- Clone this repository
- `cd` into the `basic-playback/autoplay` directory
- Start a local server:

```bash
npx browser-sync start --server --files "."
```

- It will open a browser tab at **http://localhost:3001/** automatically, starting the sample app and playing the video.

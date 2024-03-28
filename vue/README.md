# Vue Sample App

This sample app provides a minimal setup to get the SDK working with Vue in a standalone HTML file.

Since the player UI is React based, React dependencies are required to run the SDK with UI, but no worries, the React part takes only a sub DOM tree, and it works as expected, as this sample app demonstrates.

We are still exploring a better way to integrate the SDK with Vue, and will provide a easier Vue integration path in a future version.

## How to Run this Sample App

- Clone this repository
- `cd` into the `vue` directory
- Start a local server: `npx browser-sync start --server --files "."`
- It will open a browser tab "http://localhost:3001/" automatically, start the sample app and play the video.

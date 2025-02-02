import {
  // createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset: {
    ...minimal2023Preset,
    //   assetName(type, size) {
    //     switch (type) {
    //       case "apple": {
    //         return `static/media/apple-touch-icon-${size.width}x${size.height}.webp`;
    //       }
    //       case "maskable": {
    //         return `static/media/maskable-icon-${size.width}x${size.height}.webp`;
    //       }
    //       case "transparent": {
    //         return `static/media/pwa-${size.width}x${size.height}.webp`;
    //       }
    //     }
    //   },
    //   appleSplashScreens: createAppleSplashScreens(
    //     {
    //       padding: 0.3,
    //       resizeOptions: { fit: "contain", background: "#ffffff" },
    //       darkResizeOptions: { fit: "contain", background: "#0a0a0a" },
    //       name: (landscape, size, dark) => {
    //         return `static/media/apple-splash-${
    //           landscape ? "landscape" : "portrait"
    //         }-${dark ? "dark" : "light"}-${size.width}x${size.height}.webp`;
    //       },
    //       png: {
    //         quality: 60,
    //       },
    //       linkMediaOptions: {
    //         log: true,
    //         addMediaScreen: true,
    //         basePath: "/",
    //         xhtml: true,
    //       },
    //     },
    //     [
    //       'iPad Pro 12.9"',
    //       'iPad Pro 11"',
    //       'iPad Pro 10.5"',
    //       'iPad Pro 9.7"',
    //       'iPad mini 7.9"',
    //       'iPad Air 10.5"',
    //       'iPad Air 9.7"',
    //       'iPad 10.2"',
    //       'iPad 9.7"',
    //       "iPhone 14 Pro Max",
    //       "iPhone 14 Pro",
    //       "iPhone 14 Plus",
    //       "iPhone 14",
    //       "iPhone 13 Pro Max",
    //       "iPhone 13 Pro",
    //       "iPhone 13",
    //       "iPhone 13 mini",
    //       "iPhone 12 Pro Max",
    //       "iPhone 12 Pro",
    //       "iPhone 12",
    //       "iPhone 12 mini",
    //       "iPhone 11 Pro Max",
    //       "iPhone 11 Pro",
    //       "iPhone 11",
    //       "iPhone XS Max",
    //       "iPhone XS",
    //       "iPhone XR",
    //       "iPhone X",
    //       "iPhone 8 Plus",
    //       "iPhone 8",
    //       "iPhone 7 Plus",
    //       "iPhone 7",
    //       "iPhone 6s Plus",
    //       "iPhone 6s",
    //       "iPhone 6 Plus",
    //       "iPhone 6",
    //       'iPhone SE 4.7"',
    //       'iPhone SE 4"',
    //       "iPod touch 5th generation and later",
    //     ]
    //   ),
  },
  images: "public/favicon.svg",
});

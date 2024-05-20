import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sina Sahraeian",
    short_name: "Sina Sahraeian",
    description: "What can Sina Sahraeian do?",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#3B82F6",
    id: "/",
    icons: [
      {
        src: "/manifest/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/manifest/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/manifest/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/manifest/screenshot1.png",
        sizes: "976x660",
        type: "image/png",
      },
      {
        src: "/manifest/screenshot2.png",
        sizes: "1904x763",
        type: "image/png",
      },
    ],
  };
}

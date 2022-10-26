export default {
  expo: {
    name: "date idee",
    slug: "date idee",
    owner: "wout",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#f9fafe"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    androidStatusBar: {
      backgroundColor: "#f9fafe",
      translucent: false
    },
    androidNavigationBar: {
      backgroundColor:"#f9fafe"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#f9fafe"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
}

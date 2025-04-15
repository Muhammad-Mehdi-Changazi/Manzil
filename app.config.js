import 'dotenv/config';

export default {
  expo: {
    newArchEnabled: false,
    name: "manzil",
    slug: "manzil",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true
        }
      }
    },
    android: {
      package: "com.usmanarshid.manzil",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      config: {
        cleartextTraffic: true
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      "expo-font"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      API_BASE_URL: process.env.API_BASE_URL,
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      WEATHER_API: process.env.WEATHER_API,
      router: {
        origin: false
      },
      eas: {
        projectId: "73b2b26f-e61a-4397-8585-9d87205225f1"
      }
    },
    owner: "osman123123"
  }
};

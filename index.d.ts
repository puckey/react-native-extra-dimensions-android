declare interface ExtraDimensions {
  navigationBarHeight: number;
  navigationBarWidth: number;
  statusBarHeight: number;
}

declare module "react-native-extra-dimensions-android" {
  const instance: ExtraDimensions;
  export = instance;
}

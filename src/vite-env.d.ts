/// <reference types="vite/client" />

declare const APP_VERSION: string;

interface ImportMetaEnv {
  /** アプリケーション名 */
  readonly VITE_APP_NAME: string;
}

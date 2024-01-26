import Next from "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_INVESTMENT_URL: string; // this is the line you want
      NODE_ENV: 'development' | 'production';
    }
  }
}
// export {}
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "gred": "#EA4335",
        "gblue": "#4285F4",
        "ggreen": "#0F9D58",
        "gyellow": "#FBBC04",
        "lred": "#F4857C",
        
      },
      rotate:{
        "8":"8deg",
        "16":"16deg",  
        "24":"24deg",
      },
    },
  },
  plugins: [],
};
export default config;

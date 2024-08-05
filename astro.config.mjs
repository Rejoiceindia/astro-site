import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  image: {
    domains: ["res.cloudinary.com"],
  },
  site: "https://RejoiceIndia.github.io",
  base: "/astro-site"
});

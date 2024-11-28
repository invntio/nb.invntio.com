import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import netlify from "@astrojs/netlify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), icon({
    include: {
      ic: ['*']
    }
  })],
  output: "server",
  adapter: netlify()
});
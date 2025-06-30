import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "GommeHD.net Network Status",
  description: "GommeHD.net Minecraft server network status page",
  provider: github({
    owner: "gommehdnet",
    repo: "status.gommehd.net",
  }),
});

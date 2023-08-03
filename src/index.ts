import type { Config } from "tailwindcss";
//@ts-ignore
import animatePlugin from "tailwindcss-animate";

import { anishPlugin } from "./plugin";

export const anishPreset = {
    darkMode: ["class"],
    content: [],
    plugins: [animatePlugin, anishPlugin],
} satisfies Config;


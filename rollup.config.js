// rollup.config.js
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    terser({
      ecma: 2015,
      mangle: { toplevel: true },
      compress: {
        toplevel: true,
        drop_console: !dev,
        drop_debugger: !dev,
      },
      output: { quote_style: 1 },
    }),
  ],
};

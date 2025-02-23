import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific rules if needed
      "@typescript-eslint/no-explicit-any": "off", // Example: Disable the rule for `any`
      "react/jsx-no-target-blank": "off", // Example: Disable this rule for JSX links
    },
    // Optional: Add additional configuration to ignore ESLint warnings during builds
    ignoreDuringBuilds: true,  // Ignores ESLint errors in production builds
  },
];

export default eslintConfig;
import path from "path";
import webpack, { RuleSetRule } from "webpack";

export default ({
  config,
}: {
  config: webpack.Configuration;
}): webpack.Configuration => {
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      const test = rule as RuleSetRule;
      if (/svg/.test(test.test as string)) {
        return { ...test, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] });
  }

  return config;
};

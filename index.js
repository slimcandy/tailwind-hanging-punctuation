export default function hangingPunctuation({ addUtilities, config, e }) {
  const values = config("theme.hangingPunctuation", {
    none: "none",
    first: "first",
    last: "last",
    forceEnd: "force-end",
    allowEnd: "allow-end",
    book: "first last force-end",
  });

  const variants = config("variants.hangingPunctuation", []);
  const utilities = {};

  for (const key in values) {
    utilities[`.hanging-punctuation-${e(key)}`] = {
      "hanging-punctuation": values[key],
    };
  }

  addUtilities(utilities, {
    variants,
  });
}

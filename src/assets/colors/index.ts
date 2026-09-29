export type Color = string;

export interface Colors {
  /** Semantic text colours — prefer these in components. */
  Text: {
    /** Default text on the cream ground. */
    Fg: Color;
    /** Text on dark grounds (footer, photos). */
    FgInverse: Color;
  };
  maryama: {
    background: Color;
    brown: Color;
    /** Warm, earthy tones that sit harmoniously between the cream background and the dark brown. */
    palette: {
      lightCream: Color;
      cream: Color;
      sand: Color;
      tan: Color;
      khaki: Color;
      taupe: Color;
      coffee: Color;
      mocha: Color;
      espresso: Color;
      darkBrown: Color;
    };
    /** Muted accent tones that pair well with the earthy palette. */
    accent: {
      terracotta: Color;
      clay: Color;
      olive: Color;
      sage: Color;
    };
  };
}

const COLORS: Colors = {
  Text: {
    Fg: "#221616",
    FgInverse: "#F4EBDD",
  },
  maryama: {
    background: "#F4EBDD",
    brown: "#221616",
    palette: {
      lightCream: "#FBF5EA",
      cream: "#F4EBDD",
      sand: "#EBDFC9",
      tan: "#DCC9A8",
      khaki: "#C4A882",
      taupe: "#9C8468",
      coffee: "#6F5843",
      mocha: "#4A3629",
      espresso: "#2E1F19",
      darkBrown: "#221616",
    },
    accent: {
      terracotta: "#B5714B",
      clay: "#8C4A2F",
      olive: "#7A7350",
      sage: "#5F6B4C",
    },
  },
};

export default COLORS;

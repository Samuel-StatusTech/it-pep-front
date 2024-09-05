import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  colors: {
    blue: {
      soft: "#1F60AA",
      medium: "#3B4360",
      light: "#707EAE",
      dark: "#143D69",
    },
    green: {
      light: "#9DC5B1",
      system: "#389E0D",
    },
    yellow: {
      system: "#FADB14",
    },
    red: {
      system: "#F5222D",
    },
    neutral: {
      black: "#1F262C",
      ice: "#EDF2F9",
      bluewhite: "#EFF3FD",
      bluegrey: "#D5DBED",
      white: "#FFFFFF",
    },
    backgrounds: {
      tableHeader: "#D9E3F4",
      page: "#EAEEF9",
      dashboardMain: "#EFF3FD",
      card: "rgba(31, 92, 170, 0.1)",
      cardSecondary: "rgba(31, 92, 170, 0.15)",
      cardInactive: "#D5D8ED",
    },
  },
  animations: {
    types: {
      fade: "animation: fade; animation-fill-mode: forwards;",
      fadeTop: "animation: fadeTop; animation-fill-mode: forwards;",
      fadeRight: "animation: fadeRight; animation-fill-mode: forwards;",
      fadeBottom: "animation: fadeBottom; animation-fill-mode: forwards;",
      fadeLeft: "animation: fadeLeft; animation-fill-mode: forwards;",
    },
    durations: {
      main: `animation-duration: 0.4s;`,
      slow: `animation-duration: 0.8s;`,
      fast: `animation-duration: 0.2s;`,
    },
    delays: {
      main: (x = 1) => `animation-delay: calc( ${x} * 0.2s);`,
      slow: (x = 1) => `animation-delay: calc( ${x} * 0.4s);`,
      slower: (x = 1) => `animation-delay: calc( ${x} * 0.6s);`,
    },
  },
  bp: {
    small: 520,
  },
}

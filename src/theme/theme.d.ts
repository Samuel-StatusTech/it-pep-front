import "./styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: {
        soft: string
        medium: string
        light: string
        dark: string
      }
      green: {
        light: string
        system: string
      }
      yellow: {
        system: string
      }
      red: {
        system: string
      }
      backgrounds: {
        tableHeader: string
        page: string
      }
      neutral: {
        black: string
        ice: string
        bluewhite: string
        bluegrey: string
        white: string
      }
    }
    animations: {
      types: {
        fade: string
        fadeTop: string
        fadeRight: string
        fadeBottom: string
        fadeLeft: string
      }
      durations: {
        main: string
        slow: string
        fast: string
      }
      delays: {
        main: (x?: number) => string
        slow: (x?: number) => string
        slower: (x?: number) => string
      }
    }
    bp: {
      small: number
    }
  }
}

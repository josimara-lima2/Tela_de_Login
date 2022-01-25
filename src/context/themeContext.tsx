import { CssBaseline } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useMemo, createContext, Dispatch, useReducer, ReactNode } from "react";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    modalBtn: true;
  }
}
type ThemeProviderProps = {
  children: ReactNode;
};

type ThemePaletteType = "light" | "dark";

type ACTIONTYPE = {
  type: "CHANGE";
  payload: {
    paletteType: ThemePaletteType;
  };
};

type ThemeState = {
  paletteType: ThemePaletteType;
};

const initialState = {
  paletteType: "light",
} as ThemeState;

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        paletteType: action.payload.paletteType || state.paletteType,
      };
    default:
      throw new Error(`Unrecognized type ${action.type}`);
  }
};

export type ThemeContextInterface = Dispatch<ACTIONTYPE>;

export const ThemeContext = createContext({} as ThemeContextInterface);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { paletteType } = state;

  const theme = useMemo(() => {
    let nextTheme = createTheme({
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            "@global": {},
            // ...
          },
        },

        MuiDialog: {
          // ...
        },
        MuiDialogContent: {
          // ...
        },
        MuiDialogActions: {
          // ...
        },
      },

      palette: {
        mode: paletteType,
        background: {
          paper: paletteType === "dark" ? "#093545" : "#e5e5e5",
          default: paletteType === "dark" ? "#093545" : "#e5e5e5",
        },
        primary: {
          main: "#fff",
          dark: "#fff",
          light: "#fafafa",
        },
        secondary: {
          main: "#093545",
          dark: "#fafafa",
        },
        // ...
      },
      typography: {
        fontFamily: ["Lexend Deca", "Montserrat", "sans-serif"].join(","),
        h2: {
          color: paletteType === "light" ? "#093545" : "#fff",
        },
        subtitle1: {
          color: paletteType === "light" ? "#093545" : "#fff",
        },
      },
    });

    nextTheme = responsiveFontSizes(nextTheme);

    return nextTheme;
  }, [paletteType]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

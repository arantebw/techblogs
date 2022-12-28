export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FB2576",
  blue: "#150050",
  purple: "#3F0071"
};

export const screenSize = {
  mobileSmall: "320px",
  mobileMedium: "375px",
  mobileLarge: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopLarge: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileSmall: `(min-width: ${screenSize.mobileSmall})`,
  mobileMedium: `(min-width: ${screenSize.mobileMedium})`,
  mobileLarge: `(min-width: ${screenSize.mobileLarge})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopLarge: `(min-width: ${screenSize.laptopLarge})`,
  desktop: `(min-width: ${screenSize.desktop})`
};

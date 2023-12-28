export const isMatch = (path: string, pathname: string) => pathname === path;
export const linkStyles = (path: string, pathname: string) =>
  `nav ${isMatch(path, pathname) ? "nav--active" : ""} `;

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title"
  | "body"
  | "subtitle1"
  | "subtitle2"
  | "caption";

export interface TypographyProps {
  variant?: TypographyVariant;
  style?: object;
  children: React.ReactNode;
}

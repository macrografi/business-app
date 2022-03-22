export interface FooterMenu {
  text?: string;
  value?: string;
  subMenu?: Array<{
    text?: string;
    value?: string;
  }>;
}

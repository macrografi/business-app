export interface Menu {
  icon?: string;
  text?: string;
  value?: string;
  link?: string;
  subMenu?: Array<{
    icon?: string;
    text?: string;
    value?: string;
    link?: string;
  }>;
}

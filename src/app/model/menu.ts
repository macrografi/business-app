export interface Menu {
  icon?: string;
  text?: string;
  value?: string;
  subMenu?: Array<{
    icon?: string;
    text?: string;
    value?: string;
  }>;
}

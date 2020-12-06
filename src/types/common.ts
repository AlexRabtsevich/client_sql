export interface ISelectOption {
  value: string;
  label: string;
}

export interface IMenuOptions {
  label: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: (id: string) => any;
}

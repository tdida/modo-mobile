export interface PickerData {
  value: string | number;
  label: React.ReactNode;
  children?: PickerData[];
}

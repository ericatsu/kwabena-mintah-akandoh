export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldConfig {
  label: string;
  type: "input" | "textarea" | "datePicker" | "select";
  options?: SelectOption[]; // For select fields
  multiple?: boolean; // For multi-select fields
}

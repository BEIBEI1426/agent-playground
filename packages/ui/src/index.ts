export type ButtonProps = {
  /** Text displayed on the button */
  label: string;
  /** When true, the button is non-interactive */
  disabled?: boolean;
};

export function Button({ label, disabled = false }: ButtonProps) {
  return {
    type: "button",
    label,
    disabled
  };
}
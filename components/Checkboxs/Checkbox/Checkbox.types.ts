import { InputHTMLAttributes, CSSProperties } from "react";

export interface RadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type: "checkbox" | "radio";
}

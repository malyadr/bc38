import { TextField } from "@mui/material";
import React from "react";

interface input {
  text: string;
  variant: "standard" | "outlined" | "filled" | undefined;
  styles: React.CSSProperties | null;
}

export const InputField = ({ text, variant, styles }: input) => {
  return <TextField variant={variant} sx={styles} placeholder={text} />;
};

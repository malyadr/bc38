import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { textVariant, color, textColor } from "../../../theme/customTheme";

interface ButtonProps {
  variant: textVariant;
  TextColor: textColor;
  buttonVariant: "text" | "contained" | "outlined" | undefined;
  buttonColor: color;
  children: React.ReactNode;
  styles: React.CSSProperties | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button1 = ({
  variant,
  TextColor,
  buttonVariant,
  buttonColor,
  children,
  styles,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <Button
        sx={styles}
        variant={buttonVariant}
        color={buttonColor}
        onClick={onClick}
        style={{ borderRadius: "8px" }}
      >
        <Typography variant={variant} color={TextColor}>
          {children}
        </Typography>
      </Button>
    </>
  );
};

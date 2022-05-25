import { Typography } from "@mui/material";
import React from "react";
import { Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { textVariant } from "../../../theme/customTheme";

interface chips {
  text: string;
  variant: textVariant;
  styles: React.CSSProperties | null;
  onDelete?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Chips = ({ text, variant, styles, onDelete }: chips) => {
  return (
    <Chip
      sx={styles}
      label={
        <Typography variant={variant} color="betaMedium.main">
          {text}
        </Typography>
      }
      onDelete={onDelete}
      deleteIcon={<CloseIcon sx={{ fontSize: "small" }} />}
    />
  );
};

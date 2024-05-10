import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
 
type TInputProps = {
  name:string
  label?:string
  type?:string
  size?:"small" | "medium"
  fullWidth?:boolean
  sx?: SxProps;
  placeholder?:string;
  required?:boolean
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  sx,
  placeholder,
  required,
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          placeholder={label}
          required={required}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;
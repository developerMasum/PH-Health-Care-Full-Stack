import PHModal from "@/components/shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  return (
    <PHModal
      open={open}
    setOpen={setOpen}
    title = "Create Specialist"
    >
        <TextField/>
 
    </PHModal>
  );
};

export default SpecialistModal;

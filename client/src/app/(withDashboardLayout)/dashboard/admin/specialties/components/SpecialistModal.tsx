import PHFileUploader from "@/components/Forms/FHFileUploder";
import PHForm from "@/components/Forms/PHForm";
import PhInput from "@/components/Forms/PhInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      // console.log(res)
    if (res?.id) {
      toast.success("Specialty Created Successfully ! ")
      setOpen(false)
    }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create a new Specialist">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PhInput name="title" label="title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader label="Upload File" name="file" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          {" "}
          Create{" "}
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtyModal;

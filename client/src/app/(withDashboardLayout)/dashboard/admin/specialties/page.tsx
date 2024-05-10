"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation()
  // console.log(data)

  const handleDelete = async(id: string) => {
try {
  const res = await deleteSpecialty(id).unwrap();
 if (res?.id) {
  toast.success("Specialty Deleted Successfully !")
 }
} catch (error:any) {
  console.error(error.message)
}

  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.icon} alt="row.title" width={30} height={30} />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1> Loading.....</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;

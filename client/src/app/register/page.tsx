"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/actions/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PhInput from "@/components/Forms/PhInput";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PHForm onSubmit={handleRegister}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PhInput
                    name="patient.name"
                    label="Name"
                    required={true}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PhInput
                    name="patient.email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PhInput
                    label="Password"
                    type="password"
                    name="password"
                    size="small"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PhInput
                    label="Contact Number"
                    type="tel"
                    name="patient.contactNumber"
                    size="small"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PhInput
                    label="Address"
                    type="text"
                    name="patient.address"
                    size="small"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;

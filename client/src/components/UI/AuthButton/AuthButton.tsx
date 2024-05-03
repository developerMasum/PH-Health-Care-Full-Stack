import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AuthButton = () => {
     const userInfo = getUserInfo();
     const router = useRouter();
     const handleLogOut = () => {
       removeUser();
       router.refresh();
     };
    return (
      <>
        {userInfo?.userId ? (
          <Button onClick={handleLogOut} color="error">
            LogOut
          </Button>
        ) : (
          <Button component={Link} href="/login">
            LOGIN
          </Button>
        )}
      </>
    );
};

export default AuthButton;
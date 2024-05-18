import { authKey } from "@/constants/authKey";
import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { logoutUser } from "@/services/actions/logoutUser";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AuthButton = () => {
     const userInfo = getUserInfo();
     const router = useRouter();
     const handleLogOut = () => {
     logoutUser(router)
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
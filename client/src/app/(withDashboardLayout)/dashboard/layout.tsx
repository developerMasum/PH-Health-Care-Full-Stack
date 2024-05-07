/* eslint-disable react/no-children-prop */

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";


const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return(
    <DashboardDrawer children={children}/>
  )
 
};

export default DashboardLayout;
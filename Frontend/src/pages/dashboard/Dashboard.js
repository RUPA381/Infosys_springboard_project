import { useSelector } from "react-redux";
import BlockCount from "./BlockCount";
import BlockDetails from "./BlockDetails";
import Complaints from "./Complaints";
import FlatCount from "./FlatCount";
import FlatsOccupiedCount from "./FlatsOccupiedCount";
import ParkingPlots from "./ParkingPlots";
import Securities from "./Securities";
import SocietyPeopleCount from "./SocietyPeopleCount";
import UpcomingEvents from "./UpcomingEvents";
import Vendors from "./Vendors";
import { Backdrop, CircularProgress } from "@mui/material";

function Dashboard(){
    const loading=useSelector(store=>store.auth?.loading);
    return(
        <div className="p-5">
            <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <div className="flex justify-between mx-5">
            <BlockCount/>
            <FlatCount/>
            <FlatsOccupiedCount/>
            <SocietyPeopleCount/>
        </div>
        <div className="p-5 my-2 ">
            <BlockDetails/>
        </div>
        <div className="flex flex-row justify-between mx-5">
            <Complaints/>
            <ParkingPlots/>
            <Vendors/>
            <UpcomingEvents/>
            <Securities/>
        </div>
        </div>
    )
}
export default Dashboard;
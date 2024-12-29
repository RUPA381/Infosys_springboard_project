import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import Header from "../../components/header/Header";
import ComplaintPage from "../complaints/ComplaintPage";
import RequestPage from "../requests/RequestPage";
import EventPage from "../events/EventPage";
import NoticePage from "../notices/NoticePage";
import PostPage from "../posts/PostPage";
import BillingPage from "../billings/BillingPage";
import ParkingPage from "../parking/ParkingPage";
import ContactsPage from "../contacts/ContactsPage";

function MainPage() {
    return (
        <div className="flex h-screen">
            <div className="w-[23%] bg-white drop-shadow-xl rounded-lg border border-1 border-gray-300">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header />
                <div className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Navigate to="/community/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/complaints" element={<ComplaintPage />} />
                        <Route path="/requestServices" element={<RequestPage/>} />
                        <Route path="/events" element={<EventPage/>}/>
                        <Route path="/notices" element={<NoticePage/>}/>
                        <Route path="/posts" element={<PostPage/>}/>
                        <Route path="/parking" element={<ParkingPage/>}/>
                        <Route path="/billings" element={<BillingPage/>}/>
                        <Route path="/emergencyContacts" element={<ContactsPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

import LogoutIcon from '@mui/icons-material/Logout';
import SidebarMenu from "./SidebarMenu";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoutModal from './LogoutModal';

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="static">
            <div className="flex justify-center">
                <img src="https://i.ibb.co/8MnzPDm/freepik-background-85678.png" className="w-[70px]" />
            </div>
            <div className="flex flex-col cursor-pointer text-cyan-950">
                {SidebarMenu.map((item, index) => (
                    <div
                        key={index}
                        className={`px-5 py-1 rounded-lg mx-3 text-sm ${
                            location.pathname === `/community/${item.path}`
                                ? "bg-gradient-to-r from-cyan-950 to-cyan-600 text-white"
                                : "hover:bg-gray-100"
                        }`}
                        onClick={() => navigate(`/community/${item.path}`)}
                    >
                        {item.icon}
                        <span className="px-4">{item.item}</span>
                    </div>
                ))}
                <div
                    className="absolute bottom-5 mx-3 text-cyan-950 cursor-pointer hover:bg-gray-100 px-5 py-2"
                    onClick={handleOpen}
                >
                    <LogoutIcon />
                    <span className="px-4">Logout</span>
                </div>
            </div>
            <LogoutModal open={open} handleClose={handleClose} />
        </div>
    );
}

export default Sidebar;

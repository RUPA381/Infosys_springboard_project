import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import BadgeIcon from '@mui/icons-material/Badge';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const SidebarMenu=[
    {
        "icon":<DashboardCustomizeIcon />,
        "item":"Dashboard",
        "path":"dashboard"
    },
    {
        "icon":<BadgeIcon />,
        "item":"Request Services",
        "path":"requestServices"
    },
    {
        "icon":<NoteAltIcon />,
        "item":"Complaints",
        "path":"complaints"
    },
    {
        "icon":<CalendarMonthIcon/>,
        "item":"Events",
        "path":"events"
    },
    {
        "icon":<StickyNote2Icon />,
        "item":"Notices",
        "path":"notices"
    },
    {
        "icon":<PostAddIcon />,
        "item":"Posts",
        "path":"posts"
    },
    {
        "icon":<DriveEtaIcon />,
        "item":"Parking",
        "path":"parking"
    },
    {
        "icon":<ContactPhoneIcon />,
        "item":"Emergency Contacts",
        "path":"emergencyContacts"
    },
    {
        "icon":<LocalAtmIcon />,
        "item":"Billings",
        "path":"billings"
    },
]
export default SidebarMenu
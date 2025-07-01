import DashboardIcon from "@mui/icons-material/Dashboard";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";


export const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Gallery",
    path: "/gallery",
    icon: <PhotoLibraryIcon />,
    menu: [
      { label: "Add Gallery", path: "/gallery/add", icon: <AddCircleOutlineIcon fontSize="small" /> },
      { label: "Edit Gallery", path: "/gallery/edit", icon: <EditOutlinedIcon fontSize="small" /> },
      { label: "All Galleries", path: "/gallery/all", icon: <ListAltOutlinedIcon fontSize="small" /> },
    ],
  },
  {
    label: "News",
    path: "/news",
    icon: <ArticleIcon />,
    menu: [
      { label: "All News", path: "/news/all-news", icon: <ListAltOutlinedIcon fontSize="small" /> },
      { label: "Add News", path: "/news/create-news", icon: <AddCircleOutlineIcon fontSize="small" /> },
      { label: "Update News", path: "/news/update-news/:id", icon: <EditOutlinedIcon fontSize="small" /> },
    ],
  },
  {
    label: "Events",
    path: "/events",
    icon: <EventIcon />,
    menu: [
      { label: "Add Event", path: "/events/add", icon: <AddCircleOutlineIcon fontSize="small" /> },
      { label: "Edit Event", path: "/events/edit", icon: <EditOutlinedIcon fontSize="small" /> },
      { label: "All Events", path: "/events/all", icon: <ListAltOutlinedIcon fontSize="small" /> },
    ],
  },
  {
    label: "Blogs",
    path: "/blogs",
    icon: <FeedIcon />,
    menu: [
       { label: "All Blogs", path: "/blogs/all-blogs", icon: <ListAltOutlinedIcon fontSize="small" /> },
      { label: "Add Blog", path: "/blogs/create-blog", icon: <AddCircleOutlineIcon fontSize="small" /> },
      { label: "Edit Blog", path: "/blogs/update-blog/:id", icon: <EditOutlinedIcon fontSize="small" /> },
     
    ],
  },
];


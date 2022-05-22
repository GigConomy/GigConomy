// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "Escrow Agreements",
    path: "/dashboard/agreement",
    icon: getIcon("icon-park-outline:agreement"),
  },
  {
    title: "Crypto Payment",
    path: "/dashboard/send-request",
    icon: getIcon("fluent:wallet-credit-card-24-filled"),
  },
  {
    title: "Subscriptions",
    path: "/dashboard/subscriptions",
    icon: getIcon("uil:invoice"),
  },
  {
    title: "product & Services",
    path: "/dashboard/products",
    icon: getIcon("eva:shopping-bag-fill"),
  }, 
  {
    title: "Invoice",
    path: "/dashboard/invoice",
    icon: getIcon("uil:invoice"),
  },
  {
    title: "Messages",
    path: "/dashboard/chat",
    icon: getIcon("ph:chat-text-fill"),
  },
  {
    title: "My Network",
    path: "/dashboard/user",
    icon: getIcon("eva:people-fill"),
  }, 
  {
    title: "Analytics",
    path: "/dashboard/app",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  
  
  
  
  // {
  //   title: "login",
  //   path: "/login",
  //   icon: getIcon("eva:lock-fill"),
  // },

  // {
  //   title: "register",
  //   path: "/register",
  //   icon: getIcon("eva:person-add-fill"),
  // },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: getIcon("eva:alert-triangle-fill"),
  // },
];

export default sidebarConfig;

import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LendingPageLayout from "./layouts/LendingPageLayout";
//
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import User from "./pages/User";
import NotFound from "./pages/Page404";
import Agreement from "./pages/Agreement";
import ChatBox from "./pages/ChatBox";
import UserProfile from "./layouts/dashboard/UserProfile";
import Profile from "./pages/Profile";
// import ProductDetail from "./sections/@dashboard/products/ProductDetail";
import Lending from "./LendingPage/Lending";
import ProductDetail from "./ProductDetail/ProductDetail";
import SendRequest from "./pages/Send-Request";
// import { Payment } from "@mui/icons-material";
import Invoice from "./pages/Invoice";
import { element } from "prop-types";
import InvoiceDetail from "./pages/InvoiceDetail";
import Subscription from "./pages/Subscribtion";
import SubscribtionDetails from "./pages/SubscribtionDetails";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <User /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
        { path: "Agreement", element: <Agreement /> },
        { path: "send-request", element: <SendRequest /> },
        { path: "chat/:id", element: <ChatBox /> },
        { path: "chat", element: <ChatBox /> },
        { path: "userProfile", element: <UserProfile /> },
        { path: "invoice", element: <Invoice /> },
        { path: "subscriptions", element: <Subscription /> },
      ],
    },

    // {
    //   path: "/dashboard/invoice/invoicedetail",
    //   element: <InvoiceDetail />,
    //   //   children: [{ path: "/invoicedetail", element: <InvoiceDetail /> }],
    // },

    {
      path: "/productdetail",
      element: <ProductDetail />,
    },
    {
      path: "/",
      element: <LendingPageLayout />,
      children: [
        { path: "/", element: <Lending /> },
        { path: "/:name", element: <Profile /> },
        {
          path: "/:name/:productName",
          element: <ProductDetail />,
        },
        { path: "/invoice/:id", element: <InvoiceDetail /> },
        { path: "/subscribtion/:id", element: <SubscribtionDetails /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}

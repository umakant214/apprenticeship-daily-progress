import "./App.css";
import BreadCrumbs from "./Layout/BreadCrumbs";
import ContentArea from "./Layout/COntentArea";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Loader from "./Layout/Loader";
import ModalWrapper from "./Layout/ModalWrapper";
import Navbar from "./Layout/Navbar";
import PageWrapper from "./Layout/PageWrappper";
import Sidebar from "./Layout/Sidebar";
import ThemeSwitcher from "./Layout/ThemeSwitcher";

import AuthGuard from "./Auth/AuthGuard";
import ChangePassword from "./Auth/ChangePassword";
import ForgotPassword from "./Auth/ForgotPassword";
import LoginForm from "./Auth/LoginForm";
import LogoutButton from "./Auth/LogoutButton";
import OTPVerification from "./Auth/OTPVerification";
import ProfileCard from "./Auth/ProfileCard";
import RegisterForm from "./Auth/RegisterForm";
import ResetPassword from "./Auth/ResetPassword";
import Social from "./Auth/Social";

import DashboardHome from "./Dashboard/DashboardHome";
import StatsCard from "./Dashboard/StatsCard";
import RevenueChart from "./Dashboard/RevenueChart";
import UserOverview from "./Dashboard/UserOverview";
import ActivityTimeline from "./Dashboard/ActivityTimeline";
import QuickActions from "./Dashboard/QuickActions";
import TopSelling from "./Dashboard/TopSelling";
import ReportsCard from "./Dashboard/ReportsCard";
import Analytics from "./Dashboard/Analytics";
import Notification from "./Dashboard/Notification";

import UserActivity from "./Users/UserActivity";
import UserAvatar from "./Users/UserAvatar";
import UserCard from "./Users/UserCard";
import UserDetails from "./Users/UserDetails";
import UserEditForm from "./Users/UserEditForm";
import UserFilters from "./Users/UserFilters";
import UserList from "./Users/UserList";
import UserRoleBadge from "./Users/UserRoleBadge";
import UserSearch from "./Users/UserSearch";
import UserTable from "./Users/UserTable";

import ProductList from "./Products/ProductList";
import ProductCard from "./Products/ProductCard";
import ProductDatails from "./Products/ProductDatails";
import ProductForm from "./Products/ProductForm";
import ProductFilter from "./Products/ProductFilter";
import ProductGallery from "./Products/ProductGallery";
import ProductReviews from "./Products/ProductReviews";
import PriceTag from "./Products/PriceTag";
import StockBadge from "./Products/StockBadge";
import CategoryList from "./Products/CategoryList";
import OrderList from "./Orders/OrderList";
import OrderTable from "./Orders/OrderTable";
import OrderDetails from "./Orders/OrderDetails";
import OrderTracking from "./Orders/OrderTracking";
import OrderFilter from "./Orders/OrderFilter";
import OrderSummary from "./Orders/OrderSummary";
import InvoiceView from "./Orders/InvoiceView";
import ShippingInfo from "./Orders/ShippingInfo";
import PaymentInfo from "./Orders/PaymentInfo";
import GeneralSetting from "./Settings/GeneralSettings";
import Account from "./Settings/Account";
import Privacy from "./Settings/Privacy";
import NotificationSetting from "./Settings/NotificationSetting";
import ThemeSetting from "./Settings/ThemeSetting";
import Language from "./Settings/Language";
import Security from "./Settings/Security";
import Backup from "./Settings/Backup";
import Integration from "./Settings/Integration";
import Billing from "./Settings/Billing";
import NotificationItem from "./Notification/NotificationItem";
import NotificationList from "./Notification/NotificationList";
import ToastMessage from "./Notification/ToastMessage";
import AlertBox from "./Notification/AlertBox";
import PushSetting from "./Notification/PushSettings";
import EmailSetting from "./Notification/EmailSetting";
import SmsSetting from "./Notification/SmsSetting";
import InAppNotification from "./Notification/InAppNotification";
import NotificationBadge from "./Notification/NotificationBadge";
import NotificationBell from "./Notification/NotificationBell";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import AreaChart from "./Charts/AreaChart";
import DonutChart from "./Charts/DonutChart";
import RadarChart from "./Charts/RadarChart";
import Heatmap from "./Charts/Heatmap";
import ProgressChart from "./Charts/ProgressChart";
import StatsChart from "./Charts/StatsChart";
import MiniChart from "./Charts/MiniChart";
import Button from "./Utilities/Button";
import InputField from "./Utilities/InputField";
import SelectBox from "./Utilities/SelectBox";
import DatePicker from "./Utilities/DatePicker";
import SearchBar from "./Utilities/SearchBar";
import Pagination from "./Utilities/Pagination";
import Tabs from "./Utilities/Tabs";
import Accordion from "./Utilities/Accordion";
import Tooltip from "./Utilities/Tooltip";
import Badge from "./Utilities/Badge";

function App() {
  return (
    <>
      <div className="text-center text-danger">
        <Header />
        <Footer />
        <Sidebar />
        <Navbar />
        <PageWrapper />
        <ContentArea />
        <ThemeSwitcher />
        <BreadCrumbs />
        <ModalWrapper />
        <Loader />

        {/* Auth Folder */}
        <LoginForm />
        <RegisterForm />
        <ForgotPassword />
        <ResetPassword />
        <AuthGuard />
        <OTPVerification />
        <Social />
        <LogoutButton />
        <ProfileCard />
        <ChangePassword />

        {/* Dashboard */}
        <DashboardHome />
        <StatsCard />
        <RevenueChart />
        <UserOverview />
        <ActivityTimeline />
        <QuickActions />
        <TopSelling />
        <Notification />
        <ReportsCard />
        <Analytics />
        {/* Users */}
        <UserActivity />
        <UserAvatar />
        <UserCard />
        <UserDetails />
        <UserEditForm />
        <UserFilters />
        <UserList />
        <UserRoleBadge />
        <UserSearch />
        <UserTable />

        {/* Products */}
        <ProductList />
        <ProductCard />
        <ProductDatails />
        <ProductForm />
        <ProductFilter />
        <ProductGallery />
        <ProductReviews />
        <PriceTag />
        <StockBadge />
        <CategoryList />

        {/* Orders */}

        <OrderList />
        <OrderTable />
        <OrderDetails />
        <OrderTracking />
        <OrderFilter />
        <OrderTable />
        <OrderSummary />
        <InvoiceView />
        <ShippingInfo />
        <PaymentInfo />

        <GeneralSetting />
        <Account />
        <Privacy />
        <NotificationSetting />
        <ThemeSetting />
        <Language />
        <Security />
        <Backup />
        <Integration />
        <Billing />

        <NotificationItem />
        <NotificationList />
        <ToastMessage />
        <AlertBox />
        <PushSetting />
        <EmailSetting />
        <SmsSetting />
        <InAppNotification />
        <NotificationBadge />
        <NotificationBell />

        <LineChart />
        <BarChart />
        <PieChart />
        <AreaChart />
        <DonutChart />
        <RadarChart />
        <Heatmap />
        <ProgressChart />
        <StatsChart />
        <MiniChart />

        <Button />
        <InputField />
        <SelectBox />
        <DatePicker />
        <SearchBar />
        <Pagination />
        <Tabs />
        <Accordion />
        <Tooltip />
        <Badge />
      </div>
    </>
  );
}

export default App;

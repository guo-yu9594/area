import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard/Page";
import AuthPage from "../pages/auth/Page";
import LoginPage from "../pages/login/Page";
import RegisterPage from "../pages/register/Page";
import PrivateRoute from "./PrivateRoute";
import LoadingPage from "../pages/dashboard/components/Loading";
import AddAreaPage from "../pages/dashboard/tabs/add-area/Page";
import DashboardTemplate from "../templates/Dashboard";
import ServicesManager from "../pages/dashboard/tabs/services-manager/ServicesManager";
import ClientAPKPage from "../pages/apk/Page";
import { useEffect, useState } from "react";
import axios from "axios";

async function getRedirectRoutes(): Promise<JSX.Element> {
  const res = await axios.get('http://localhost:8080/services/names/auth');

  return res.data.map((element: string) => {
    const service: string = element.toLowerCase();

    return <Route key={service} path={`/auth/${service}/redirect`} element={<LoadingPage service={service} />} />;
  })
}

const dashboardRoutes =
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/add-area" element={<AddAreaPage />} />
    <Route path="/services-manager" element={<ServicesManager />} />
  </Routes>;

export default function Router() {
  const [redirectRoutes, setRedirectRoutes] = useState<JSX.Element>();

  useEffect(() => {
    const requests = async () => {
      const elements = await getRedirectRoutes();
      setRedirectRoutes(elements);
    };

    try {
      requests();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client.apk" element={<ClientAPKPage />} />
        <Route path="dashboard/*" element={
          <PrivateRoute>
            <DashboardTemplate child={dashboardRoutes} />
          </PrivateRoute>
        } />
        {redirectRoutes}
      </Routes>
    </BrowserRouter>
  );
}

import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import HomePage from "./pages/home";
import VendorPartnersPage from "./pages/vendor-partners";
import EventCalendarPage from "./pages/event-calendar";
import VendorDetailsPage from "./pages/vendor-details";
import InsurancePage from "./pages/insurance-page";
import LabsSolutionPage from "./pages/labs-solution";
import LearningSolutionPage from "./pages/learning-solution";
import MerchantPage from "./pages/merchant-page";
import IofPage from "./pages/iof-page";
import InsuranceProfitPathwayPage from "./pages/insurance-profit-pathway";
import Manager360Page from "./pages/manager360-page";
// import PractiseBuilderPage from "./pages/practise-builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/vendor-partners" element={<VendorPartnersPage />} />
        <Route path="/event-calendar" element={<EventCalendarPage />} />
        <Route path="/vendor-partners/:id" element={<VendorDetailsPage />} />
        <Route path="/practise-builder"></Route>
        <Route path="/vsp-iof" element={<IofPage />} />
        <Route
          path="/insurance-profit-pathway"
          element={<InsuranceProfitPathwayPage />}
        />
        <Route path="/insurance-solutions" element={<InsurancePage />} />
        <Route path="/lab-solutions" element={<LabsSolutionPage />} />
        <Route path="/merchant-services" element={<MerchantPage />} />
        <Route path="/learning-solutions" element={<LearningSolutionPage />} />
        <Route
          path="/learning-solutions/manager-360"
          element={<Manager360Page />}
        />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import HomePage from "./pages/home";
import VendorPartnersPage from "./pages/vendor-partners";
import EventCalendarPage from "./pages/event-calendar";
import VendorDetailsPage from "./pages/vendor-details";
import InsurancePage from "./pages/insurance-page";
import LabsSolutionPage from "./pages/labs-solution";
import LearningSolutionPage from "./pages/learning-solutions/learning-solution";
import MerchantPage from "./pages/merchant-page";
import IofPage from "./pages/iof-page";
import InsuranceProfitPathwayPage from "./pages/insurance-profit-pathway";
import Manager360Page from "./pages/learning-solutions/manager360-page";
import FacebookGroupPage from "./pages/learning-solutions/facebook-group-page";
import SpringBusinessAcademyPage from "./pages/learning-solutions/spring-business-academy-page";
import PulsePage from "./pages/learning-solutions/pulse-page";
import NoFearPage from "./pages/learning-solutions/nofear-page";
import Staff360Page from "./pages/learning-solutions/staff360-page";
import FallForumPage from "./pages/learning-solutions/fallforum-page";
import PathToGoldPage from "./pages/learning-solutions/pathtogold-page";
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
          path="/learning-solutions/pulse-on-your-practice"
          element={<PulsePage />}
        />
        <Route
          path="/learning-solutions/manager-360"
          element={<Manager360Page />}
        />
        <Route
          path="/learning-solutions/facebook-group"
          element={<FacebookGroupPage />}
        />
        <Route
          path="/learning-solutions/fall-forum"
          element={<FallForumPage />}
        />
        <Route path="/learning-solutions/no-fear" element={<NoFearPage />} />
        <Route
          path="/learning-solutions/staff-360"
          element={<Staff360Page />}
        />
        <Route
          path="/learning-solutions/path-to-the-gold"
          element={<PathToGoldPage />}
        />
        <Route
          path="/learning-solutions/spring-business-academy"
          element={<SpringBusinessAcademyPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;

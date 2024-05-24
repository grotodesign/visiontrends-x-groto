import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import HomePage from "./pages/home";
import VendorPartnersPage from "./pages/vendor-partners";
import EventCalendarPage from "./pages/event-page/event-calendar";
import VendorDetailsPage from "./pages/vendor-details";
import InsurancePage from "./pages/insurance-page/insurance-page";
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
import InsuranceGuidePage from "./pages/insurance-page/insuranceguide-page";
import InsuranceDetailPage from "./pages/insurance-page/insurance-detail-page";
import CredentialingPage from "./pages/insurance-page/credentialing-page";
import OutsourcedPage from "./pages/insurance-page/outsourced-page";
import InsuranceAdministrationPage from "./pages/insurance-page/insurance-administration-page";
import AbbAnalyzePage from "./pages/practise-builder-page/abb-analyze-page";
import LensquotePage from "./pages/practise-builder-page/lensquote-page";
import EyeCareProPage from "./pages/practise-builder-page/eyecarepro-page";
import IDefendPage from "./pages/practise-builder-page/idefend-page";
import ReferPage from "./pages/user-profile-area-page/refer-page";
import ContactUsPage from "./pages/user-profile-area-page/contact-us-page";
import UserProfilePage from "./pages/user-profile-area-page/user-profile-page";
import SalesSubmissionPage from "./pages/sales-submission";
import EventDetailPage from "./pages/event-page/event-detail";
import SearchResultsPage from "./pages/search-result-page";
import AbbAnalyzePoweredPage from "./pages/featured-vendors-pages/abb-analyze-powered-page";
import KattoufPage from "./pages/featured-vendors-pages/kattouf-page";
import AbbContactLensPage from "./pages/featured-vendors-pages/abb-contact-lens-page";
import NorwoodPage from "./pages/featured-vendors-pages/norwood-page";
// import PractiseBuilderPage from "./pages/practise-builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="" element={<HomePage />} />
        <Route
          path="/vendor-partners/glimpse-live-llc/"
          element={<AbbAnalyzePoweredPage />}
        />
        <Route
          path="/vendor-partners/kattouf-consulting-services-inc/"
          element={<KattoufPage />}
        />
        <Route
          path="/vendor-partners/abb-contact-lens"
          element={<AbbContactLensPage />}
        />
        <Route path="/vendor-partners/norwood" element={<NorwoodPage />} />
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/my-profile" element={<UserProfilePage />} />
        <Route path="/vendor-partners" element={<VendorPartnersPage />} />
        <Route path="/event-calendar" element={<EventCalendarPage />} />
        <Route path="/event-calendar/:id" element={<EventDetailPage />} />
        <Route path="/vendor-partners/:id" element={<VendorDetailsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/practise-builder">
          <Route
            path="/practise-builder/abb-analyze"
            element={<AbbAnalyzePage />}
          />
          <Route
            path="/practise-builder/lensquote"
            element={<LensquotePage />}
          />
          <Route
            path="/practise-builder/eyecarepro"
            element={<EyeCareProPage />}
          />
          <Route path="/practise-builder/idefend" element={<IDefendPage />} />
        </Route>
        <Route path="/vsp-iof" element={<IofPage />} />
        <Route
          path="/insurance-profit-pathway"
          element={<InsuranceProfitPathwayPage />}
        />
        <Route path="/insurance-solutions" element={<InsurancePage />} />
        <Route
          path="/insurance-solutions/insurance-guide"
          element={<InsuranceGuidePage />}
        />
        <Route
          path="/insurance-solutions/insurance-guide/:id"
          element={<InsuranceDetailPage />}
        />
        <Route
          path="/insurance-solutions/credentialing"
          element={<CredentialingPage />}
        />
        <Route
          path="/insurance-solutions/insurance-administration-training"
          element={<InsuranceAdministrationPage />}
        />
        <Route
          path="/insurance-solutions/outsourced-billing-services"
          element={<OutsourcedPage />}
        />
        <Route path="/sales-submission" element={<SalesSubmissionPage />} />
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ClassesPage from "@/pages/ClassesPage";
import SchedulePage from "@/pages/SchedulePage";
import RegisterPage from "@/pages/RegisterPage";
import GalleryPage from "@/pages/GalleryPage";
import InstructorsPage from "@/pages/InstructorsPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import PerformancesPage from "@/pages/PerformancesPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import PaggTyingPage from "@/pages/PaggTyingPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/performances" element={<PerformancesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services/pagg-tying" element={<PaggTyingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

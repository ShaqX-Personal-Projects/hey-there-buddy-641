import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import AnimatedLayout from "./components/AnimatedLayout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Treatments from "./pages/Treatments";
import Gallery from "./pages/Gallery";
import Philosophy from "./pages/Philosophy";
import About from "./pages/About";
import Team from "./pages/Team";
import Prices from "./pages/Prices";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedLayout>
              <Toaster />
              <Sonner />
              <Layout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/treatments" element={<Treatments />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/philosophy" element={<Philosophy />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/prices" element={<Prices />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </AnimatedLayout>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

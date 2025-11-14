
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, LayoutGrid, Menu, X } from "lucide-react";
import BrandName from "@/components/BrandName";
import { cn } from "@/lib/utils";

type PortfolioNavState = {
  from?: string;
  fromProject?: string;
  returnTo?: string;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = (location.state as PortfolioNavState) || {};
  const currentPath = location.pathname + location.search + location.hash;
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isPortfolioList = location.pathname === "/portfolio";
  const isPortfolioDetail =
    pathSegments[0] === "portfolio" && pathSegments.length === 2;
  const isLandingPage = location.pathname === "/";
  const currentSlug = isPortfolioDetail ? pathSegments[1] : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Why Me",
      href: "#why-me",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleBack = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleViewFullPortfolio = () => {
    setIsMobileMenuOpen(false);
    if (!isPortfolioDetail || !currentSlug) {
      return;
    }

    navigate("/portfolio", {
      state: {
        fromProject: currentSlug,
        returnTo: currentPath,
        from: locationState.from ?? "/",
      },
    });
  };

  const backLabel = "Home";

  const hasMobileMenu =
    isLandingPage || isPortfolioList || isPortfolioDetail;

  const renderMobileMenuContent = () => {
    if (isLandingPage) {
      return (
        <div className="space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-900 hover:bg-[#F4F7FF] hover:text-theme-blue"
            >
              {link.name}
            </a>
          ))}
        </div>
      );
    }

    if (isPortfolioList) {
      return (
        <button
          type="button"
          onClick={handleBack}
          className="flex w-full items-center gap-2 rounded-lg border border-theme-blue/30 px-4 py-2 text-sm font-medium text-theme-blue hover:border-theme-blue hover:text-theme-blue/80"
        >
          <HomeIcon className="h-4 w-4" aria-hidden="true" />
          <span>{backLabel}</span>
        </button>
      );
    }

    if (isPortfolioDetail) {
      return (
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex w-full items-center gap-2 rounded-lg border border-theme-blue/30 px-4 py-2 text-sm font-medium text-theme-blue hover:border-theme-blue hover:text-theme-blue/80"
          >
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
            <span>{backLabel}</span>
          </button>
          <button
            type="button"
            onClick={handleViewFullPortfolio}
            className="flex w-full items-center gap-2 rounded-lg bg-theme-blue px-4 py-2 text-sm font-semibold text-white hover:bg-theme-blue/90"
          >
            <LayoutGrid className="h-4 w-4" aria-hidden="true" />
            <span>View Full Portfolio</span>
          </button>
        </div>
      );
    }

    return null;
  };

  const showSolidHeader = isScrolled || isPortfolioDetail;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        showSolidHeader
          ? "bg-white/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-white/80 backdrop-blur-sm py-6",
      )}
    >
      <nav className="container relative flex items-center justify-between">
        {isLandingPage ? (
          <a
            href="#hero"
            className="flex items-center text-xl transition-colors hover:text-theme-blue"
          >
            <BrandName
              className="gap-3"
              iconClassName="text-base md:text-lg"
              textClassName="text-base md:text-lg"
            />
          </a>
        ) : (
          <Link
            to="/"
            className="flex items-center text-xl transition-colors hover:text-theme-blue"
          >
            <BrandName
              className="gap-3"
              iconClassName="text-base md:text-lg"
              textClassName="text-base md:text-lg"
            />
          </Link>
        )}

        {isLandingPage && (
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-theme-blue"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {hasMobileMenu && (
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex items-center rounded-md p-2 text-slate-900 hover:text-theme-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-blue"
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        {isPortfolioList && (
          <div className="hidden items-center space-x-3 md:flex md:space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-lg border border-theme-blue/30 bg-transparent px-4 py-2 text-sm font-medium text-theme-blue hover:border-theme-blue hover:text-theme-blue/80"
            >
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              <span>{backLabel}</span>
            </button>
          </div>
        )}

        {isPortfolioDetail && (
          <div className="hidden items-center space-x-3 md:flex md:space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-lg border border-theme-blue/30 bg-transparent px-4 py-2 text-sm font-medium text-theme-blue hover:border-theme-blue hover:text-theme-blue/80"
            >
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              <span>{backLabel}</span>
            </button>
            <button
              type="button"
              onClick={handleViewFullPortfolio}
              className="inline-flex items-center gap-2 rounded-lg bg-theme-blue px-4 py-2 text-sm font-semibold text-white hover:bg-theme-blue/90"
            >
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              <span>View Full Portfolio</span>
            </button>
          </div>
        )}

        {isMobileMenuOpen && hasMobileMenu && (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-200/60 md:hidden">
            {renderMobileMenuContent()}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

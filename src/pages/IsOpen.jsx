import UserNavbar from "../components/UserNavbar";
import HeroIsOpen from "../components/HeroIsOpen";
import Products from "../components/Products"; 
import Footer from "../components/Footer";

export default function IsOpen() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* Logged-In User Header */}
      <UserNavbar />

      {/* Main Content Area */}
      <main className="grow">
        
        {/* Profile Header Hero Component */}
        <HeroIsOpen />

        {/* Menu Categories & Products Section */}
        <div className="mx-auto px-6 sm:px-12 pb-16">
          <Products />
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
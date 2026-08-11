import UserNavbar from "../components/UserNavbar";
import HeroIsOpen from "../components/HeroIsOpen";
import IsClosedProducts from "../components/IsClosedProducts";
import IsCloseFooter from "../components/IsCloseFooter";

export default function IsClose({ onLogout }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <UserNavbar onLogout={onLogout} />
      
      <main className="grow">
        <HeroIsOpen />
        <IsClosedProducts />
      </main>

      <IsCloseFooter />
    </div>
  );
}
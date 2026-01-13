import frtbLogo from "@/assets/frtb-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6">
        <div className="py-4">
          <img 
            src={frtbLogo} 
            alt="FRTB Consultoria Ambiental" 
            className="h-12 w-auto"
            style={{ maxWidth: '150px' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

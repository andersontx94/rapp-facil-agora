import frtbLogo from "@/assets/frtb-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div style={{ paddingTop: '20px', paddingBottom: '16px', paddingLeft: '24px' }}>
        <img 
          src={frtbLogo} 
          alt="FRTB Consultoria Ambiental" 
          style={{ width: '160px', height: 'auto' }}
        />
      </div>
    </header>
  );
};

export default Header;

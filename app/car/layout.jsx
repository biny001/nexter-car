import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="    bg-gray-100            ">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;

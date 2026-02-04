import AddProduct from "../vendor/AddProduct";
import VendorProducts from "../vendor/VendorProducts";
import Footer from "../common/Footer";

export default function VendorDashboard() {
  return (
    <>
      <h2>Vendor Dashboard</h2>
      <AddProduct />
      <VendorProducts />
        <Footer />
    </>
  );
}

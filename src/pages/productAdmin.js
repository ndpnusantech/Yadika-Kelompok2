import AdmSidebar from "../components/layouts/admSidebar/admSidebar";
import Product from "../components/Product/product";
import TableRecap from "../components/tableRecap/tableRecap";

const ProductAdmin = () => {
  return (
    <>
      <AdmSidebar />
      <Product />
      <TableRecap/>
    </>
  );
};
export default ProductAdmin;

import AdmSidebar from "../components/layouts/admSidebar/admSidebar";
import TableRecap from "../components/tableRecap/tableRecap";

const TableRecaps = () => {
  const logooCin = "/assets/logo/logoo 2.png";
  return (
    <>
      <AdmSidebar />
      <img
        src={logooCin}
        alt="logo-CinemaVII"
        style={{
          textAlign: "center",
          width: "20rem",
          marginLeft: "37rem",
          marginBottom: "-1.5rem",
          marginTop: "5rem",
        }}
      ></img>
      <TableRecap />
    </>
  );
};
export default TableRecaps;

import Navbar from "../src/components/layout/Navbar";

const Home = () => {
  const pageName = "Home";

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Navbar title={pageName} />
      <h1 className="text-5xl font-bold">MISO-Prototype | {pageName}</h1>
    </div>
  );
};

export default Home;

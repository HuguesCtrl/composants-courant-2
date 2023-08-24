import ReactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";

function Home() {
  return (
    <div className="padding home">
      <h1>Page Accueil du site</h1>
      <p className="home-para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nobis
        neque reprehenderit enim eum nulla, esse rerum repudiandae quo obcaecati
        porro nam, ab quaerat. Placeat praesentium voluptatum alias debitis
        animi, ex expedita sapiente eveniet! Quia?
      </p>
      <img src={ReactLogo} alt="React" width={150} />
      <img src={viteLogo} alt="React" width={120} />
    </div>
  );
}
export default Home;

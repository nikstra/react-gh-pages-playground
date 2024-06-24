import { useLocation, Link } from "react-router-dom";

const Settings = () => {
  const { state } = useLocation();
  const { modal } = state;
  const returnUrl = "/";

  //   console.log(document);

  return (
    <div className="container">
      <p>
        The settings page are under development. Enjoy a random image for now.
      </p>
      <div className={modal ? "modal" : undefined}>
        {modal && <Link to={returnUrl}>Close</Link>}
        <div>
          <img src="https://picsum.photos/800/600?random" />
        </div>
      </div>
    </div>
  );
};

export default Settings;

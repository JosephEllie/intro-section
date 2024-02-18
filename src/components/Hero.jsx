import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

function Header() {
  return (
    <div className="mt-4 mx-auto max-w-7xl md:flex md:flex-row-reverse  md:justify-between">
      <div className="flex md:hidden ">
        <img src={heroMobile} alt="" />
      </div>
      <div className="hidden md:flex">
        <img src={heroDesktop} alt="" style={{ width: 550, height: 700 }} />
      </div>
      <div className="md:pl-28 md:mt-20 flex flex-col justify-center items-center py-4 gap-8 ">
        <h1 className="text-4xl font-bold pt-4 md:hidden">Make remote work</h1>
        <h1 className="hidden md:block font-bold pt-4 md:text-7xl">
          Make <br /> remote work
        </h1>
        <p className="text-center text-1xl md:hidden">
          Got your team in sync, no matter your location. <br /> Streamline
          processes, create <br />
          team rituals, and watch productivity soar.
        </p>
        <p className="hidden md:block md:mt-8 md:mr-auto text-base">
          Got your team in sync, no matter your location. <br /> Streamline
          processes, create team rituals, and
          <br /> watch productivity soar.
        </p>
        <div className="md:mr-auto md:mt-8">
          <button className="bg-black font-semibold text-1xl text-white py-4 px-6 rounded-lg">
            Learn more
          </button>
        </div>

        <div className="md:mr-auto md:mt-auto flex items-center gap-3 pt-4">
          <img src={databiz} alt="" width={70} className="md:w-[100]" />
          <img src={audiophile} alt="" width={70} className="md:w-[100]" />
          <img src={meet} alt="" width={70} className="md:w-[100]" />
          <img src={maker} alt="" width={70} className="md:w-[100]" />
        </div>
      </div>
    </div>
  );
}

export default Header;

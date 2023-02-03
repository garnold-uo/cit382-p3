import _ from "lodash";
import JupiterMoonData from "./JupiterMoonData";

function ShowJupiterMoons(props) {
  const kmToMiles = (diameterKM) => {
    return Math.round(diameterKM * 0.621371);
  };

  const moons = JupiterMoonData;
  const sortMoonsByField = (moons, field = "diameterKM", sortOrder = "d") => {
    const moonsClone = _.cloneDeep(moons);
    return moonsClone.sort((a, b) => b[field] - a[field]);
  };
  const sortedMoons = sortMoonsByField(moons, "diameterKM");

  const MoonInformation = ({ name, diameterKM, image, link }) => (
    <div key={name}>
      <h3 className="HeaderLink">
        <a href={link}>{name}</a>
      </h3>
      <img src={`/images/${image}`} alt={name} />
      <p>Diamater: {kmToMiles(diameterKM)} miles</p>
    </div>
  );
  return (
    <div>
      <h1>Moons of Jupiter</h1>
      <h3>CIT382 - Project 3</h3>
      {sortedMoons.map((moon) => (
        <MoonInformation key={moon.name} {...moon} />
      ))}
    </div>
  );
}

export default ShowJupiterMoons;

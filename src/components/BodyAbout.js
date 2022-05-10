import Dropdown from "./Dropdown";
import {captions} from "../datas/Caption"

function BodyAbout() {
  return (
    <div className='about-box'>{captions.map(({titre, texte}) => (
      <Dropdown 
      type="about"
      titre={titre}
      texte={texte}
      key={titre}
      />

    ))}
    </div>
  );
}

export default BodyAbout;

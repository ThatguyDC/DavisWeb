
import './Paragraph.css';

const Paragraph = () => {
return (
    
    <div>

    <div className = "SectionHeader">Davis</div>
    
    <div className = "aboutContainer">
    <img className = "Self" src={require("./DavisCowper.jpg")} alt="Davis Cowper"></img>
    <p className = "Paragraph"> 
    Nice to meet you! I'm Davis, an avid Destiny player (addict) and student at Miami University studying game production. 
    I've been creating games and playing with computer hardware for the better part of a decade, and I'm constantly working to improve 
    on my skills in these areas. I create worlds that inspire friendship, and I always look to find and expand the small stories of our silly little world.
    </p>
    </div>
    </div>
 
)
}
export default Paragraph;
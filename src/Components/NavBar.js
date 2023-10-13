
import  './navBar.css';
const navBar = () => {

   
    
    return (
<div className = "navBar" style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gridGap: 10 }}>
        <div className = "navContainer">
        <div className = "nav">
        <a href = "https://github.com/ThatguyDC">Github</a>
        </div>
        <div className = "nav">
        <a href = "https://www.linkedin.com/in/davis-cowper/" target = "blank">LinkedIn</a>
        </div>
        <div className = "nav">
        <a href = "https://twitter.com/Gluten_Guardian">Twitter</a>
        </div>
    </div>
      </div>      
    )
}

export default navBar;
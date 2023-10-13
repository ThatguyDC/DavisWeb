


import './AllProjects.css';


const AllProjects = (props) => {

    
    let projectHeader = "Project Details";
    let renderDescription;
    

    const handleClick = event => {

        //Eventually, change all innerHTML queries to prop variables

        if (event.target.innerHTML === "Pinball" ) {
        console.log(event.target);
        console.log('Pinball');
        document.querySelector(".projIMG").src = require("./pinball.png");
        console.log('Image was set to Pinball');
        renderDescription = props.work[0].description;
        document.querySelector(".projectDescript").innerHTML = renderDescription;
        }
        else if (event.target.innerHTML === "Lunar Lander") {
            console.log("Lunar Lander");
            document.querySelector(".projIMG").src = require("./lunarlander.png");
        console.log('Image was set to Lunar Lander');
        renderDescription = props.work[1].description;
        document.querySelector(".projectDescript").innerHTML = renderDescription;
        }

        else if (event.target.innerHTML === "Lumineers ") { //keep the space after Lumineers, it's busted.
            console.log("Lumineers");
            document.querySelector(".projIMG").src = require("./lumineers.PNG");
            renderDescription = props.work[2].description;
            document.querySelector(".projectDescript").innerHTML = renderDescription;
        }

        else if (event.target.innerHTML === "Sovereign Struggle") {
            console.log("Board game");
            document.querySelector(".projIMG").src = require("./boardgame.PNG");
        console.log('Image was set to Lunar Lander');
        renderDescription = props.work[3].description;
        document.querySelector(".projectDescript").innerHTML = renderDescription;
        }
      };

    return (
        <div>
    
        <div className = "SectionHeader">Projects</div>
       <div className = "Project">
        {
        
        props.work.map(item => <h1 onClick={handleClick} className = "projName">{item.projname}</h1>)  
    }  
</div>
<div className = "ProjectDisplay">
&nbsp;
<h2> {projectHeader} </h2>

<br />

<img className = "projIMG" src={require("./pinball.png")} alt="Pinball Game"></img>



<p className = "projectDescript" onClick={handleClick}>
    {renderDescription}
</p>




</div> 
</div>
    )
}

    export default AllProjects;
        
        
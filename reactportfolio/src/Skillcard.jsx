export default function Skillcard( {skilltitle , skillsrc , skilltext}){

  
    return(
        <div id="skillcard">
            <h3>{skilltitle}</h3>
             <i className={skillsrc}></i>
            <p style={
                {textAlign:"center",
                                }
                        }>{skilltext}</p>
        </div>
    );
}


export default function Projectcard({ projimg , projtitle , projdest , imgalt}){

    return(
        <div className="projcard">
            <img src={projimg} alt={imgalt} />
            <h5>{projtitle}</h5>

            
            
            <a href={projdest}>view</a>
        </div>

    );

};
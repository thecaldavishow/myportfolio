export default function Contactlink({ soclink , soctitle , socsrc}){

 
    
    return(

        <div id="contlink">
           <i className={socsrc}></i>
            <a href={soclink}>{soctitle}</a>
        </div>
    );
}
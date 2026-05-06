export default function Form(){

    return(

        <form action="" id="form">

            <label htmlFor="">First Name</label>
            <input type="text" placeholder="John" required />
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Doe" required/>
            <label htmlFor="">Email</label>
            <input type="email" required  placeholder="johndoe@mail.com"/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" maxLength={14} required/>
            <button id="formbtn" type="submit">Send</button>
        </form>
    );
}
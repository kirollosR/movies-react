import React, { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
    // 1. useState [initial state of component]
    const [ContactUsForm, setContactUsFom] = useState({
        email: '',
        message: '',
    });

    // 2. useEffect, life cycle of component
    //ON RE-RENDERING
    useEffect(() => {
        console.log('First Render'); //Entering page

        return () => {
            console.log('Leaving page'); //Leaving page
        };
    }, []); // [] --> run only once

    //When email or message changes
    useEffect(() => {
        console.log('ContactUsForm values changed');
    }, [ContactUsForm]); 
    
    //3. useRef
    const feedback = useRef([])
    
    

    const submit = (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log(ContactUsForm); // Call api to save data
        console.log(feedback.current["feedback"].value); // Call api to save data
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Contact Us</h1>
            <form onSubmit={(e) => submit(e)}>
                <label htmlFor="email">Email: </label>
                <label style={{color: "darkred"}}> * </label>
                <input 
                    type='email' 
                    id='email' 
                    required
                    value={ContactUsForm.email} 
                    onChange={(event) => setContactUsFom({...ContactUsForm, email: event.target.value})}
                />
                <br/><br/>

                <label htmlFor="feedback">Feedback: </label>
                <label style={{color: "darkred"}}> * </label>
                <input 
                    type='text' 
                    id='feedback' 
                    required
                    ref={(ref) => feedback.current['feedback'] = ref}
                />
                <br/><br/>

                <label htmlFor="message">Message: </label>
                <label style={{color: "darkred"}}> * </label>
                <textarea 
                    placeholder='Write your message here' 
                    id='message' value={ContactUsForm.message} 
                    required
                    onChange={(event) => setContactUsFom({...ContactUsForm, message: event.target.value})}
                />

                <br/><br/>

                <button className='btn btn-primary' type='submit'>submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
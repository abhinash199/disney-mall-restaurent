import React, { useState } from 'react'
import "./styles/feedback.css"
import { Button, Form } from 'react-bootstrap'
import StarRating from "./StarRating"
function Feedback() {

    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);

    const handleChange1 = (value) => {
        setRating1(value);
        console.log("hv",value)
    }
    const handleChange2 = (value) => {
        setRating2(value);
    }
    const handleChange3 = (value) => {
        setRating3(value);
    }
    
    return (
        <>
            <section className='feedback-section'>
                <div className='container'>


                    <div className='text-center feedback-heading'>
                        <h3>Feedback Form</h3>
                        <p>There are numerous ways to improve your restaurant, and the first step is to learn what your customers like and dislike. They can inform you of various service or menu enhancements. But how would you go about asking your customers? To address this issue, we designed an online feedback form for restaurants.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='main-content'>
                        <div className='text-center mt-10 form-heading'>
                            <h2>Restaurant Feedback Form</h2>
                        </div>
                        <div className='form-content'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className='form-name'>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name"  required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupphonel">
                                    <Form.Label className='form-name'>Mobile No.</Form.Label>
                                    <Form.Control type="phone" placeholder="Mobile No." required maxLength={10} pattern={0-9} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupphonel">
                                    <Form.Label className='form-name'>Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter date"  required />
                                </Form.Group>
                                <Form.Label className='form-name'>
                                    Rate our Food quality</Form.Label>
                                <div className='star'>
                                <StarRating
                                    count={5}
                                    size={25}
                                    value={rating1}
                                    activeColor={'red'}
                                    inactiveColor={'#ddd'}
                                    onChange={handleChange1} />
                                </div>
                                
                                <Form.Label className='form-name'>Rate our Service </Form.Label>
                                <div className='star'>
                                <StarRating
                                    count={5}
                                    size={25}
                                    value={rating2}
                                    activeColor={'red'}
                                    inactiveColor={'#ddd'}
                                    onChange={handleChange2} />
                                </div>
                                <Form.Label className='form-name'>Rate our Cleaniness</Form.Label>
                                <div className='star'>
                                <StarRating
                                    count={5}
                                    size={25}
                                    value={rating3}
                                    activeColor={'red'}
                                    inactiveColor={'#ddd'}
                                    onChange={handleChange3} />
                                </div>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label className='form-name'>Do you have any comments or suggestions for us to improve?</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder='Please enter your response' />
                                </Form.Group>
                                <Button type='submit' className='submit-button' variant='danger'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Feedback;
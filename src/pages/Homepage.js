import Form from 'react-bootstrap/Form';
import Homeimg from '../img/home.jpg'

function Homepage(){
    return(
        <div id="home">
            <div className="row">
                <div className="col .col-sm-6">
                    <h3>Lorem Ipsum</h3>
                    <h3>Neque porro quisquam </h3>
                    <h3>est qui dolorem ipsum quia </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisl urna. Sed et hendrerit justo.
                     Cras luctus metus neque, ac lobortis risus pharetra sit amet.</p>
                     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <button id='Button' className='mt-4' type='submit'>submit</button>
      </Form.Group>
      </Form>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nisl urna. Sed et hendrerit justo.</p>

                </div>
                <div className="col .col-sm-6">
                    <img className='image fluid' src={Homeimg} alt="home"/>
                </div>
            </div>
        </div>
    );
}
export default Homepage;
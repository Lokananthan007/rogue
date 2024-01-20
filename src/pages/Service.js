import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { IoMdContact } from "react-icons/io";
import { MdOutlineGraphicEq } from "react-icons/md";
import { MdOutlineBlurCircular } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";

function Service(){
    return(
        <div id="servies">
            <div className="row">
                <div className="col">
                    <h3>Lorem Ipsum <br/>Neque porro quisquam<br/>
                    est qui dolorem ipsum quia</h3>
                </div>
                <div className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Quisque ac nisl urna. Sed et hendrerit justo.
                    </p>
                </div>
            </div>
            <div className="row">
            <CardGroup>
      <Card className='card'>
      <IoMdContact />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
      <MdOutlineGraphicEq />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr 
          dolor amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
      <MdOutlineBlurCircular />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
         
            </div>
            <div className="row">
            <CardGroup>
      <Card className='card'>
      <GrSystem />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
      <FaTelegramPlane />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr 
          dolor amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
      <PiNotePencilDuotone />
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor
          amet kasd elitr duo vero amet amet stet
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
         
            </div>
            <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            </div>
        </div>
    );
}
export default Service;
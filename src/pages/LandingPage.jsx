import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = () =>{
    //navigate to home page
    navigate('/home')
  }
  return (
   <> 
   <div className="container mt-5">
    <div className='header row align-items-center m-5'>
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
        <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, impedit. Dolorem consequatur dolores ad reiciendis. Voluptatum quidem, id magni ducimus qui nam illo? Minus inventore quod magni! Veniam, deleniti vel.</p>
        <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </div>
    </div>
    <div className='features'>
    <h3 className='text-center'>Features</h3>
    <div className="row mt-5">
        <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://bestanimations.com/Music/get-lost-in-themusic-turntables-space-animated-gif-image.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://bestanimations.com/Music/crazy-lightshow-rave-concert-animated-gif-4.gif" />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thatdrop.com/wp-content/uploads/2014/09/tumblr_n4o1ohptsp1rtutkqo1_500.gif" />
      <Card.Body>
        <Card.Title>mange gfd</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    <div className='video row border p-5 mt-5 rounded mb-5 align-items-center'>
      <div className="col-lg-5">
        <p><strong className='text-bold'>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Quam delectus </p>
        <p><strong className='text-bold'>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Quam delectus </p>
        <p><strong className='text-bold'>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Quam delectus </p>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WWr9086eWtY?si=SaDNsIsbKGBfQTM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      </div> 
   </div>
   <hr />
   </>
  )
}

export default LandingPage
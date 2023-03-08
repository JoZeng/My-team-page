import "./App.css";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";

function App() {
  return (
    <div className="App">
      <div className="container-cards">
        <div className="card1">
        <span id="span1">The creative crew</span>

        <div className="subcard">
          <span id="span2">WHO WE ARE</span>
          <span id="span3">
            We are team of creatively diverse. driven. <br></br>
            innovative individuals working in various <br></br>
            locations from the world.{" "}
          </span>
        </div>
        </div>
        <div className="card-master">
          <div className="subcard1">
            <div className="subcard-img1">
              <img src={photo1} alt="photo1"/>
              <p>Bill Mahoney</p>
            </div>
            <span id="job">PRODUCT OWNER</span>
          </div>

          <div className="subcard2">
            <div className="subcard-img2">
              <img src={photo2} alt="photo2" />
              <p>Saba Cabrera</p>
            </div>
            <span id="job">ART DIRECTOR</span>
          </div>

          <div className="subcard3">
            <div className="subcard-img3">
              <img src={photo3} alt="photo3" />
              <p>Shae Le</p>
            </div>
            <span id="job">TECH LEAD</span>
          </div>

          <div className="subcard4" >
            <div className="subcard-img1" >
              <img src={photo4} alt="photo4" />
              <p>Bill Mahoney</p>
            </div>
            <span id="job">PRODUCT OWNER</span>
          </div>

          <div className="subcard5">
            <div className="subcard-img2" >
              <img src={photo5} alt="photo5" />
              <p>Saba Cabrera</p>
            </div>
            <span id="job">ART DIRECTOR</span>
          </div>

          <div className="subcard6">
            <div className="subcard-img3" >
              <img src={photo6} alt="photo6" />
              <p>Shae Le</p>
            </div>
            <span id="job">TECH LEAD</span>
          </div>
          
        </div>
          <footer>created by <a href="https://github.com/JoZeng">JoZeng</a>  - devChallenges.io</footer>
        </div>
    </div>
  );
}

export default App;

// import ReactPopUp from './components/ReactPopUp'

import ReactSlick from './components/ReactSlick'
import VideoPlayer from './components/VideoPlayer'

import './App.css'

const App = () => (
  <div>
    <div className="heading-container">
      <h1 className="heading">BeSpoke Interior Design Solutions</h1>
      <p className="description">Let Us Give Your Home a New Face</p>
    </div>
    <div className="button-container">
      <button className="btn" type="button">
        REVAMP YOUR HOME TODAY
      </button>
    </div>
    <div className="container">
      <h1>
        GETTING PERSONALIZED INTERIOR IN HYDERABAD HAS NEVER BEEN THIS EASY
      </h1>
    </div>
    <div className="">
      <p className="desc1">
        See how our most sought-after interior designers in Hyderabad have
        previous worked their magic to create exceptional and purposeful spaces
        for our clients.
      </p>
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650763717/Gallery-images-1_rxf8it.jpg"
          alt="loader"
          className="image"
        />
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650763733/Gallery-images-2_vao31a.jpg"
          alt="loader"
          className="image"
        />
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650763747/Gallery-images-3_kxlamw.jpg"
          alt="loader"
          className="image"
        />
      </div>
    </div>
    <div className="why-container">
      <h1 className="head1">WHY CHOOSE US ?</h1>
      <div className="why-container-media">
        <div className="images">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650764278/anniversary.png-a_yvhxf7.png"
            alt="anniversary"
            className="image1"
          />
          <p className="desc2">25 Years of Experience</p>
        </div>
        <div className="images">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650764268/calendar.png-a_betdn6.png"
            alt="anniversary"
            className="image1"
          />
          <p className="desc2">45 Days Average Installation Time</p>
        </div>
        <div className="images">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650764258/storage_tvazxm.png"
            alt="anniversary"
            className="image1"
          />
          <p className="desc2">20% Extra Storage Area Created</p>
        </div>
        <div className="images">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765512/long-distance_htqyxe.png"
            alt="loader"
            className="image1"
          />
          <p className="desc2">
            Design solutions Provided To Customers Across 3Continents
          </p>
        </div>
        <div className="images">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765505/sales-support-a_lm81ka.png"
            alt="loader"
            className="image1"
          />
          <p className="desc2">A Life Time OfPost-Installation Service</p>
        </div>
      </div>
    </div>
    <div className="client-words">
      <div className="button-container">
        <button className="btn1" type="button">
          GET QUOTATION
        </button>
      </div>
      <h2>A FEW WORDS FROM OUR CLIENTS</h2>
      <div>
        <ReactSlick />
      </div>
      <div>
        <VideoPlayer />
      </div>
      <div className="button-container">
        <button className="btn1" type="button">
          BE ANOTHER STUDIO MARIGOLD SUCCESS STORY
        </button>
      </div>
    </div>
    <div className="video-head">
      <p className="desc1">
        From giving a new and distinctive look to the existing furniture to
        redesigning your home to add a contemporary flair to it, Studio Marigold
        has cost-effective design solutions for your every requirement.
      </p>
      <h1 className="hed4">SPACE WEB DESIGN</h1>
    </div>
    <div className="house-cont">
      <div className="house">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765830/Spaces-images-Homes_wxqn0t.jpg"
          alt="home"
        />
        <h3 className="head3">Homes</h3>
        <p className="desc3">
          1/2/3/4/5 BHK | Bungalows | Villas | Studio Apartment | Penthouses
        </p>
      </div>
      <div className="house">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765818/Spaces-images-rooms_yp2c6w.jpg"
          alt="home"
        />
        <h3 className="head3">Rooms</h3>
        <p className="desc3">Bedrooms | Living Room | Pantry</p>
      </div>
      <div className="house">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765852/Spaces-images-Bathroom_1_iltb32.jpg"
          alt="home"
        />
        <h3 className="head3">Bathroom</h3>
        <p className="desc3">Full | Half | Quarter| Split | Jack-and-Jill</p>
      </div>
      <div className="house">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765837/Spaces-images-Kitchen_osozb2.jpg"
          alt="home"
        />
        <h3 className="head3">Modular Kitchen</h3>
        <p className="desc3">Parallel | L-shaped | U-Shaped |Open</p>
      </div>
      <div className="house">
        <img
          src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650765844/Spaces-images-outdoors_q7zbfh.jpg"
          alt="home"
        />
        <h3 className="head3">Outdoor</h3>
        <p className="desc3">Patio | Gazebo</p>
      </div>
    </div>
    <h1 className="hed4">SERVICES WE PROVIDE</h1>
    <div className="complete">
      <div className="">
        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766728/design-consultation-a_cqvruv.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">Complete design consultation </p>
        </div>
        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766748/furnitures-a_zlf1ij.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">Customized furniture & furshinings </p>
        </div>
      </div>
      <div>
        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766757/vastu_tzpybk.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">Vastu-complaint decor</p>
        </div>
        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766695/delivery-a_no5ey3.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">Purchasing,delivery,& installation.</p>
        </div>
      </div>
      <div>
        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766714/sales-support-a_1_gbtrsp.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">After-sales support</p>
        </div>

        <div className="img-container3">
          <img
            src="https://res.cloudinary.com/dzlwkon9z/image/upload/v1650766702/contact-assistance-a_sxopln.png"
            alt="design"
            className="images3"
          />
          <p className="desc5">One point contact for all assistance.</p>
        </div>
      </div>
    </div>
    <div className="button-container">
      <button className="btn1" type="button">
        TELL US WHAT WE CAN DO FOR YOU
      </button>
    </div>
    <div className="">
      <h2 className="head3">
        HEAR WHAT OUR INTERIOR DESIGNER, DEEPA SEN,HAS TO SAY
      </h2>
      <VideoPlayer />
      <button className="btn2" type="button">
        BOOK A FREE CONSULTATION WITH DEEPA SEN TODAY
      </button>
    </div>
    <div className="bottom-container">
      <h2>
        3 PERSONALIZED DESIGN PACKAGES FROM ONE OF THE TOP INTERIOR DESIGNERS IN
        HYDERABAD
      </h2>
      <div className="bottom1">
        <div className="bottom-container1">
          <h3>LIFESTYLE TURNKEY PACKAGE</h3>
          <p>You get complete home decor and renovation services, including</p>
          <ul>
            <li>
              Personalized lighting, flooring. cabinet,&counterop surfacing
              solutions
            </li>
            <li>Procurement assistance</li>
            <li>Professional execution</li>
          </ul>
          <div className="btn34">
            <button className="btn3" type="button">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="bottom-container1">
          <h3>LIFESTYLE TURNKEY PACKAGE</h3>
          <p>You get complete home decor and renovation services, including</p>
          <ul>
            <li>
              Personalized lighting, flooring. cabinet,&counterop surfacing
              solutions
            </li>
            <li>Procurement assistance</li>
            <li>Professional execution</li>
          </ul>
          <div className="btn34">
            <button className="btn3" type="button">
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="bottom-container1">
          <h3>LIFESTYLE TURNKEY PACKAGE</h3>
          <p>You get complete home decor and renovation services, including</p>
          <ul>
            <li>
              Personalized lighting, flooring. cabinet,&counterop surfacing
              solutions
            </li>
            <li>Procurement assistance</li>
            <li>Professional execution</li>
          </ul>
          <div className="btn34">
            <button className="btn3" type="button">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="form-box">
      <form>
        <div className="form-section-label">
          <label htmlFor="cars">BUDGET</label>
        </div>
        <div className="labels">
          <select className="section" name="cars" id="cars" form="carform">
            <option value="Option1">option1</option>
            <option value="Option2">0ption2</option>
            <option value="Option3">0ption3</option>
            <option value="Option4">option4</option>
          </select>
        </div>
        <div className="form-section-label">
          <label htmlFor="cars">SQUARE FOOTAGE</label>
        </div>
        <div className="labels">
          <select className="section" name="cars" id="cars" form="carform">
            <option value="Option1">option1</option>
            <option value="Option2">0ption2</option>
            <option value="Option3">0ption3</option>
            <option value="Option4">option4</option>
          </select>
        </div>
        <div className="form-section-label">
          <label htmlFor="cars">PROPERTY TYPE</label>
        </div>
        <div className="labels">
          <select className="section" name="cars" id="cars" form="carform">
            <option value="Option1">option1</option>
            <option value="Option2">0ption2</option>
            <option value="Option3">0ption3</option>
            <option value="Option4">option4</option>
          </select>
        </div>
        <div className="form-section-label">
          <label htmlFor="cars">BEDROOMS</label>
        </div>
        <div className="labels">
          <select className="section" name="cars" id="cars" form="carform">
            <option value="Option1">option1</option>
            <option value="Option2">0ption2</option>
            <option value="Option3">0ption3</option>
            <option value="Option4">option4</option>
          </select>
        </div>
        <div className="form-section-label">
          <label htmlFor="cars">SCOPE OF WORK</label>
        </div>
        <div className="labels">
          <select className="section" name="cars" id="cars" form="carform">
            <option value="Option1">option1</option>
            <option value="Option2">0ption2</option>
            <option value="Option3">0ption3</option>
            <option value="Option4">option4</option>
          </select>
        </div>
      </form>
    </div>
  </div>
)

export default App

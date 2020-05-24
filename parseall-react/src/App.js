import React from 'react';
import './css/animate.min.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/templatemo-style.css';
import teamImg1 from './images/team-img1.jpg';
import teamImg2 from './images/team-img2.jpg';
import portfolioImg1 from './images/portfolio-img1.jpg';
import portfolioImg2 from './images/portfolio-img2.jpg';
import portfolioImg3 from './images/portfolio-img3.jpg';
import portfolioImg4 from './images/portfolio-img4.jpg';

function App() {
  return (
    <div className="App">

      {/*<!-- start header -->*/}
      <header>
      </header>
      {/*<!-- end header -->*/}
      {/*<!-- start navigation -->*/}
      <nav className="navbar navbar-default templatemo-nav" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Fraga IT</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#top">Home</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Portifolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/*<!-- end navigation -->*/}
      {/*<!-- start home -->*/}
      <section id="home">
        <div className="container">
          <div className="row">
            <div className=" col-md-8">
              <h1 className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">Software Dev. Studio <span> Fraga IT </span></h1>
              <div className="element">
                <div className="sub-element">Freelancer for Web and Mobile Development.</div>
                <div className="sub-element">Deploy apps to cloud platforms AWS and Google.</div>
                <div className="sub-element">Build Hybrid Apps with Flutter.</div>
                <div className="sub-element">Consulting for GIS applications.</div>
              </div>
              <a data-scroll href="#service" className="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">GET STARTED</a>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- end home -->*/}
      {/*<!-- start team -->*/}
      <section id="team">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>Fraga IT </span> Players</h2>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">

            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
              <div className="team-wrapper">
                <img src={teamImg1} className="img-responsive" alt="team img 1" />
                <div className="team-des">
                  <h4>Gustavo Fraga</h4>
                  <span>Software Engineer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.6s">
              <div className="team-wrapper">
                <img src={teamImg2} className="img-responsive" alt="team img 2" />
                <div className="team-des">
                  <h4>Marcelo Fraga</h4>
                  <span>Software Engineer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s"></div>
          </div>
        </div>
      </section>
      {/*<!-- end team -->*/}

      {/*<!-- start service -->*/}
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">Our <span>Services</span></h2>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <i className="fa fa-laptop"></i>
              <h4>Web Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                          tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
              <i className="fa fa-cloud"></i>
              <h4>Cloud Computing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                          tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <i className="fa fa-cog"></i>
              <h4>Mobile Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque
                          tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- end servie -->*/}
      {/*<!-- start portfolio -->*/}
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>Fraga IT</span> Portifolio</h2>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img src={portfolioImg1} className="img-responsive" alt="portfolio img 1" />
                <div className="portfolio-overlay">
                  <h4>Project One</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>

                  <a href="#" className="btn btn-default" data-toggle="modal" data-target="#modalCenter">DETAIL</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img src={portfolioImg2} className="img-responsive" alt="portfolio img 2" />
                <div className="portfolio-overlay">
                  <h4>Project Two</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                  <a href="#" className="btn btn-default" data-toggle="modal" data-target="#modalCenter">DETAIL</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img src={portfolioImg3} className="img-responsive" alt="portfolio img 3" />
                <div className="portfolio-overlay">
                  <h4>Project Three</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                  <a href="#" className="btn btn-default" data-toggle="modal" data-target="#modalCenter">DETAIL</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="portfolio-thumb">
                <img src={portfolioImg4} className="img-responsive" alt="portfolio img 4" />
                <div className="portfolio-overlay">
                  <h4>Project Four</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                  <a href="#" className="btn btn-default" data-toggle="modal" data-target="#modalCenter">DETAIL</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- end portfolio -->*/}
      {/*<!-- start contact -->*/}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">Contact <span>Fraga IT</span></h2>
            </div>
            <h4>Social Media</h4>
            <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
              <ul className="social-icon">
                <li>

                </li>
                <li>
                  <a href="https://www.linkedin.com/in/gustavo-fraga/" target="_blank" className="fa fa-linkedin"></a>
                </li>
                <li>
                  <a href="https://github.com/gfraga" target="_blank" className="fa fa-github"></a>
                </li>
                <li>
                  Gustavo Fraga
                          </li>
              </ul>
              <ul></ul>
              <ul className="social-icon">
                <li>

                </li>
                <li>
                  <a href="https://www.linkedin.com/in/marcelo-thiago-fraga-469b57a5/" target="_blank" className="fa fa-linkedin"></a>
                              Marcelo Fraga
                          </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- end contact -->*/}
      {/*<!-- start copyright -->*/}
      <footer id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                Fraga IT  Software Studio</p>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- end copyright -->*/}
      {/*<!-- Modal -->*/}
      <div className="modal fade" id="modalCenter" tabIndex="-1" role="dialog" aria-labelledby="Fraga IT" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Project XXX</h5>
            </div>
            <div className="modal-body">
              Project details
                  </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- End Modal -->*/}
    </div>
  );
}

export default App;

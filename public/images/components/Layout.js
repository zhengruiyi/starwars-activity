import React, {Component} from 'react';
import '../styles/App.css';

export default class BaseLayout extends Component {

  render(){
    {/*
      Creat two inline variables:
      titleStyle (font, Arizonia. size, 150) for 'restaurant-name'
      subtitleStyle (font, Raleway. size, 80) for 'subtitle'
      */}
    let titleStyle = {
      "fontFamily": "Arizonia",
      "fontSize": "150"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "80"
    }
    {/*
      Create an inline.
      headerSytle:
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(http://www.joysthaifood.com/wp-content/uploads/2016/03/Thai-fish-Lemon-Soup.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow": "1px 17px 5px 0px rgba(0, 0, 0, 0.75)",
      "fontFamily": "decorative",
      */}
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(http://www.joysthaifood.com/wp-content/uploads/2016/03/Thai-fish-Lemon-Soup.jpg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow": "1px 17px 5px 0px rgba(0, 0, 0, 0.75)",
      "fontFamily": "decorative",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row">
          <div className="col-md-11 nav-bar-col">
            <a href="#"><div className="facebook"></div></a>
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Events</a></li>
              <li role="presentation"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-12 header" style={headerStyle}>
            <div className="header-title">
              <h1 className="restaurant-name" style={titleStyle}>Majestic Thai</h1>
              <h3 className="subtitle" style={subtitleStyle}>East Meets West</h3>
            </div>
          </div>
        </nav>
            {this.props.children}
        <footer className="col-md-11">
          <span className="footer-title">Majestic Thai </span><span>100 Main Street, Spartanburg, SC, 29302 | (864) 898-9999</span>
        </footer>
      </div>
    );
  }
}

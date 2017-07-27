import React, { Component } from 'react';
// Import Link <<<<<<<<<<<<<<<<<<


class List extends Component {
  render(){
    console.log('props', this.props.starships)
    let data = this.props.starships;
    let List = data.map((starships)=>{
      let films = starships.films.map((films)=>{
        let endpoint = films.substr(films.indexOf("/api/") + 5);
        return <li key={films}>
            {/*Add a Link set to /films. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<*/}
          </li>
      })
      return (
        <div key={starships.name} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
            <div className="profile">
              <h3 className = "headings">
                <i className="fa fa-space-shuttle" aria-hidden="true"></i>
                 {starships.name}
              </h3>
              <hr/>
              <h4 className = "sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>MGLT</dt>
                <dd>{starships.MGLT}</dd>
                <dt>Manufacturer</dt>
                <dd>{starships.manufacturer}</dd>
                <dt>Model</dt>
                <dd>{starships.model}</dd>
                <dt>Class</dt>
                <dd>{starships.starship_class}</dd>
                <dt>Cargo</dt>
                <dd>{starships.cargo_capacity}</dd>
                <dt>Length</dt>
                <dd>{starships.length}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-6">
            <h4 className = "sub-headings">Film Enpoints</h4>
            <hr/>
            <ul>
              {films}
            </ul>
          </div>
        </div>
      )
    })
    return(
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">Starships</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'starships': [],
    }
  }

  componentDidMount(){
    let url ="https://swapi.co/api/starships/";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({starships: data.results})
    });
  }


  render() {
    console.log('render', this.state)
    // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <List starships={this.state.starships}/>
      </div>
    );
  }
}

export default Starships;

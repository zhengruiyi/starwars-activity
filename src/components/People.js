import React, { Component } from 'react';
// Import Link <<<<<<<<<<<<<


class List extends Component {
  render(){
    console.log('props', this.props.people)
    let data = this.props.people;
    let List = data.map((people)=>{
      let url = people.url;
      let endpoint = url.substr(url.indexOf("/api/") + 5);
      let films = people.films.map((films)=>{
        let endpoint = films.substr(films.indexOf("/api/") + 5);
        return <li key={films}>
          {/*Add a Link set to /films. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<<<<<<<<<<*/}
        </li>
      })
      let starships = people.starships.map((starships)=>{
        let endpoint = starships.substr(starships.indexOf("/api/") + 5 );
        return <li key={starships}>
          {/*Add a Link set to /starships. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<<<*/}
          </li>
      })
      return (
        <div key={people.name} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-4">
            <div className="profile">
              <h3 className = "headings">
                <i className="fa fa-user" aria-hidden="true"></i>
                  {people.name}
              </h3>
              <h4 className = "sub-headings">API Endpoint: {endpoint}</h4>
              <hr/>
              <h4 className = "sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Birth Year</dt>
                <dd>{people.birth_year}</dd>
                <dt>Gender</dt>
                <dd>{people.gender}</dd>
                <dt>Mass</dt>
                <dd>{people.mass}</dd>
                <dt>Height</dt>
                <dd>{people.height}</dd>
                <dt>Eye Color</dt>
                <dd>{people.eye_color}</dd>
                <dt>Hair Color</dt>
                <dd>{people.hair_color}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className = "sub-headings">Film Enpoints</h4>
            <hr/>
            <ul>
              {films}
            </ul>
          </div>
          <div className="col-lg-4">
            <h4 className = "sub-headings">Starship Enpoints</h4>
            <hr/>
            <ul>
              {starships}
            </ul>
          </div>
        </div>
      )
    })
    return(
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">Characters</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'people': [],
    }
  }

  componentDidMount(){
    let url ="https://swapi.co/api/people/";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({people: data.results})
    });
  }


  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <List people={this.state.people}/>
      </div>
    );
  }
}

export default People;

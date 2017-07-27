import React, {Component} from 'react';
// Import Link <<<<<<<<<<<<

class List extends Component {
  render() {
    console.log('props', this.props.films)
    let data = this.props.films;
    let List = data.map((films) => {
      let url = films.url;
      let endpoint = url.substr(url.lastIndexOf('s/*') - 1, 1);
      let characters = films.characters.map((characters) => {
        let endpoint = characters.substr(characters.indexOf("/api/") + 5);
        return <li key={characters}>
            {/*Add a Link set to /charaters. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<<<*/}
        </li>
      })
      let starships = films.starships.map((starships) => {
        let endpoint = starships.substr(starships.indexOf("/api/") + 5);
        return <li key={starships}>
            {/*Add a Link set to /starships. Pass in the value of 'endpoint' for the text <<<<<<<<<<<<<<<<<<*/}
        </li>
      })

      return (
        <div key={films.episode_id} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
            <div className="profile">
              <h3 className="headings">
                <i className="fa fa-film" aria-hidden="true"></i>
                {films.title}
              </h3>
              <h4 className="sub-headings">API Endpoint: {endpoint}</h4>
              <hr/>
              <h4 className="sub-headings">Profile</h4>
              <dl className="dl-horizontal">
                <dt>Opening</dt>
                <dd>{films.opening_crawl}</dd>
                <dt>Director</dt>
                <dd>{films.director}</dd>
                <dt>Producer</dt>
                <dd>{films.producer}</dd>
                <dt>Episode</dt>
                <dd>{films.episode_id}</dd>
                <dt>Release</dt>
                <dd>{films.release_date}</dd>
              </dl>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="sub-headings">Characters Endpoint</h4>
            <hr/>
            <ul>
              {characters}
            </ul>
          </div>
          <div className="col-lg-4"></div>
          <h4 className="sub-headings">Starships Endpoint</h4>
          <hr/>
          <ul>
            {starships}
          </ul>
        </div>
      )
    })
    return (
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">Films</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'films': []
    }
  }

  componentDidMount() {
    let url = "https://swapi.co/api/films/";
    // Fetch data from API
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({films: data.results})
    });
  }

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <List films={this.state.films}/>
      </div>
    );
  }
}

export default Films;

import React, { Component } from "react";
import axios from "axios";

const API_URL = "https://reqres.in/api/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      errorInfo: null,
      appName: "List of People",
      data: [],
    };
  }

/**
 * Sort array of objects first by last name and first name
*/
  sortData(data) {
    data.sort((a, b) =>
      a.last_name > b.last_name
        ? 1
        : a.last_name === b.last_name
        ? a.first_name > b.first_name
          ? 1
          : -1
        : -1
    );
  }

  getInfo() {
    axios
      .get(`${API_URL}?per_page=12`)
      .then(({ data }) => {
        this.sortData(data.data);
        this.setState({
          data: data.data,
        });
        this.setState({
          error: false,
        });
      })
      .catch((err) => {
        this.setState({ error: true });
        this.setState({ errorInfo: err.message });
      });
  }

  searchData(e) {
    let queryData = [];
    if (e.target.value !== "") {
      this.state.data.forEach(function (person) {
        let fullName = person.last_name + " " + person.first_name;
        if (
          fullName
            .toLowerCase()
            .indexOf(e.target.value.trim().toLowerCase()) !== -1
        ) {
          queryData.push(person);
        }
      });
    } else {
      this.getInfo();
      this.setState({ data: queryData });
    }
    this.setState({ data: queryData });
  }

  componentDidMount() {
    this.setState({ data: [] });
    this.getInfo();
  }

  render() {
    return (
      <div>
        <Header name={this.state.appName} />
        <SearchBar search={this.searchData.bind(this)} />
        <SearchResult data={this.state.data} errorInfo={this.state.errorInfo} />
      </div>
    );
  }
}
export default App;

class Header extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.search} placeholder="Search person" />
      </div>
    );
  }
}

class SearchResult extends Component {
  render() {
    return (
      <div>
        <pre>{this.props.errorInfo}</pre>
        <ul>
          {this.props.data.map(function (person) {
            return <Item key={person.id} val={person} />;
          })}
        </ul>
      </div>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.val.avatar}
          alt={`${this.props.val.last_name}, ${this.props.val.first_name}`}
        />
        <div>
          <p>
            {this.props.val.last_name}, {this.props.val.first_name}{" "}
            <a href={`mailto:${this.props.val.email}`}>
              {this.props.val.email}
            </a>{" "}
          </p>
        </div>
      </li>
    );
  }
}

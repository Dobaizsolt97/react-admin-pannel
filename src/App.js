import React from "react";
import UserList from "./components/UserList";
import UserAddForm from "./components/UserAddForm";
import "./App.css";
import Card from "./components/Card.jsx";
import PostList from "./components/PostList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "#fff",
      text: "#000",
      users: [],
      posts: [],
      displaying: "users",
    };
  }

  async componentDidMount() {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await userResponse.json();
    const filteredUsers = users.filter((user) => user.id < 4);
    filteredUsers.forEach((user) => {
      user.isGoldClient = false;
    });
    this.setState({ users: filteredUsers });
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    let filtered = posts.filter((post) => post.id <= 10);
    this.setState({ posts: filtered });
  }

  changeBackgroundColor(event) {
    this.setState({ background: event.target.value });
  }
  changeTextColor(event) {
    this.setState({ text: event.target.value });
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  removeUser(id) {
    this.setState((prevState) => {
      let newUsers = prevState.users.filter((user) => user.id !== id);
      return {
        users: newUsers,
      };
    });
  }

  submitAddForm(event, name, email, isGoldClient, salar, link) {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salar,
            link,
          },
        ],
      };
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div
        className="app"
        style={{ background: this.state.background, color: this.state.text }}
      >
        <div className="color-picker">
          <span>Schimba culoarea fundalului</span>
          <input
            type="color"
            onChange={(event) => this.changeBackgroundColor(event)}
          />

          <span>Schimba culoarea textului</span>
          <input
            type="color"
            onChange={(event) => this.changeTextColor(event)}
          />
        </div>

        <h1>Admin panel</h1>
        <Card>
          <UserAddForm
            submitAddForm={(event, name, email, isGoldClient, salar, link) =>
              this.submitAddForm(event, name, email, isGoldClient, salar, link)
            }
          />
        </Card>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => this.setState({ displaying: "users" })}
          >
            Afiseaza Useri
          </button>
          <button
            className="btn"
            onClick={() => this.setState({ displaying: "posts" })}
          >
            Afiseaza Postari
          </button>
        </div>
        {this.state.displaying === "users" ? (
          <Card>
            <UserList
              users={this.state.users}
              removeUser={(id) => this.removeUser(id)}
            />
          </Card>
        ) : (
          <Card>
            <PostList posts={this.state.posts} />
          </Card>
        )}
      </div>
    );
  }
}

export default App;

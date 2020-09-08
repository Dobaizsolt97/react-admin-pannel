import React from "react";
import "./UserAddForm.css";
class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isGoldClient: false,
      link: "https://via.placeholder.com/150",
      salar: "",
    };
  }

  updateOnUserInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { name, email, isGoldClient, salar, link } = this.state;
    console.log(this.props.submitAddForm);
    return (
      <form
        className="user-add-form"
        onSubmit={(event) =>
          this.props.submitAddForm(
            event,
            name,
            email,
            isGoldClient,
            salar,
            link
          )
        }
      >
        <h2>Adauga utilizatori:</h2>
        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          name="name"
          onChange={(event) =>
            this.updateOnUserInput("name", event.target.value)
          }
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(event) =>
            this.updateOnUserInput("email", event.target.value)
          }
        />
        <div className="user-add-form_checkbox">
          <label htmlFor="is-gold-client">Client GOLD</label>
          <input
            type="checkbox"
            name="is-gold-client"
            value="true"
            onChange={(event) =>
              this.updateOnUserInput("isGoldClient", event.target.checked)
            }
          />
        </div>
        <label htmlFor="salar">Salar</label>
        <input
          type="number"
          name="salar"
          onChange={(event) =>
            this.updateOnUserInput("salar", event.target.value)
          }
        />
        <label htmlFor="link">Link pentru imagine</label>
        <input
          type="text"
          name="link"
          onChange={(event) =>
            this.updateOnUserInput("link", event.target.value)
          }
        />

        <input type="submit" value="Introdu utilizatorul" />
      </form>
    );
  }
}

export default UserAddForm;

import { Component } from "react";
import styles from "../Styles/EventStyles.module.css";
import searchStyles from "../Styles/SearchBar.module.css";

class SearchBar extends Component {
  backgroundcolor = { backgroundColor: "black" };
  color = { color: "white" };
  searchEvents = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className={styles.flex} style={this.backgroundcolor}>
        <form>
          <h4 style={this.color}>EventSearch</h4>
          <input type="text" className={searchStyles.input} />
          <input type="text" className={searchStyles.input} />
          <button
            type="submit"
            className={searchStyles.button}
            onSubmit={this.searchEvents}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;

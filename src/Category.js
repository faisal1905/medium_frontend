import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./App.css";
import Axios from "axios";
import {Link} from 'react-router-dom'



// const list = [
//   { name: "HOME" },
//   { name: "ONEZERO" },
//   { name: "ELEMENTAL" },
//   { name: "GEN" },
//   { name: "ZORA" },
//   { name: "FORGE" },
//   { name: "HUMAN PARTS" },
//   { name: "MARKER" },
//   { name: "LEVEL" },
//   { name: "HEATED" },
//   { name: "MODUS" },
//   { name: "MORE" }
// ];

const MenuItem = ({ text, selected , url}) => {
  return <div className={`menu-item ${selected ? "active" : ""}`} >{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return (
      <Link to={`/one_zero/${el.id}`}>
        <MenuItem
          text={name}
          key={name}
          selected={selected}
        />
      </Link>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      selected
    };  

    // this.menuItems = Menu(list, selected);
  }

  

componentDidMount(){
  console.log("componentdidmount")
  Axios.get(`http://localhost:7000/categories`)
  .then(res => {
    console.log(res.data);
    this.setState ({ list: res.data })
    console.log(this.state.list)
  })
}
  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const {list, selected } = this.state;

    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={Menu(list, selected)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Category;

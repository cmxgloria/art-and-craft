import React from "react";

import MenuItem from "../menu-item/MenuItem";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "handmade-art",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2018/800/997/9490799008_2022656010.400x400.jpg",
          id: 1,
        },
        {
          title: "keyring",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2012/364/056/664650463_935227936.400x400.jpg",
          id: 2,
        },
        {
          title: "children-purse",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2018/459/113/9418311954_301242762.400x400.jpg",
          id: 3,
        },
        {
          title: "lady-purse",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2019/041/222/11216222140_301242762.400x400.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "handbag",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2017/703/814/4381418307_27799352.400x400.jpg",
          size: "large",
          id: 5,
        },
        {
          title: "jewellery",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2017/484/876/4466678484_1984651542.search.jpg",
          size: "large",
          id: 6,
        },
        {
          title: "sale",
          imageUrl:
            "https://cbu01.alicdn.com/img/ibank/2018/882/783/9109387288_27799352.400x400.jpg",
          size: "large",
          id: 7,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

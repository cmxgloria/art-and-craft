const INITIAL_STATE = {
  sections: [
    {
      title: "handmade-art",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2018/800/997/9490799008_2022656010.400x400.jpg",
      id: 1,
      linkUrl: "shop/handmadeart",
    },
    {
      title: "keyring",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2012/364/056/664650463_935227936.400x400.jpg",
      id: 2,
      linkUrl: "shop/keyring",
    },
    {
      title: "children-purse",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2018/459/113/9418311954_301242762.400x400.jpg",
      id: 3,
      linkUrl: "shop/childrenpurse",
    },
    {
      title: "lady-purse",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2019/041/222/11216222140_301242762.400x400.jpg",
      size: "small",
      id: 4,
      linkUrl: "shop/ladypurse",
    },
    {
      title: "handbag",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2017/703/814/4381418307_27799352.400x400.jpg",
      size: "small",
      id: 5,
      linkUrl: "shop/handbag",
    },
    {
      title: "jewellery",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2017/484/876/4466678484_1984651542.search.jpg",
      size: "small",
      id: 6,
      linkUrl: "shop/jewellery",
    },
    {
      title: "sale",
      imageUrl:
        "https://cbu01.alicdn.com/img/ibank/2018/882/783/9109387288_27799352.400x400.jpg",
      size: "small",
      id: 7,
      linkUrl: "shop/sale",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

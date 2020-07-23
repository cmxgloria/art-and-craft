import { createSelector } from "reselect";

//  after "changed shop.data.js from array to object", no need id_map
// const COLLECTION_ID_MAP = {
//   handmadeart: 1,
//   keyring: 2,
//   childrenpurse: 3,
//   ladypurse: 4,
//   handbag: 5,
//   jewellery: 6,
//   sale: 7,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    selectCollections,
    (collections) => collections[collectionUrlParam]
    // collections.find(
    //   (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
  );

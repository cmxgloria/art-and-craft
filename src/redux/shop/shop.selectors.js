import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  handmadeart: 1,
  keyring: 2,
  childrenpurse: 3,
  ladypurse: 4,
  handbag: 5,
  jewellery: 6,
  sale: 7,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );

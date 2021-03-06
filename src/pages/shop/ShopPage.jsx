import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import SHOP_DATA from "./shop.data.js";

// import CollectionPreview from "../../component/collection-preview/CollectionPreview";
import CollectionsOverview from "../../component/collection-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../category/CollectionPage";

// import { selectCollections } from "../../redux/shop/shop.selectors";

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });
// export default connect(mapStateToProps)(ShopPage);

export default ShopPage;

import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectioItem from "../../component/collection-item/CollectioItem";
import "./collection-page.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>Collection Page</h2>
    {/* <CollectioItem /> */}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

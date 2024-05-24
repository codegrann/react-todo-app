import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.object.isRequired,
};

const MobileTearSheet = (props) => {
  const height = "100%";
  const styles = {
    root: {
      margin: "0 auto",
      maxWidth: 500,
      width: "100%",
    },
    container: {
      border: "solid 1px  #8be484",
      height: height,
      overflow: "hidden",
    },
    bottomTear: {
      display: "block",
      position: "relative",
      marginTop: -10,
      maxWidth: 500,
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.container}>{props.children}</div>
      <div style={styles.bottomTear}></div>
    </div>
  );
};

// Type checking the props of the component
MobileTearSheet.propTypes = propTypes;

export default MobileTearSheet;

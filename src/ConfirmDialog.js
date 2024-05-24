import React from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import "./App.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

function ConfirmDialog(props) {
  // Confirm Dialog buttons
  const dialogActions = [
    <FlatButton
      label="Cancel"
      className="confirm-dialog"
      onClick={props.onCancel}
    />,
    <FlatButton
      label="Confirm"
      backgroundColor="red"
      hoverColor="#FF583D"
      className="confirm-dialog"
      onClick={props.onConfirm}
    />,
  ];

  return (
    <div>
      <Dialog
        title={props.title}
        actions={dialogActions}
        modal={true}
        open={props.open}
      >
        {props.message}
      </Dialog>
    </div>
  );
}

// Type checking the props of the component
ConfirmDialog.propTypes = propTypes;

export default ConfirmDialog;

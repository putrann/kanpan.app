import React from "react";

export default ({ editing, value, onEdit, ...props }) => {
  if (editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />;
  }

  return <span {...props}>{value}</span>;
};

class Edit extends React.Component {
  render() {
    const { value, onEdit, ...props } = this.props;

    return (
      <input
        type="text"
        defaultValue={value}
        autoFocus
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }
  checkEnter = e => {
    e.key === "Enter" && this.finishEdit(e);
  };

  finishEdit = e => {
    const value = e.target.value;
    this.props.onEdit && this.props.onEdit(value);
  };
}

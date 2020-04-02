import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component { 
  
  state = {
    online: this.props.online
  }
  
  render() {
    //const {avatar,name} = this.props
    return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status" onClick={event => {
          const status = !this.state.online
          this.setState({online : status})
        }}>
          <div className={this.state.online ? "status-online" : "status-offline"} />
          <p className="status-text">{this.state.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  )}
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;

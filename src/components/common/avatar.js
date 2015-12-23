import React from 'react';
import classNames from 'classnames';

const Avatar = ({ contact }) => {
  const isSelf = contact.id === 'self';
  const initial = isSelf ? 'T' : contact.name.charAt(0);

  if (isSelf) {
    return (
      <div className="avatar avatar--self">{initial}</div>
    );
  } else {
    return (
      <div className="avatar avatar--self" style={{backgroundImage: `url(${contact.picture})`}}></div>
    );
  }
};

Avatar.propTypes = {
  contact: React.PropTypes.object.isRequired,
};

export default Avatar;

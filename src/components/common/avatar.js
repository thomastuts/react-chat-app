import React from 'react';
import classNames from 'classnames';

const Avatar = ({ contact }) => {
  const isSelf = contact.id === 'self';
  const initial = isSelf ? 'T' : contact.name.charAt(0);

  return (
    <div className={classNames('avatar', { 'avatar--self': isSelf, 'avatar--other': !isSelf })}>{initial}</div>
  );
};

Avatar.propTypes = {
  contact: React.PropTypes.object.isRequired,
};

export default Avatar;

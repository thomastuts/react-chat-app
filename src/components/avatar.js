import React from 'react';
import classNames from 'classnames';

const Avatar = ({ sender }) => {
  const isSelf = sender.id === 'self';
  const initial = isSelf ? 'T' : sender.name.charAt(0);

  return (
    <div className={classNames('avatar', { 'avatar--self': isSelf, 'avatar--other': !isSelf })}>{initial}</div>
  );
};

Avatar.propTypes = {
  sender: React.PropTypes.object.isRequired,
};

export default Avatar;

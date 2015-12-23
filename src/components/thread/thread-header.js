import React from 'react';

const ThreadHeader = ({ participants }) => {
  const participantsList = participants.map(p => p.name).join(', ');

  return (
    <header>
      {participantsList}
    </header>
  );
};

ThreadHeader.propTypes = {
  participants: React.PropTypes.array.isRequired,
};

export default ThreadHeader;

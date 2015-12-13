import contacts from './contacts';

const threads = [
  {
    id: 0,
    participants: [
      contacts[2],
    ],
    messages: [
      {
        sender: 'self',
        content: 'Hey, feel like hanging out at the mall today?',
      },
      {
        sender: 'participant',
        content: 'Yeah, meet you there.',
      },
    ],
  },
];

export function getThreads() {
  return threads;
}

export function getThread(threadId) {
  return threads[threadId];
}

export function createNewThread({ participantIds }) {
  threads.push({
    participants: participantIds.map(id => contacts[id]),
    messages: [],
  });
}

export function sendMessageToThread({ threadId, message }) {
  const thread = getThread(threadId);

  if (!thread) {
    throw new Error('Thread does not exist');
  } else {
    thread.messages.push({
      sender: 'self',
      content: message,
    });
  }
}

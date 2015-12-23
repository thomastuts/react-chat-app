import contacts from './contacts';

const threads = [
  {
    id: 0,
    participants: [
      contacts[2],
    ],
    conversation: [
      {
        sender: {
          id: 'self',
        },
        messages: [
          {
            content: 'Hey, feel like going to the mall today?',
            date: +Date.now(),
          },
          {
            content: 'Got the day off',
            date: +Date.now(),
          },
        ],
      },
      {
        sender: contacts[2],
        messages: [
          {
            content: 'Sure, where do you want to hang out?',
            date: +Date.now(),
          },
        ],
      },
      {
        sender: {
          id: 'self',
        },
        messages: [
          {
            content: 'How about we meet up at the hot-dog stand at 3:30?',
            date: +Date.now(),
          },
        ],
      },
      {
        sender: contacts[2],
        messages: [
          {
            content: 'Works for me',
            date: +Date.now(),
          },
          {
            content: 'Actually, make it 4. I have to pick up my sister first',
            date: +Date.now(),
          },
        ],
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

export function sendMessageToThread({ threadId, content }) {
  const thread = getThread(threadId);

  if (!thread) {
    throw new Error('Thread does not exist');
  } else {
    const lastMessageBlock = thread.conversation[thread.conversation.length - 1];
    const message = {
      content,
      date: +Date.now(),
    };

    if (lastMessageBlock.id === 'self') {
      lastMessageBlock.messages.push(message);
    } else {
      thread.conversation.push({
        sender: {
          id: 'self',
        },
        messages: [message],
      });
    }
  }
}

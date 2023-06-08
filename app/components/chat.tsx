const onDelete = (botMessageId: number) => {
  const userIndex = findLastUserIndex(botMessageId);
  if (userIndex === null) return;

  // Enter edit mode for the previous user message
  const lastUserMessage = session.messages[userIndex];
  setUserInput(lastUserMessage.content);
  inputRef.current?.focus();

  // Delete the previous user message and bot message
  // deleteMessage(userIndex);
};
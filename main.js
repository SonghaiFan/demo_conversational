const dialogContainer = $("#dialog_container");

function startConversation() {
  popupDialogBubble(0);
}

function popupDialogBubble(dialogId) {
  const dialogue = conversationMetaData.find(
    (dialog) => dialog.id === dialogId
  );

  const dialog_wrap_div = $("<div/>", {
    class: `dialog_wrap ${dialogue.speaker}`,
  });

  dialogContainer.append(dialog_wrap_div);

  dialogue.sentence.forEach((sentence) => {
    const sentence_div = $("<div/>", {
      class: "sentence",
    });

    dialog_wrap_div.append(sentence_div);

    sentence_div.append($(`<${sentence.type}/>`, { text: sentence.text }));
  });

  dialogue.query.forEach((query) => {
    const query_div = $("<div/>", {
      class: "reader",
    });

    dialog_wrap_div.append(query_div);

    query_div.append($(`<${query.type}/>`, { text: query.text }));
  });
}

const conversationMetaData = [
  {
    id: 0,
    speaker: "author",
    sentence: [
      { type: "p", text: "Hello." },
      { type: "p", text: "How are your?" },
    ],
    query: [
      {
        type: "button",
        text: "Hey! I'm fine. And you?",
        setSate: { good: true },
        goTo: 1,
      },
    ],
  },
  {
    id: 1,
    speaker: "author",
    sentence: [
      {
        type: "p",
        text: "I'm good. Thanks for asking!",
      },
    ],
  },
];

$(document).ready(function () {
  startConversation();
});

const storyMetaData = [
  {
    dialogId: "0",
    speaker: "Author",
    sentence: [{ type: "p", text: "Hello." }],
  },
  {
    dialogId: "1",
    speaker: "Author",
    sentence: [
      {
        type: "p",
        text: ' Welcome to know "How are disadvantaged groups discussed in the Australian news media?',
      },
    ],
  },
  {
    dialogId: "2",
    speaker: "Reader",
    sentence: [
      {
        type: "p",
        text: "Hey! I'm fine. Thanks for asking!",
      },
    ],
  },
  {
    dialogId: "3",
    speaker: "Author",
    sentence: [
      {
        type: "p",
        text: "Sweet!",
      },
      {
        type: "p",
        text: "So, what do you wanna do today?",
      },
    ],
  },
];

$(document).ready(function () {
  const dialogContainer = $("#dialog_container");
  $.each(storyMetaData, function (key, value) {
    console.log(value.dialogId);

    const dialof_wrap_div = '<div class="dialog_wrap"></div>';
    dialogContainer.append(dialof_wrap_div)
    console.log(value.speaker);
    value.sentence.forEach((element) => {
      console.log(element.type);
      console.log(element.text);
    });
  });
});

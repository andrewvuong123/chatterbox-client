// Controller
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },
  // calls rendermessage on each message
  render: function() {
    // reset the chats html to a blank slot
    MessagesView.$chats.html('');
    // for each item in the model storage, render the message if it matches the currently selected room
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },
  // adds each message into the chat dom
  renderMessage: function(message) {
    // render into html template
    var html = MessageView.render(message);
    // prepend to chat html on page
    MessagesView.$chats.prepend(html);
  }
};
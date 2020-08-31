// Controller
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
    // reset the chats html to a blank slot
    MessagesView.$chats.html('');
    // for each item in the model storage, render the message
    Messages
      .items()
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    // render into html template
    var html = MessageView.render(message);
    // prepend to chat html on page
    MessagesView.$chats.prepend(html);
  }
};
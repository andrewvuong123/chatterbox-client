// Model
var Messages = {
  // holds all data from server, underscore makes it a private variable
  _storage: [],
  // adds new message into storage and accepts a callback
  add: function(message, callback = ()=>{}) {
    Messages._storage.push(message);
    callback();
  },
  // updates the data when fetch is called and puts messages into storage, accepts a callback
  update: function(messages, callback = ()=>{}) {
    for (let message of messages) {
      // push the correct message format to storage
      Messages._storage.push(Messages.conform(message));
    }
    callback();
  },
  // ensures the message being passed in has the three properties
  conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  },
  // chains the storage data so that can call multiple other fcns easier
  items: function() {
    // call sortby to make sure messages are in the correct order they are made
    return _.chain(Messages._storage).sortBy('createdAt');
  }


};
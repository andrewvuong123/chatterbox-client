var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.handleChange);
  },

  render: function() {
    // initialize the select button to be empty
    RoomsView.$select.html('');
    // for each item in storage, render the room
    Rooms
      .items()
      .each(room => RoomsView.renderRoom(room));
  },

  renderRoom: function (roomName) {
    // add the room's html option tag to the select button
    RoomsView.$select.append(new Option(roomName, roomName));
  },

  handleClick: function (event) {
    // var roomname = prompt('Enter room name');
    // RoomsView.renderRoom(roomname);
    // Rooms.storage.push(roomname);
    // RoomsView.render();
    // MessagesView.render();
  },

  handleChange: function (event) {
    // Rooms.selected = RoomsView.$select.val();
    // MessagesView.render();
  }

};

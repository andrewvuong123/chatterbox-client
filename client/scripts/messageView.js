// View
var MessageView = {
  // render template
  render: _.template(

    '<div class=\'chat\'>' +
      '<div class=\'username\'>' +
        '<%- username %>' +
      '</div>' +
      '<div>' +
        '<%- text %>' +
      '</div>' +
    '</div>'
  )

};


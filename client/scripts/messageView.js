// View
var MessageView = {
  // render template with backticks
  // %- escapes xss attacks
  render: _.template(`
    <div class="chat">
      <div class="username">
        <%- username %>
      </div>
      <div> <%- text %> </div>
    </div>
  `
  )

};


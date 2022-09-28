class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var c = this.state.value;

    if (c > 50 && c < 100)
    {
      c = c - 50;
    }
    if (c <= 50)
    {
      c = 0;
    }
    if (c > 100)
    {
      c = (c - 100) * 2 + 50;
    }
    alert('Total Points: ' + c);
    event.preventDefault();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, "TransactionAmount:", /*#__PURE__*/

      React.createElement("input", { type: "number", value: this.state.value, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("input", { type: "submit", value: "Submit" })));


  }}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(NameForm, null));
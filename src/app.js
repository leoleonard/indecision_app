// const obj = {
//   name: "Susan",
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);
// // bind - first argument set as a 'this' concect
// // prevent loosing 'this' bounding by reseting the context

// console.log(getName());

// component state - managing the state of the data + re-render

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life together';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
  // React.Component - class itself; 
  // require one method - render;
  render() {
    // console.log(this.props) // this - reference to the currenct instance;
              // props - to the object
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
      alert('handlePick');
  }
  render() {
    return (
      <div>
      <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    // props == this; bounding 'this; in the constructor (instead of in the line every time)
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('remove all options');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          // this.props.options.map((option) => <p key={option}>{option}</p>)
          this.props.options.map((option) => <Option key={option} optionText={option} />) // instance of option
        }
      </div>
    );
  }
}


// nested class
class Option extends React.Component {
  render() {
    return (
      <div>
      {this.props.optionText}
      </div>
      );
  }
}


class AddOption extends React.Component {
  handleAddOption(e) { // argument - event
    e.preventDefault(); // prevent refreshing the page
    const option = e.target.elements.option.value.trim();
    // fetch the value typed; .trim() - removes white spaces
    if (option) {
      alert('option');
      }
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}

// where things appeat on the website - jsx (where they get render)
// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );

// ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

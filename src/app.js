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
  render() {
    return (
      <div>
      <button>What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  render() {
    return (
      <div>
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

// Option -> option component here

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption here</p>
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

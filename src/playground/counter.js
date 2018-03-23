class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      // count: props.count
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({count}));
    }
  }
  //   try {
  //     const json = localStorage.getItem('count');
  //     const count = JSON.parseInt(json);

  //     if (count) {
  //       this.setState(() => ({ count}));
  //     }
  //   } catch (e) {
  //     // do nothing
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count',this.state.count);
    }
  }
 
  handleAddOne() {
    this.setState((prevState) => {
       // setState - manipulate the state object
       // => component renders automatically
      return  {
        count: prevState.count + 1
      };
    });
   
    // this.state.count = this.state.count + 1;
    // console.log(this.state);
    // => object is changing but does not render itself
  }

  handleMinusOne() {
    this.setState((prevState) => {
    return {
      count: prevState.count - 1
    };
  });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

// określa domyślną wartość
// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));
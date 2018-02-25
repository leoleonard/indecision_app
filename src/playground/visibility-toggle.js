let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={toggleVisibility}>
        {visibility ? 'hide details' : 'show details'}
      </button>
      {visibility && (
        <div>
          <p>There are some options</p>
        </div>
      )}
      </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();

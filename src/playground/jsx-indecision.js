console.log("App.js is running!");

const app = {
  title: "Things to do",
  subtitle: "List of tasks",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();  // strona nie odswieza sie za kazdym razem po wpisaniu tekstu

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
     e.target.elements.option.value = "";
     FormRender();
   }
  };

  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
  };

  const removeItems = () => {
    app.options = [];
    FormRender();
  };

const appRoot = document.getElementById("app");

const FormRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "There are no options now"}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeItems}>Remove all</button>
      <ol>
        {
        app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

FormRender();

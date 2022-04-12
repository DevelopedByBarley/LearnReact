// 1. REACT

const button = React.createElement('button', {
  onClick: function () {
    alert('Click esemény történt!');
  }
}, 'Gomb');

ReactDOM.render(button, document.getElementById('react-button-container'))

// 2. KOMPONENS

function App() {
  return React.createElement("div", {
    className: "border",
    style: {
      border: "1px solid"
    }
  }, "App",
    React.createElement(boxComponent, { background: "red", subtitle: 1 }),
    React.createElement(boxComponent, { background: "blue", subtitle: 2 }),
    React.createElement(boxComponent, { background: "green", subtitle: 3 }),
  )
}

function boxComponent(props) {
  const [szamlaloAllapota, ujSzamlaloAllapotBeallitasa] = React.useState(props.subtitle)
  return React.createElement("div", {
    style: {
      width: "200px",
      height: "200px",
      backgroundColor: props.background,
      border: "1px solid",
      margin: "5px"
    },
    className: "p-2 m-5 rounded",
    onClick: () => {
      ujSzamlaloAllapotBeallitasa(elozoAllapot => elozoAllapot + 1);
    }
  }, React.createElement('h1', {}, szamlaloAllapota))
}

ReactDOM.render(React.createElement(App), document.getElementById('react-component-container'))
ReactDOM.render(React.createElement(App), document.getElementById('app-container'));

function App() {
  const [isActive, setActive] = React.useState(false);
  return React.createElement("div", {
    className: 'border'
  },
    "App",
    React.createElement(boxComponent, { isActive: isActive, setActive: setActive }),
    React.createElement(buttonComponent, { isActive: isActive, setActive: setActive }),
    " App szintü state: " + (isActive ? "Aktiv" : "Inaktiv") // Mindig zárójelbe kell tenni , különben állandóan inaktiv lesz!
  )
}

function boxComponent(props) {
  return React.createElement('div', {
    style: {
      height: "200px",
      width: "200px",
      backgroundColor: props.isActive ? "green" : "firebrick"
    },
    className: "p-2 m-5 rounded"
  }, props.isActive ? "aktiv" : "inaktiv")
}

function buttonComponent({ isActive, setActive }) {
  return React.createElement('div', {
    style: {
      height: "200px",
      width: "200px",
    },
    className: "p-2 m-5 rounded"
  },
    React.createElement('button', {
      className: "btn btn-success m2",
      disabled: isActive,
      onClick: function () {
        setActive(true)
      }
    }, "aktiválás"),
    React.createElement('button', {
      className: "btn btn-danger m2",
      onClick: function () {
        setActive(false)
      },
      disabled: !isActive
    }, "deaktiválás")

  )
}
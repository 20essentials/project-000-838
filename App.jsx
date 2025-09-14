// App.jsx
import { onMount } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  let container;

  const bodyStyle = {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    scrollBehavior: "smooth",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    perspective: "500px",
    transformStyle: "preserve-3d",
    width: "100%",
    height: "100%",
  };

  const brickStyle = {
    width: "5vw",
    height: "5vh",
    backgroundImage: "linear-gradient(45deg, #7028e4 0%, #e5b2ca 100%)",
    flexGrow: 1,
    animation: "translateZAnimation 1s ease-in-out forwards",
  };

  const h2Style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "7vmax",
    color: "#000",
    textAlign: "center",
    zIndex: 50,
    animation: "toTop 0.5s linear both",
    animationDelay: "1.7s",
  };

  const keyframesStyle = `
    @keyframes translateZAnimation {
      0% { transform: translateZ(2000px); }
      100% { transform: translateZ(0px); }
    }
    @keyframes toTop {
      0% { top: 80%; opacity: 0; }
      100% { top: 50%; opacity: 1; }
    }
  `;

  onMount(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = keyframesStyle;
    document.head.appendChild(styleSheet);

    Array.from({ length: 500 }).forEach(() => {
      const brick = document.createElement("aside");
      Object.assign(brick.style, brickStyle);
      container.appendChild(brick);
    });
  });

  return (
    <div style={bodyStyle}>
      <h2 style={h2Style}>Hey!</h2>
      <section ref={container} style={containerStyle}></section>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);

export default App;

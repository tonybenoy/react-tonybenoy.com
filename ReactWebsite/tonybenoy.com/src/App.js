import me from "./me.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <h1>Tony Benoy</h1>
        <p>
          A Pretentious Noob
          <span class="blink_text">_</span>
        </p>
      </header>
    </div>
  );
}

// import me_image from "./me.jpg";
// import "./tailwind.generated.css";

// function App() {
//   return (
//     <div className="App">
//       <img class="img-circle" src={me_image} alt="tonybenoy" />
//       <h1 className="text-yellow-400">Tony Benoy</h1>
//       <p>
//         A Pretentious Noob <span class="blink_text">_</span>
//       </p>
//     </div>
//   );
// }

// export default App;

export default App;

import "./App.css";

function Square() {
  return <div className="square">Image</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main className="App-main">
        <aside className="App-sidebar">Aside</aside>
        <article className="App-article">
          <div class="text-right">
            <p class="text">Article</p>
          </div>
          <article class="squareContariner">
            <Square />
            <Square />
            <Square />
          </article>
        </article>
      </main>
      <footer className="App-footer">Footer</footer>
    </div>
  );
}

export default App;

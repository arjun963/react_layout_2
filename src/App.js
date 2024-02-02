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
          <p class="text-right">Article</p>
          <Square />
          <Square />
          <Square />
        </article>
      </main>
      <footer className="App-footer">Footer</footer>
    </div>
  );
}

export default App;



function App() {
  const name = 'Jude'
  const x = false
  return (
    <div className="container">

      <h1>Hello {name} </h1>
      <h1>1 + 1 = {1 + 1}</h1>
      <h1>Hello {x ? 'And Welcome Back' : 'And who am I talking to?'}</h1>
    </div>
  );
}

export default App;



import './App.css';

function App() {
  

  const submit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.author.value)
    console.log(e.target.pages.value)

    const bookData = {
      name: e.target.name.value,
      author: e.target.author.value,
      pages: e.target.pages.value
    }
    console.log(bookData)

    fetch("/api/book", {
      method: "POST",
      body: JSON.stringify(bookData),
      headers: {"Content-type": "application/json"},
      mode: "cors"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)

    })
  } 
  
  
  return (
    <div className="App">
      <h1>books</h1>
      <form onSubmit={submit}>
                <input type="text" name="name" id="name"/>
                <input type="text" name="author" id="author"/>
                <input type="number" name="pages" id="pages"/>
                <input type="submit" id="submit"/>
            </form>

    </div>
  );
}

export default App;

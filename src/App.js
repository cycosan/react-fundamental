import './App.css';
const books = [
  {id:1,
    name:"Nepal",
    author:"hari",
},
  {
    id:2,
    name:"Nepals",
    author:"haris",
},
  ];
function App() {
  return (<section>
    {/* {books.map((book) => {
      return(<Test title={book.name} author={book.author} />);
    })} */}
    <Test key={books.id} datas={books}  />
    </section>
  );
}
const Test =(datas)=>{
  const Example =(author)=>{
    console.log(author)
  }
  console.log("data",datas.datas)
  return(
    <div>
    {datas.datas.map((book) => {
      return(
    <div key={book.id}><h1
      style={{ color: "red", fontSize: "4rem" }}
    >{book.name}</h1><p>
      {book.author}<br /> 
      </p>
      <button type="button" onClick={()=>Example(book.author)}>Example</button>
    </div>);
    })}
    </div>
  );
}

export default App;

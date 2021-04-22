function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" >{todo.text} <span className="completeButton" onClick={handle}>&#10003;</span></div>
}

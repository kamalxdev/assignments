




export default function Todo(prop){
    return (
        
        <div className="child-todo" key={prop.id}>
          <span>
          <h2>{prop.title}</h2>
          <p>{prop.description}</p>
          </span>
          <button onClick={prop.delete}>Delete</button>
        </div>
    );
}
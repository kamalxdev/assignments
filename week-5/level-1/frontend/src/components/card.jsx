import axios from "axios";


export default function Card(prop) {
    async function handleDeleteBTN(){
        console.log(prop.id);
        await axios.delete(`http://localhost:3000/delete/${prop.id}`).then((res)=>{
            alert('Deleted');
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }



  return (
    <section
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "auto",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "50px",
          }}
        >
          <h3 style={{margin:0}}>Name: {prop.title}</h3>
          <h4 style={{margin:0}}>Description {prop.description}</h4>
          <h4 style={{margin:0}}>Interest: {prop.interest}</h4>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <span style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <a href={prop.twitter} target="_blank">
              Twitter
            </a>
            <a href={prop.linkedin} target="_blank">
              Linkedin
            </a>
          </span>
        </span>
      </div>
      <button onClick={handleDeleteBTN} >Delete</button>
    </section>
  );
}

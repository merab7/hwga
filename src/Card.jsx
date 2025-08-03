import prof_pic from "./assets/react.svg"


function Card() {
  const name = "Merab Todua"
  const some_info = "I make Youtube videos and play video games"

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={prof_pic} alt="Card image cap" />
        <div className="card-body">
          <h1>
            {name}
          </h1>
          <p className="card-text">{some_info}</p>
        </div>
      </div>
    </>
  )
}

export default Card

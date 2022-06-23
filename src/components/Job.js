const Job = props => {
  return (
    <>
      <div className={props.className}>
        <div className="job">
          <h2> {props.title} </h2>
          <p>
            {" "}
            {props.contractType} - {props.country} - {props.city}{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default Job

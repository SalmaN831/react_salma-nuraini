const ToDo = () => {
    const data = [ 
        {
          id: 1,
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: 2,
          title: "Unit Testing",
          completed: false,
        },
        {
          id: 3,
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: 4,
          title: "Deploy ke server",
          completed: false,
        },
    ]
    return (
        <>
        <header>
            <h1>To Do App</h1>
        </header>
        <div className="pad">
            {data.map((todo) => {const {title} = todo;
            return (todo.completed ? <p className="selesai"> {title} </p>
            : <p> {title} </p>)})}
        </div>
        </>
    )
}

export default ToDo;
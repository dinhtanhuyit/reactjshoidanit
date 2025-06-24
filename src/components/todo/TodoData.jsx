const TodoData = (props) =>{
    // {
    //     name: "eric",
    //     age: 25,
    //     da
    // }

    // lấy gia trị từ props
    const {name,age} = props;
    return (

         <div className='todo-data'>
            <div> My name is {name} </div>
      <div>Learning React</div>
      <div>watching youtube</div>
    </div>
    )
}
export default TodoData; 
function App(){
  return(
    <>
    <center>
      <h1>Class Timing</h1>
      <hr />
      <div>
        <h2>About Class</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea est obcaecati fuga numquam officia reiciendis voluptate voluptatum! Aspernatur amet earum iste non sapiente suscipit optio laudantium veritatis, repudiandae quam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, deserunt nostrum, dolorum doloremque dicta architecto expedita quasi delectus sunt eligendi, perferendis magni iste. Natus inventore ab vitae quod consequatur harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore! Recusandae, totam debitis nobis ducimus id, veniam et incidunt, dolor inventore asperiores modi deserunt rerum corrupti. Asperiores quam doloribus eos?</p>

        <hr />
        <h1>Class Schedule</h1>
        <table bgcolor="lightgreen" cellSpacing={0} cellPadding={10} border={1} width="60%" align="center">
          <thead>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Number Of student</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>08:30</td>
              <td>React Js</td>
              <td>50</td>
              <td>Amit Singh</td>
            </tr>
            <tr>
              <td>11:30PM</td>
              <td>SQl</td>
              <td>40</td>
              <td>Divya</td>
            </tr>
            <tr>
              <td>02:00PM</td>
              <td>Recovery</td>
              <td>100</td>
              <td>Rahul</td>
            </tr>
          </tbody>
        </table>

      </div>
    </center>
    </>
  )
}
export default App;
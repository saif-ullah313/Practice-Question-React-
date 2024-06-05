
function Patient(props) {

    const {name,Id,WadNo,Decease } = props
    console.log(name);
    return(
        <div className="Parent1">
        <h1>Patient Detail</h1>
        <p>Name: {name}</p>
        <p>ID: {Id}</p>
        <p>Ward No: {WadNo}</p>
        <p>Decease Name: {Decease}</p>
        </div>

    );
  

}
export default Patient;
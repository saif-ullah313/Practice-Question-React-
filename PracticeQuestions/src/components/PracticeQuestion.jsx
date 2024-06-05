import Department from "../Departments";

function PracticeQuestion(Props){
    return(
        <>
        <Department>
        <h1>Student Detail</h1>
        <p>Name: {Props.Std.Name}</p>
        <p>LastName:{Props.Std.Lastname}</p>
        <p>RollNo:  {Props.Std.Rollno}</p>
        <p>Class: {Props.Std.Class}</p>
        <p>Subject: {Props.Std.Subject}</p>
            </Department>   
       
        
        </>
    );

}
export default PracticeQuestion;
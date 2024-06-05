import './App.css'
import Employee from './components/EmployeeDetail';
import PracticeQuestion from './components/PracticeQuestion';
import Patient from './components/PatientHistory';
import MobileCompany from './Spread1';
import University from './University';
function App() {

    const Student = {
        Name: "Saifullah",
        Lastname: "Khan",
        Rollno: 19,
        Class:12,
        Subject:"CS"

    };

    const Employe = {
        Name: "Ali",
        ID: 1235,
        JobTitle:"Full Stack Developer",
        Experience:"2 years"


    };
    
  let Mobile = {
    name:'OPPO',
    model:"A15",
    RAM:"128GB",
    ROM:"8GB",
    Available: "Yes"

  };




 
  return(
    <>
     <PracticeQuestion  Std= {Student} />
     <Employee />
     < Patient
        name={"Usman"}
        Id = {12345}
        WadNo={"BC23"}
        Decease={"Fever"}/>
    
    < Patient
        name={"Nouman"}
        Id = {125}
        WadNo={"BC26"}
        Decease={"Fever"}/>



<MobileCompany {...Mobile}/>






    
        
    </>
  );
}

export default App;
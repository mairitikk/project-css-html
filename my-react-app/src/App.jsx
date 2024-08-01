import Header from "./Header"; 
import Footer from "./Footer";
import Card from "./Card";
import Button from "./button/Button";
import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <Card></Card>
      <Button></Button>
      <Student name="Martin Chris" age={8} isStudent={true}></Student>
      <Student name="Marilia" age={4} isStudent={false}></Student>
      <Student name="Leena" age={5} isStudent={false}></Student>
      <Student name="Miku" age={10} isStudent={true}></Student>
      <Student></Student>
      <Footer></Footer>
    </>
  );

  
}

export default App

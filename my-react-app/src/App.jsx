import Header from "./Header"; 
import Footer from "./Footer";
import Card from "./Card";
import Button from "./button/Button";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdaterFunction from "./UpdaterFunction.jsx";
import UpdateObject from "./UpdateObjects.jsx";
import UpdateArrays from "./UpdateArrays.jsx";
import ArrayOfObjectsState from "./ArrayOfObjectsState.jsx";
import ToDOList from "./ToDoList.jsx";
import UseEffectHook from "./UseEffectHook.jsx";
import UseEffect2 from "./UseEffect2.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./ComponentA.jsx";
import UseRef from "./UseRef.jsx";
import Stopwatch from "./Stopwatch.jsx";

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
      <UserGreeting isLoggedIn={false
    
      } username="MATG"></UserGreeting>
      <List></List>
      <ProfilePicture></ProfilePicture>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <OnChange></OnChange>
      <ColorPicker></ColorPicker>
      <UpdaterFunction></UpdaterFunction>
      <UpdateObject></UpdateObject>
      <UpdateArrays></UpdateArrays>
      <ArrayOfObjectsState></ArrayOfObjectsState>
      <ToDOList></ToDOList>
      <UseEffectHook></UseEffectHook>
      <UseEffect2></UseEffect2>
      <DigitalClock></DigitalClock>
      <ComponentA></ComponentA>
      <UseRef></UseRef>
      <Stopwatch></Stopwatch>
    
      <Footer></Footer>
      
    </>
  );

  
}

export default App


import './App.css';
import Profile from './profile/Profile';


function App() {
  let fullName = "Mohamed Hedi Slatni"
  let bio = 28
  let profession = "developer student"

  let handleName=(name)=>{
  alert(name)
  }

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />

    </div>

  );
}

export default App;

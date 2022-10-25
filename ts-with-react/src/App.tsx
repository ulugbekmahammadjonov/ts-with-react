import './App.css';
import EventComponent from './components/EventComponent';
// import GuestList from './components/GuestList';
// import Parent from './components/Parent';
import UserSearch from './components/UserSearch';
function App() {
  return (
    <div className="App">
      <UserSearch/>
      <EventComponent/>
    </div>
  );
}

export default App;


import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

  const employed = [
    { name: 'Ezequiel Magi', skill: 'Front End Developer' },
    { name: 'Esteban Piemonte', skill: 'Tech Instructor' }
  ]

 

  return (
    <>
      <ProfileCard name={ employed[0].name } skill={ employed[0].skill }/>
      <ProfileCard name={ employed[1].name } skill={ employed[1].skill }/>
    </>
  );
}

export default App;

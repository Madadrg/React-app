import './App.css';
import Sidebar from './Sidebar/Sidebar';
import University from './University/University';
import Tutors from './Tutors/Tutors';
import Cities from './Cities/Cities';
import Faculties from './Faculties/Faculties';
import { menuConfig } from './helpers/menu';

function App() {
  return (
    <main>
      <Sidebar data={menuConfig} />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}

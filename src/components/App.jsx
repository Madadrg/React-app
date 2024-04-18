import './App.css';
import Sidebar from './Sidebar/Sidebar';
import University from './University/University';
import Tutors from './Tutors/Tutors';
import Cities from './Cities/Cities';
import Faculties from './Faculties/Faculties';
import { menuConfig } from './helpers/menu';
import data from './helpers/data.json';

function App() {
  const { name, description } = data;
  return (
    <main>
      <Sidebar data={menuConfig} />
      <section className="container">
        <University name={name} description={description} />
        <Tutors />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}

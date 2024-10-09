import { Menu } from './components/layout'
import { Inicio } from './pages/Inicio';
import './styles/output.css'

export default function App() {
  return (
    <main className="flex sm:flex-col">
      <Menu />
      <Inicio />
    </main>
  );
}
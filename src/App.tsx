import { Menu } from './components/layout/Menu'
import { Inicio } from './pages/Inicio';
import { MyNavBar } from './components/ui/MyNavBar';

export default function App() {
  return (
    <main>
      <Menu />
      <Inicio />
    </main>
  );
}
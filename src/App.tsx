//import { Menu } from './components/layout'
import { Inicio } from './pages/Inicio';
import { MenuBottom } from './components/ui';

export default function App() {
  return (
    <main className='bg-primary'>
      <MenuBottom />
      <Inicio />
    </main>
  );
}
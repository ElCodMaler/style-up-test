import { Menu } from './components/layout'
import { Inicio } from './pages/Inicio';

export default function App() {
  return (
    <main className='bg-primary'>
      <Menu />
      <Inicio />
    </main>
  );
}
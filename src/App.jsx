import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ClasesPage from './paginas/ClasesPage';
import ClasePage from './paginas/ClasePage';
import TareaPage from './paginas/TareaPage';
import AppState from './context/App/AppState';
import TareasPage from './paginas/TareasPage';
import NuevaClasePage from './paginas/NuevaClasePage';
import NuevaTareaPage from './paginas/NuevaTareaPage';

function App() {

  return (

    <AppState>
      <BrowserRouter>

        <Routes>

          <Route path="/clases" element={<Layout />}>
            <Route index element={<ClasesPage />} />
            <Route path=":id" element={<ClasePage />} />
            <Route path="nueva" element={<NuevaClasePage />} />
          </Route>

          <Route path="/tareas" element={<Layout />}>
            <Route path="all" element={<TareasPage />} />
            <Route path=":id" element={<TareaPage />} />
            <Route path="nueva" element={<NuevaTareaPage />} />
          </Route>

          {/* <Route path="*" element={<Layout />}/> */}

        </Routes>

      </BrowserRouter>
    </AppState>

  )

}

export default App

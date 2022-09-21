import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import ProdutoForm from './pages/ProdutoForm';
import PaginaDoProduto from './pages/PaginaDoProduto';
import Contato from './pages/Contato';
import NaoEncontrada from './pages/NaoEncontrada';
import { ProdutosProvider } from './context/ProdutosProvider';
import FormProdutos from './pages/FormProdutos';
import Tienda from './pages/Tienda';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <ProdutosProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criar-produto' element={<FormProdutos />} />
        <Route path='/tienda' element={<Tienda />} /> 
        <Route path='/editar-produto/:id' element={<FormProdutos />} />
        <Route path='/produtos/:id' element={<PaginaDoProduto />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
    </ProdutosProvider>
  );
}
export default App;

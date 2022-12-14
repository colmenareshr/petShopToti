import { useProdutos } from '../context/ProdutosProvider';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../components/Cards/Card';
import CategoryCards from '../components/CategoryCards/CategoryCards';
import Ours from '../components/Ours_Services/Ours';
import About from '../components/About/About';
import TestimoniosCards from '../components/TestimoniosCards/TestimoniosCards';
import './syles/Home.css';

const Home = () => {
  const { produtos } = useProdutos();
  const navigate = useNavigate();

  const productlist = produtos.map((produto) => (
    <Card
      key={produto._id}
      image={produto.image ? produto.image.secure_url : null}
      titulo={produto.titulo}
      categoria={produto.categoria}
      descripcao={produto.descripcao}
      valor={produto.valor}
      onClick={() => navigate(`/produtos/${produto._id}`)}
    />
  ));

  return (
    <>
      <section className='hero_container'>
        <div className='hero_content'>
          <h1>Estamos sempre aqui pela boa saúde de todos os seus Pets</h1>
          <Link to='/tienda'>
            <button>Compre agora</button>
          </Link>
        </div>
        <div className='hero_image'>
          <img src='../../public/img/cachorro11.png' alt='' />
        </div>
      </section>
      <section className='banner_hero'>
        <div className='banner_hero_content_img'>
          <img src='../../public/img/pet-image-bg2.png' alt='' />
          <span>Cupão #TotiPetShop</span>
          <p>
            Junte-se hoje e aproveite o <strong>Desconto Plano de 5%</strong> em
            seu primeiro pedido. Por um tempo limitado.
          </p>
        </div>
        <div className='banner_hero_content'>
          <div className='banner_text'>
            <span className='big_text'>200K+</span>
            <p>Animais alimentados</p>
          </div>
          <div className='banner_text'>
            <span className='big_text'>R$5</span>
            <p>Venda do produto</p>
          </div>
          <div className='banner_text'>
            <span className='big_text'>97%</span>
            <p>Clientes satisfeitos</p>
          </div>
        </div>
      </section>
      <main className='main'>
        <About />
        <section className='categoria_section'>
          <h2>Categorias em destaque</h2>
          <div className='category_cards_container'>
            <CategoryCards image={5} categoria={'Coelhos'} />
            <CategoryCards image={2} categoria={'Gatos'} />
            <CategoryCards image={1} categoria={'Cachorros'} />
            <CategoryCards image={3} categoria={'Pássaros'} />
            <CategoryCards image={4} categoria={'Peixes'} />
          </div>
          <div className='main_wraper'>{productlist}</div>
        </section>
        <section className='home__servicios'>
          <h2>Nossos serviços</h2>
          <div className='home__servicios-cards'>
            <Ours
              image={1}
              titulo={'Consultas para filhotes'}
              info={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam saepe dolorem.'
              }
            />
            <Ours
              image={2}
              titulo={'Consultas para Gatos'}
              info={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam saepe dolorem.'
              }
            />
            <Ours
              image={3}
              titulo={'Consultas para Pássaros'}
              info={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam saepe dolorem.'
              }
            />
          </div>
        </section>
        <section className='testimonios__container'>
          <h2>O que nossos clientes dizem</h2>
          <p>
            Compartilhe fotos e vídeos de bichinhos antes e depois de passarem
            pelo banho e tosa do seu estabelecimento
          </p>
          <TestimoniosCards
            image={1}
            titulo={'"Uma equipe de veterinários em quem você pode confiar"'}
            testimonio={
              'Até que alguém tenha amado um animal, uma parte da sua alma permanece desperta. Acreditamos nele e acreditamos no fácil acesso às coisas que são boas para nossa mente, corpo e espírito.'
            }
            author={'Carla Philistin'}
            descripcao={'Pets Lover'}
          />
        </section>
      </main>
    </>
  );
};

export default Home;

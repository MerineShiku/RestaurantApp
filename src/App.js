import './App.css';
import Menu from './Menu';
import Footer from './assets/footer';
import Favourites from './favourites';
import Hero from './hero';
import Special from './special';
import Testimonials from './testimonials';

function App() {
  return (
    <div className="App">

       <Menu />,
       <Hero />,
       <Favourites />, 
       <Special/>,
       <Testimonials/>,
       <Footer />
      

    </div>
  );
}

export default App;

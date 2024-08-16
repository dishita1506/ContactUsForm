import './App.css';
import Navigation from './components/navigation/Navigation';
import ContactHeader from './components/contactHeader/ContactHeader';

import ContactForm from './components/contactForm/ContactForm';


function App() {
  return (
    <div className="App">
     
     
      <Navigation />
      <main className='mainContainer'>
        <ContactHeader />
        <ContactForm />
        </main>
      
    </div>
  );
}

export default App;

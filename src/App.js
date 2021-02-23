//importaciones

import Main from './components/Main'
import Features from './components/Features'
import './App.css';

//funciones



//funciones
function App() {
  return ( ///JSX => FORMATO DE MEZCLA A js Y html (SIMILAR A LA `${}`)
   <div>
         <div class="navbar">
                <Main />
          </div>
          <div class="features"> 
                <Features src="/images/icon1.png" text="Declarative" explanation="React makes it painless to create interactive UIs"/>
                <Features src="/images/icon2.png" text="Components" explanation="Build encapsulated components that manage their state"/>
                <Features src="/images/icon3.png" text="Single-way" explanation="A set of immutable values are passed to the component's"/>
                <Features src="/images/icon4.png" text="JSX" explanation="Statically-typed, designed to run on modern browsers"/>
                
          </div>
  </div>
  );
}


//exportacion
export default App;

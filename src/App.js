
import './App.css';
import {Button, Card} from 'react-bootstrap';
import React from 'react'; // added this line
import Amigo_cmp from './components/Amigo_cmp';

function App() {
  return (
    <>
    <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
              <a href="#" className="header_home_link" >
                  <h1 >Sitename</h1>
                  <h2>Feel the love.</h2>
              </a>
          </div>
          <div className="header_content_vert_right" > 
              <h2>firstName LastName</h2>
              <p>(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <a href="#">My Profile</a>
                  <a href="#">Logout</a>
              </div>
          </div>
      </div>
    </header>

    <main>
      <div className="row_left">
        <Amigo_cmp firstName={"Maria"} lastName={"Velasquez"} age={"39"} hairColor={"Roja"} />
        <Amigo_cmp firstName={"Jose"} lastName={"Garcia"} age={"50"} hairColor={"Negro"} />
        <Amigo_cmp firstName={"Juanito"} lastName={"Benito"} age={"50"} hairColor={"Rubio"} />
        <Amigo_cmp firstName={"Lupe"} lastName={"Hernandez"} age={"50"} hairColor={"Morena"} />

      </div>
    </main>
    </>

  );
}

export default App;

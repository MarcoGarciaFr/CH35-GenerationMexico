import './App.css'

import Navbar from './components/Navbar'

import Main from './components/Main'

import Button from './components/Button'

import Products from './components/Products'

function App(){

  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";

  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";

  const imgcamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
    
      < Navbar />

      < Main />

      < Button label = 'Traer información' />

      < Button label = 'Enviar información' />

      {/*< Button label = 'Combinar información' />*/}

      < Products
      
        img = {imgFashion}

        name = 'Fashion'

        description = 'Tennis Fitness Running Purple'

        price = '$1958'
      
      />

      < Products 
      
        img = {imgDark}

        name = 'Dark'

        description = 'Tennis Dark Running'

        price = '$2296'
      
      />

      < Products
      
        img = {imgcamel}

        name = 'Camel'

        description = 'Casual Tennis'

        price = '$3431'
      
      />

      < Products
      
        img = {imgDark}

        name = 'Dark-grey'

        description = 'Casual Tennis'

        price = '$3220'
    
      />

    </>

  )

}

export default App

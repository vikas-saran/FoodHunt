import React from 'react'
import  data  from '../restApi.json';
import '../styles/menu.css'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Popular dishes blend balanced flavors and fresh, high-quality ingredients. Their visual appeal and unique textures delight the senses, while cultural connections and consistent quality ensure they leave a lasting impression.</p>
            </div>
            <div className="dishes_container">
                {
                    data.data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu

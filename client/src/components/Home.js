import React from 'react';
import SailorMoon from './images2/sailor-moonhearts.gif';
import Dawn from './images2/dawn-pokemon.gif';
import Hana from './images2/hanamutou.gif';
import Howl from './images2/howlandsohpie.gif';

class Home extends React.Component {
    render() {
        return (
           <div>
            <section className="hero is-medium is-primary is-bold">
           <div className="hero-body">
             <div className="container">
               <h1 className="title">
               Welcome To Feminaku Collective!
               </h1>
               <h2 className="subtitle">
               Feminaku strives to provide a safe space for women 
                who love all genres of anime. Feel free to connect with other users and let's 
                share our love of anime together.
               </h2>
             </div>
           </div>
         </section>
         </div>
        )
    }
    
}

export default Home;
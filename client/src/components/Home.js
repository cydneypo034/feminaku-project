import React from 'react';
import SailorMoon from './images2/sailor-moonhearts.gif';
import Dawn from './images2/dawn-pokemon.gif';
import Hana from './images2/hanamutou.gif';
import Howl from './images2/howlandsohpie.gif';
import {Card} from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
           <div>
            <section class="hero is-medium is-primary is-bold">
           <div class="hero-body">
             <div class="container">
               <h1 class="title">
               Welcome To Feminaku Collective!
               </h1>
               <h2 class="subtitle">
               Feminaku strives to provide a safe space for women 
                who love all genres of anime. Feel free to connect with other users and let's 
                share our love of anime together.
               </h2>
             </div>
           </div>
         </section>

         <div className="container is-fluid">
             <div className="row">
                 <div className="col">

                 <Card style={{ width: '18rem' }}>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                        </div>

                        <div className="content">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                        </div>

                        <div className="content">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    </Card>


                 </div>
             </div>
         </div>

         





         </div>
        )
    }
    
}

export default Home;
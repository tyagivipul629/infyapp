import React from 'react';
import {Redirect} from 'react-router-dom';
import '../sass/Home.scss';

class Home extends React.Component{
    render(){
        if(!this.props.isLoggedin) return <Redirect to="/login" />;
        return(
            <div class="hero">


            <h1>BonStay</h1>
            
            <pre>Bonstay always provides you an amazing and pleasant stay
                with your family and friends!
            </pre>

            </div>
            // <div className="container-fluid" id="mainContainer">
            // <div className="row">
            //     <div className="col-sm-3"></div>
            //     <div className="col-sm-6 col-12"><p className="para">
            //     Bonstay always provides you an amazing and pleasant stay
            //     with your family and friends at reasonable prices.
            //     We provide well-designed space with modern amenities.
            //     You can reserve a room faster with our efficient BonStay app.</p></div>
            //     <div className="col-sm-3"></div>
            // </div>
            // </div>
        );
    }
}

export default Home;
import React from 'react';
import Meta from '../components/meta'
import Logo from '../components/logo'
import Typist from 'react-typist';
import tilt from 'vanilla-tilt';
export default class Home extends React.Component {

    componentDidMount() {

        tilt.init(this.thebox, {
            speed:200,
            max:35
        })
        

    }

    render = () => (
        <div>
            <div className="thebox" ref={ element => this.thebox = element }>
                <Meta/>
                <Logo/>
                weareinfinite
            </div>
            <div className="about__box">
                
                <Typist>
                Every product is designed and engineered by the solo-founder Sarath
                </Typist>
            </div>
           
        </div>
    )
} 
  
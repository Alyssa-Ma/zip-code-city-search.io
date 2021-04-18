import React from 'react';
import IMG from './IMG'

class Button extends React.Component {
    constructor() {
        super(); 
        this.state = { 
            showImg: false,
            isCat: false,
            isDog: false
        }

        this.handleClickClear = this.handleClickClear.bind(this);
        this.handleClickCat = this.handleClickCat.bind(this);
        this.handleClickDog = this.handleClickDog.bind(this);
    }

    handleClickClear(event) {
        this.setState({
          showImg: false,
          isCat: false,
          isDog: false
        });
    }

    handleClickCat(event) {
        this.setState({
          showImg: true,
          isCat: true,
          isDog: false

        });
    }

    handleClickDog(event) {
        this.setState({
          showImg: true,
          isCat: false,
          isDog: true
        });
    }

    render(){

        const showImg = this.state.showImg;
        const isCat = this.state.isCat;
        const isDog = this.state.isDog;
        return(

            
            <div>
                {showImg
                    ? <button onClick={ (e) => this.handleClickClear(e) }>Clear</button> 
                    : <div> <button onClick={ (e) => this.handleClickCat(e) }>Cat</button> 
                    <button onClick={ (e) => this.handleClickDog(e) }>Dog</button> </div>
                }

                {(showImg && isCat) && <IMG animal="Cat" />}
                {(showImg && isDog) && <IMG animal="Dog" />}

                
                
            </div>
        )
    }
   
}

export default Button;

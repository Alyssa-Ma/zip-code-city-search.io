import React from 'react';

class IMG extends React.Component {
    render(){
        const animal = this.props.animal;

        return (
            <p>{animal}</p>
        )
    } 
}

export default IMG;
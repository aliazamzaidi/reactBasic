import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <nav>
                <li>{this.props.link}</li>
                <li>Test 2</li>
            </nav>
        )
    }
}

export default Header;
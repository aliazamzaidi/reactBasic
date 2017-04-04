import React from 'react';

class Home extends React.Component{
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Home Component</h1>
                {this.props.children}
                <hr/>
                <p>This is Paragraph Element</p>
                <hr/>
                <p>My Name is {this.props.name}</p>
                <p>My Details from Object is {this.props.details.name}</p>
                <p> my Hobbies are: 
                    <ul>
                        {this.props.details.hobbies.map(
                            (details, key) => <li style={{fontSize:'1.3em',color:'green',fontStyle:'serif'}} key={key}>{details}</li>
                        )}
                    </ul>
                </p>
            </div>
        )
    }
}

// This Part is Making Problem... propTypes Are Making Problem

// Home.prototype = {
//     children: React.PropTypes.object,
//     age: React.PropTypes.number
// }

export default Home;
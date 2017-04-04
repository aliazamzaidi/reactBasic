import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.state = ({
            age: this.props.details.age,
            newLink: 'Azam'
        })
    }

    add(){
        this.setState({
            age: this.state.age + 3
        })
        // console.log(this.props.details.age)
    }

    changeLink(){
        this.props.onchange(this.state.newLink)
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Home Component</h1>
                {this.props.children}
                <hr/>
                <p>This is Paragraph Element</p>
                <p>Age is: {this.state.age}</p>
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
                <button className='btn btn-primary' onClick={()=> this.add()}>add</button>
                <button onClick={this.props.alert} className='btn btn-danger'>Alert!</button>
                <button onClick={this.changeLink} className='btn'>change Link1</button>
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
import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        characters:[
            {
                'name':'Charlie'
            }
        ]
    }

    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }

    render(){
        return(
            <div className="container">
                <h1>Hello, React!</h1>
                <Table data={this.state.characters}
                        removeCharacter={this.removeCharacter} 
                />
            </div>
        );
    }
}

export default App;
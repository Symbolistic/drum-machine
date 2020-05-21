import React from 'react'

const keys = [
    {
        key: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        ref: React.createRef(),
        display: "Heater 1"
    },

    {
        key: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        ref: React.createRef(),
        display: "Heater 2"
    },

    {
        key: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        ref: React.createRef(),
        display: "Heater 3"
    },

    {
        key: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        ref: React.createRef(),
        display: "Heater 4"
    },

    {
        key: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        ref: React.createRef(),
        display: "Clap"
    },

    {
        key: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        ref: React.createRef(),
        display: "Open HH"
    },

    {
        key: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        ref: React.createRef(),
        display: "Kick n' Hat"
    },

    {
        key: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        ref: React.createRef(),
        display: "Kick"
    },

    {
        key: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        ref: React.createRef(),
        display: "CLosed HH"
    },
]

class DrumApp extends React.Component {
    constructor () {
        super()
        this.state = {
            keys,
            display: '',
            color: "blue"
        };
        this.mainInput = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    handleClick (key) {
        console.log(key)
        const audio = this.state.keys.find(x => x.key === key);

        audio.ref.current.currentTime = 0;
        audio.ref.current.play();

        this.setState({display: audio.display})
    }

    handleKey (event) {
        console.log(event.target)

        const audio = this.state.keys.find(x => x.key === event.key.toUpperCase());
        if(audio){
            audio.ref.current.currentTime = 0;
            audio.ref.current.play();

            this.setState({display:audio.display})
        }
    }

    componentDidMount () {
        this.mainInput.current.focus();
    }


    render() {
        return (
            <div id='DrumAppContainer' tabIndex='0' onKeyPress={this.handleKey} ref={this.mainInput}>
                <div id="side1">
                    {this.state.keys.map(({key, src, ref}) => (
                        <button key={key} className="drum-pad" onClick={() => this.handleClick(key)} style={{"color":this.state.color}}>{key}
                            <audio id={key} className="clip" src={src} ref={ref}></audio>
                        </button>
                    ))}
                </div>

                <div id="side2">
                    <div id="display"><h1>{this.state.display}</h1></div>
                </div>
            </div>
        )
    }
}

export default DrumApp
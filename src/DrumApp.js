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
            display: 'Start Playing!',
            isToggled: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    handleClick (key) {
        const audio = this.state.keys.find(x => x.key === key);

        audio.ref.current.currentTime = 0;
        audio.ref.current.play();
        this.setState({display: audio.display})
        
        setTimeout(function() {
            audio.ref.current.parentElement.blur();
        }, 100);
    }

    handleKey (event) {
        const audio = this.state.keys.find(x => x.key === event.key.toUpperCase());
        console.log(audio.ref.current.parentElement)
        
        if(audio){
            audio.ref.current.currentTime = 0;
            audio.ref.current.play();
            this.setState({display: audio.display})
            audio.ref.current.parentElement.focus();

            setTimeout(function() {
                audio.ref.current.parentElement.blur();
            }, 100);
        }
    }

    componentDidMount () {
        document.addEventListener("keypress", this.handleKey)
    }

    componentWillUnmount() {
        document.removeEventListener("keypress", this.handleKey)
    }


    render() {
        return (
            <div id='DrumAppContainer'>
                <div id="side1">
                    {this.state.keys.map(({key, src, ref, style}) => (
                        <button key={key} className="drum-pad" onClick={() => this.handleClick(key)} onKeyPress={this.handleKey} >{key}
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
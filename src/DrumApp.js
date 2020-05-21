import React from 'react'

class DrumApp extends React.Component {
    constructor () {
        super()
        this.state = {

        }
        this.audioRefQ = React.createRef()
        this.audioRefW = React.createRef()
        this.audioRefE = React.createRef()
        this.audioRefA = React.createRef()
        this.audioRefS = React.createRef()
        this.audioRefD = React.createRef()
        this.audioRefZ = React.createRef()
        this.audioRefX = React.createRef()
        this.audioRefC = React.createRef()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        this.audioRefA.current.currentTime = 0;
        this.audioRefA.current.play();
    }

    render() {
        return (
            <div id='DrumAppContainer'>
                <div id="side1">
                    <div className="drum-pad" onClick={this.handleClick}>Q
                        <audio 
                            id='Q' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                            ref={this.audioRefQ}
                        />
                    </div>

                    <div className="drum-pad">W
                        <audio 
                            id='W' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                            ref={this.audioRefW}
                        />
                    </div>

                    <div className="drum-pad">E
                        <audio 
                            id='E' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                            ref={this.audioRefE}
                        />
                    </div>

                    <div className="drum-pad">A
                        <audio 
                            id='A' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                            ref={this.audioRefA}
                        />
                    </div>

                    <div className="drum-pad">S
                        <audio 
                            id='S' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                            ref={this.audioRefS}
                        />
                    </div>

                    <div className="drum-pad">D
                        <audio 
                            id='D' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                            ref={this.audioRefD}
                        />
                    </div>

                    <div className="drum-pad">Z
                        <audio 
                            id='Z' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                            ref={this.audioRefZ}
                        />
                    </div>

                    <div className="drum-pad">X
                        <audio 
                            id='X' 
                            className="clip" 
                            src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                            ref={this.audioRefX}
                        />
                    </div>

                    <div className="drum-pad">C
                        <audio 
                            id='C' 
                            className="clip"   
                            src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                            ref={this.audioRefC}
                        />
                    </div>

                </div>

                <div id="side2">
                    <div id="display"><h1>Output Here</h1></div>
                </div>
            </div>
        )
    }
}

export default DrumApp
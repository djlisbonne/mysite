import * as React from "react"
import "../components/styles.css"
import { StaticImage } from "gatsby-plugin-image"


class SunMoon extends React.Component {

   clockInterval = ""

   constructor() {
       super()
       this.handleDate = this.handleDate.bind(this);
       this.state = {
           hours: "",
           minutes: "",
           seconds: "",
       }
   }

    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval)
    }

    handleDate() {
        const date = new Date();
        let hours = this.formatTime(date.getHours());
        let minutes = this.formatTime(date.getMinutes());
        let seconds = this.formatTime(date.getSeconds());
        this.setState({ hours, minutes, seconds });
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    render() {
        const { hours, minutes, seconds } = this.state;
        const secondsStyle = {
          transform: `rotate(${seconds * 6}deg)`
        };
        const minutesStyle = {
          transform: `rotate(${minutes * 6}deg)`
        };
        const hoursStyle = {
          transform: `rotate(${hours * 30}deg)`
        };
        return (
            <div>
                <h2>Clock Experiment</h2>
                {/* <svg width="105" height="105" viewbox="0 0 105 105"fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="one">
                            <circle cx="52.5" cy="52.5" r="52.5" fill="#E8E8E8" fill-opacity="0.2"/>
                            <circle cx="52.5" cy="7" r="3.5" fill="black"/>
                        </g>
                        <g id="two">
                            <circle cx="38.5" cy="38.5" r="38.5" fill="#C4C4C4" fill-opacity="0.2"/>
                            <circle cx="38.5" cy="10.5" r="3.5" fill="black"/>
                        </g>
                    </g>
                </svg> */}
                <div class="img-container">
                    <StaticImage class="top" style={minutesStyle} src="../images/MinuteRingDot.png" alt="hour ring"/>
                    <StaticImage class="bottom" style={hoursStyle} src="../images/HourRingDot.png" alt="minute ring"/>
                </div>
                <h2>Digital Version</h2>
                <div>
                    {hours}:{minutes}:{seconds} 
                </div>

            </div>
        )
    }
    
}

export default SunMoon
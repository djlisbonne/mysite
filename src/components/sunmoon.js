import * as React from "react"
import "../components/styles.css"
import { StaticImage } from "gatsby-plugin-image"


class SunMoon extends React.Component {

   clockInterval = ""
   startTime = null

   constructor() {
       super()
       this.handleDate = this.handleDate.bind(this);
       this.state = {
           hours: "",
           minutes: "",
           seconds: "",
       }
       this.start();
   }

    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval)
    }

    start() {
        this.startTime = new Date();
    }

    handleDate() {
        const date = new Date();
        let hours = this.formatTime(date.getHours());
        let minutes = this.formatTime(date.getMinutes());
        let seconds = this.formatTime(date.getSeconds());
        this.setState({ hours, minutes, seconds });
        // console.log("function was called"); //Working!
        let timediff = date - this.startTime;
        timediff /= 1000;
        var secondsDiff = Math.round(timediff);
        console.log("DIFFERENCE SINCE PAGE LOADED: ", secondsDiff);
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    render() {
        const { hours, minutes, seconds } = this.state;
        return (
            <div>
                <h2>Digital Version</h2>
                <div id="digital-clock">
                    {hours}:{minutes}:{seconds} 
                </div>

            </div>
        )
    }
    
}

export default SunMoon
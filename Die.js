import React from "react"

export default function Die(props) {
    
    // const arr = [...Array(props.value)].map(dot => <span className="dot"></span>)
    const dotStyle = {
        backgroundColor:  props.isHeld ? "white" : "#59E391",
        display: "block",
        width: "10px",
        height: "10px",
        borderRadius: "50%"
        }
        
    const dots = Array.from(Array(props.value), (_, i) => <span key={i} className="dot" style={dotStyle}></span>)
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        
    }
    return (
        <div 
            className={`die-face die-face-${props.value}`} 
            style={styles}
            onClick={props.holdDice}
        >
            {dots}
        </div>
    )
}
import { useState,useEffect} from 'react'

import './App.css'

function App() {
  // State variables to manage countdown time, remaining time, and countdown state
  const [countdownTime, setCountdownTime] = useState('');
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  // Function to calculate the remaining time based on the target countdown time
  const calculateTimeRemaining = () => {
    const targetDate = new Date(countdownTime).getTime(); // Convert countdownTime to milliseconds
    const currentTime = new Date().getTime(); // Get the current time in milliseconds
    const timeRemaining = targetDate - currentTime; // Calculate the remaining time in milliseconds

    // Check if timeRemaining is zero or negative, indicating countdown has finished
    if (timeRemaining <= 0) {
      setIsCounting(false); // Stop the countdown
      setRemainingTime(0); // Set remainingTime to 0
    } else {
      setRemainingTime(timeRemaining); // Update remainingTime with the calculated value
    }
  };
  
  return (

  )
}


export default App

import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [watchForCount, setWatchForCount] = useState(0);

    useEffect(() => { // Runs after every render
        document.title = `You clicked ${watchForCount} times`;
        console.log("Use effect update");
    }, [watchForCount]);

    useEffect(() => { // Runs only once
        console.log("Loaded and ready");
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        console.log("UseEffectExample: Tick!")
        setWatchForCount(prevCount => prevCount + 1);
      }, 1000);
      console.log("UseEffectExample: Interval set");
    
      return () => {
        console.log("UseEffectExample: Interval cleared");
        clearInterval(interval);
      }
    }, [])
    


    return (
        <button onClick={() => setWatchForCount(watchForCount + 1)}>Click me!</button>
    )
}

export default UseEffectExample
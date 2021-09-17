import React, {useState} from 'react';
import './App.css';
import Button from "./button/Button";

function App() {
    const MAX: number = 5;
    const MIN: number = 0;
    const [count, setCount] = useState<number>(0)
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div className="App">
            <div>
                <div>
                    <div>{count}</div>
                </div>
                <div>
                    <Button onClick={incrementCount} disabled={count===MAX}>inc</Button>
                    <Button onClick={resetCount} disabled={count===MIN}>reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;

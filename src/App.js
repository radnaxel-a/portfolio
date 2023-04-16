import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MainBackground from './components/main-background/MainBackground';

function App() {
  return (
    <div>
    <MainBackground />

    <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={1}>
            <h1 style={{color: 'white'}}>Hello</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            layer 2
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
            layer 3
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
            layer 4
        </ParallaxLayer>
        </Parallax>    
    </div>
  );
}

export default App;

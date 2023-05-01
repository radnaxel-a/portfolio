import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MainBackground from './components/main-background/MainBackground';
import Loading from "./components/loading/Loading";
import { useState } from 'react';

function App() {
    const [state, setState] = useState({
        loadingSequenceVisibility: 'block',
        mainBackgroundVisibility: 0
    });

    function onLoadingSequenceComplete() {
        setState({
            loadingSequenceVisibility: 'none',
            mainBackgroundVisibility: 1
        });
    }

  return (
    <div style={{width: '100%', height: '100%'}}>
        { state.mainBackgroundVisibility === 0 ?
            (
                <Loading 
                    onLoadingSequenceComplete={onLoadingSequenceComplete} 
                    style={{display: state.loadingSequenceVisibility}}>
                </Loading>            
            ) :
            (
                <><MainBackground style={{ opacity: state.mainBackgroundVisibility }} />
                <Parallax 
                    pages={4} style={{ display: state.mainBackgroundVisibility }}>
                      <ParallaxLayer offset={0} speed={1}>
                          <h1 style={{ color: 'white' }}>Hello</h1>
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
                </Parallax></>    
            )
        }
    </div>
  );
}

export default App;

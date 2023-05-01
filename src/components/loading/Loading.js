import { useEffect, useState } from 'react';
import './Loading.css';

function Loading() {
    const [state, setState] = useState({
        loaderVisibility: 'block',
        staticVisibility: 'none',
        count: 0

    });

    useEffect(() => {
        if (state.count > 17) {
            return;
        }

        const timer = setTimeout(() => {
            if (state.count === 17) {
                setState(a => {
                    return {
                        ...a,
                        count: a.count++,
                        loaderVisibility: 'none',
                        staticVisibility: 'none',
                    }
                });

                return;
            }

            if (state.staticVisibility === 'none' && state.count > 10) {
                setState(a => {
                    return {
                        ...a, staticVisibility: 'block', loaderVisibility: 'none', count: a.count++
                    }
                });

                return;
            } 
            
            if (state.staticVisibility === 'block' && state.count > 10) {
                setState(a => {
                    return {
                        ...a, staticVisibility: 'none', loaderVisibility: 'none', count: a.count++
                    };
                });
                
                return;
            }

            setState(s => {
                return {
                    ...s,
                    count: s.count++
                }
            })
        }, 1500);

        return () => {
            clearTimeout(timer);
        }
    }, [state]);


    return (
        <div className='root-loading'>
            <div className='loader' style={{ display: state.loaderVisibility }}>
                <span id='loading-text'>Loading ... </span>
                <span id="loading-spinner"></span>
            </div>
            <div className='static' style={{ display: state.staticVisibility }} > 
                <video autoplay="true" muted loop>
                    <source src={require('./loading.mp4')} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Loading;
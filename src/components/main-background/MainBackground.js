import './MainBackground.css'

function MainBackground() {

    return (
        <div className='main-bg'>
            <video autoplay="true" muted="true" loop="true">
                <source src={require('./matrix.mp4')} type="video/mp4"></source>
            </video>      
        </div>
    );
}

export default MainBackground;
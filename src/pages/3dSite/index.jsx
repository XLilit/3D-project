import React, {useEffect, useRef, useState} from 'react';
import './style.scss'
import image1 from '../../assets/image/3dWebstie/images/1.jpg'
import image2 from '../../assets/image/3dWebstie/images/2.jpg'
import image3 from '../../assets/image/3dWebstie/images/3.jpg'
import image4 from '../../assets/image/3dWebstie/images/4.jpg'
import image5 from '../../assets/image/3dWebstie/images/5.jpg'
import mediaVideo from '../../assets/image/3dWebstie/media/video_optimized.mp4'
import sound from '../../assets/image/3dWebstie/images/sound.gif'
import audio from '../../assets/image/3dWebstie/media/ambient.mp3'

const Website3D = () => {
    const [paused, setPaused] = useState(false)

        let audioBtn = document.querySelector('.L-3D-audio')
    useEffect(() => {
        let zSpacing = -1000,
            lastPos = zSpacing / 5,
            $frames = document.getElementsByClassName('L-3D-frame'),
            framesArr = Array.from($frames),
            zVal = []
        window.onscroll = function () {
            let top = document.documentElement.scrollTop,
                delta = lastPos - top
            lastPos = top
            framesArr.forEach((n, i) => {
                zVal.push((i * zSpacing) + zSpacing)
                zVal[i] += delta * -5.5
                let frame = framesArr[i],
                    transform = `translateZ(${zVal[i]}px)`,
                    opacity = zVal[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
                frame.setAttribute('style', `transform:${transform} ; opacity:${opacity}`)

            })
        }
        window.scrollTo(0, 1)
        window.onfocus = function(){
            let soundButton = document.querySelector('.L-3D-sound-btn')
            soundButton.classList.contains('paused') ? audioBtn.pause() : audioBtn.play()
        }
        window.onblur = function(){
            audioBtn.pause()
        }
    }, [])

    const handleClick = () => {

        setPaused(!paused)
        !paused ? audioBtn.play() : audioBtn.pause()
    }
    return (
        <div className='L-website-3D'>
            <p className='L-3D-header-title'><a href='/'> &#10232; </a></p>
            <div className="L-3D-container">
                <section className='L-3D-gallery'>
                    <div className='L-3D-frame'>
                        <div className="L-3D-frame-content">
                            <h2>Beautiful World</h2>
                        </div>
                    </div>
                    <div className='L-3D-frame'>
                        <div className="L-3D-frame-content">
                            <div
                                className="L-3D-frame-media L-frame-media-left"
                                style={{backgroundImage: `url('${image1}')`}}/>
                        </div>
                    </div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content">
                            <video
                                className='L-3D-frame-media L-frame-media-right'
                                src={mediaVideo}
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>
                    <div className="L-3D-frame"></div>
                    <div className='L-3D-frame'>
                        <div className="L-3D-frame-content L-text-right">
                            <h3>Pure Planet</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa iusto magnam maiores
                                natus quaerat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content">
                            <div
                                className="L-3D-frame-media L-frame-media-left"
                                style={{backgroundImage: `url('${image2}')`}}/>
                        </div>
                    </div>
                    <div className="L-3D-frame"></div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content">
                            <div
                                className="L-3D-frame-media L-frame-media-right"
                                style={{backgroundImage: `url('${image3}')`}}/>
                        </div>
                    </div>
                    <div className="L-3d-frame"></div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content L-text-left">
                            <h3>Ask the Mountains</h3>
                            <p>Cum eos esse eveniet excepturi,
                                expedita fugiat labore libero minus mollitia odit officiis omnis, quaerat quo tenetur
                                vel vero voluptates? Harum, quaerat?. </p>
                        </div>
                    </div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content">
                            <div
                                className="L-3D-frame-media L-frame-media-right"
                                style={{backgroundImage: `url('${image4}')`}}/>
                        </div>
                    </div>
                    <div className='L-3D-frame L-frame-bg '>
                        <div className="L-3D-frame-content">
                            <video
                                className='L-3D-frame-media L-frame-media-left'
                                src={mediaVideo}
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>
                    <div className="L-3D-frame"></div>
                    <div className="L-3D-frame"></div>
                    <div className='L-3D-frame L-frame-bg'>
                        <div className="L-3D-frame-content">
                            <div
                                className="L-3D-frame-media L-frame-media-right"
                                style={{backgroundImage: `url('${image5}')`}}/>
                        </div>
                    </div>
                    <div className='L-3D-frame '>
                        <div className="L-3D-frame-content">
                            <video
                                className='L-3D-frame-media '
                                src={mediaVideo}
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                    </div>
                    <div className="L-3D-frame"></div>
                    <div className="L-3D-frame"></div>

                    <div className="L-3D-frame">
                        <div className="L-3D-frame-content">
                            © WebDesign Master
                        </div>
                    </div>
                </section>
                <img src={sound} alt="alt" className={!paused ? "L-3D-sound-btn paused" : "L-3D-sound-btn "}
                     onClick={handleClick}/>
                <audio className='L-3D-audio' src={audio} loop></audio>
            </div>
        </div>
    );
};

export default Website3D;

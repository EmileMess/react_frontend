import React from "react";
import Button from '@material-ui/core/Button';
import '..//App.css';
import imagetest from '..//images/cv.jpg'

function Home() {
    return (
        <div className="Home">
            <div className="Space"></div>

            <h1>Give your software the sense of sight</h1>
            <h2>With a few images, you can train a working computer vision model in an afternoon.</h2>
            <br/>
            <a className="TryLink" href="/tool">Try It Now</a>
            <br/>
            <br/>
            <br/>
            <Button onClick={() => window.location.replace("/#section1")} variant="outlined">
            Upload
            </Button> &nbsp; &nbsp;
            <Button onClick={() => window.location.replace("/#section2")} variant="outlined">
            Organize
            </Button> &nbsp; &nbsp;
            <Button onClick={() => window.location.replace("/#section3")} variant="outlined">
            Annotate
            </Button> &nbsp; &nbsp;
            <Button onClick={() => window.location.replace("/#section4")} variant="outlined">
            Train
            </Button> &nbsp; &nbsp;
            <Button onClick={() => window.location.replace("/#section5")} variant="outlined">
            Deploy
            </Button>

            <div className="Space"></div>
            <div className="FindMore">
                <a>Find out more</a>
                <br/>
                &darr;
            </div>
            <div className="Space"></div>
            <br/>
            <br/>

            <div className="StoryCollection">
                <div className="Story">
                    <br/><br/>
                    <h3>We help innovators like you apply computer vision.</h3>
                    <a>Read more about customer stories in our documentation.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
                <div className="Story" id={'section1'}>
                    <br/><br/>
                    <h3>Upload training data directly from the source.</h3>
                    <a>Upload files manually or via API including images, annotations, and videos. We support dozens of annotation formats and make it easy to continuously add new training data as you collect it.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
                <div className="Story" id={'section2'}>
                    <br/><br/>
                    <h3>Organize and conduct experiments all in one centralized place.</h3>
                    <a>Assess the quality of your datasets and prepare them for training. Experiment with transformation tools to generate new training data and see what configurations lead to improved model performance.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
                <div className="Story" id={'section3'}>
                    <br/><br/>
                    <h3>Annotate images super fast, right within your browser.</h3>
                    <a>Label using any operating system without downloading any software. Use the most popular annotation formats including JSON, XML, CSV, and TXT. You and your team can annotate hundreds of images in mere minutes.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
                <div className="Story" id={'section4'}>
                    <br/><br/>
                    <h3>Host a trained model with a single click... Or build your own custom models.</h3>
                    <a>Deploy your model to the cloud, the edge, or the browser. Get predictions where you need them and in half the time.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
                <div className="Story" id={'section5'}>
                    <br/><br/>
                    <h3>It's time to invest in your long-term computer vision strategy.</h3>
                    <a>Even the best trained models slowly start to degrade over time. Roboflow provides a streamlined workflow for identifying edge cases and deploying fixes. With each iteration, your models become smarter and more accurate.</a>
                    <br/><br/>
                    <img src={imagetest} />
                </div>
            </div>
        </div>
    );
}

export default Home;
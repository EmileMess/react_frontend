import React from "react";
import Button from '@material-ui/core/Button';
// import styled from 'styled-components';
// import styles from "./stylesheet.css";

// const Wrapper = styled.section`
//   padding: 40px;
//   background: black;
// `;

function Home() {
    return (
        <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Give your software the sense of sight</h1>
            <h3>With a few images, you can train a working computer vision model in an afternoon.</h3>
            <br/>
            <p><a href="/tool">Try it now</a></p>
            <br/>
            <br/>
            <Button variant="outlined" color="black" component="span">
            Upload
            </Button> &nbsp; &nbsp;
            <Button variant="outlined" color="black" component="span">
            Organize
            </Button> &nbsp; &nbsp;
            <Button variant="outlined" color="white" component="span">
            Annotate
            </Button> &nbsp; &nbsp;
            <Button variant="outlined" color="white" component="span">
            Train
            </Button> &nbsp; &nbsp;
            <Button variant="outlined" color="white" component="span">
            Deploy
            </Button>
        </div>
    );
}

export default Home;
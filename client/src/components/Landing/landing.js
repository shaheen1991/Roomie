import React from "react";
import "./landing.css";
// import Beatloader from "beatloader";
import { css } from 'react-emotion';
import { ClipLoader, BeatLoader } from 'react-spinners';
// import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Landing extends React.Component {
    constructor(props){
super(props);

this.state={
    loading:true
}



    }
    componentWillMount() {

       console.log("WILL MOUNT: ", this.state.loading)
    }
       componentDidMount() {
        setTimeout(()=> this.setState({loading:false}),1500)
      
       console.log("DID MOUNT: ", this.state.loading)
    }

    
    render(){
        const loading = this.state.loading;

        if(loading){
            return(
                <div className='sweet-loading'>
                <BeatLoader
                className={override}
                sizeUnit={"px"}
                size={100}
                color={'#F9BA32'}
                loading={this.state.loading}
                />
            </div> 
            )

        }else{
            return(

                <div>
                 
                   <div id = "landing">                 
                   <h1 id="welcomeText">Welcome to Roomie</h1>   
                       <div id= "landingLeft">
                           <img id="side2" alt="side2" src="/img/side2.png"/>
                       </div>
                       <div id="landingRight">
                           <img alt="" id="rightPic"/>
                       </div>
                       <div id="icon">
                           <img id="roomieIcon" alt="" src="/img/roomieIconTrans.png"/>
                           <img id="side" alt="" src="/img/side.png"/>
                       </div>
                           <img id="roomieIcon" alt="roomie icon" src="/img/roomieIconTrans.png"/>
                           <img id="side" alt="side" src="/img/side.png"/>
                   </div>
               </div>
   
   
           )
            
        }

        
    }
   
}
;

export default Landing;
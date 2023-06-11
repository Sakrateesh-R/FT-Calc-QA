import twitter from "../images/icons8-twitter-96.png";


export default function Footer(){

    return(
    <div className="body-footer-container">
        <div className="Footer-Container">  
            <div className="follow d-bottom text-light ">
                <h2 className="pt-3 Title" Style={{textAlign:"center"}}>Connect with us..</h2>
                <div className="follow-container d-flex justify-content-around ">
                    <div className="flink facebook  py-3">
                        <a href="mailto:futuretech23122022@gmail.com">
                            <img src="https://img.icons8.com/color/64/null/apple-mail.png"/>
                        </a>
                    </div>
                    <div className="flink facebook  py-3">
                        <a href="#" target={"_blank"}>
                            <img src={twitter} alt="Facebook" width="50"/>
                        </a>
                    </div>
                    {/* <link type="image/png" sizes="96x96" rel="icon" href=".../icons8-twitter-96.png"/> */}
                    <div className="flink Insta  py-3">
                        <a href="https://www.instagram.com/future_technology_23/" target={"_blank"}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" alt="Instagram" width="50" />
                        </a>
                    </div>
                    <div className="flink LinkedIn  py-3">
                        <a href="https://www.linkedin.com/in/future-technology-61370625b" target={"_blank"}>
                            <img src="https://img.icons8.com/color/48/null/linkedin.png"/>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="LinkedIn" width="150" /> */}
                        </a>
                    </div>

                </div>
            </div>
        </div>   
        <div className="version-container">
            <p>Version FT 0.13</p>
        </div>
    </div>

    
    )
}
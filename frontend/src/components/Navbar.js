import twitter from "../images/icons8-twitter-96.png";
export default function Navbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">FT Calc</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/interest"> Calculate Interest </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/profit/loss"> Calculate Profit & Loss</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/deprecation"> Calculate Depreciation</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/bmi"> Calculate BMI</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="navbar-left d-none d-xl-block">
                <h1><a className="nav-link"href="/">FT Calc</a></h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculate Interest" aria-current="page" href="/interest"> Calculate Interest </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Profit/Loss" aria-current="page" href="/profit/loss"> Calculate Profit & Loss</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Deprecation" aria-current="page" href="/deprecation">Calculate Deprecation</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Deprecation" aria-current="page" href="/bmi">Calculate BMI</a>
                    </li>
                </ul>
                <div className="contact-section-body ">
                    <h4 className="text-light"><u>Contact Us</u></h4>
                    <ul className="navbar-nav">
                    <div className="contact-section">
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
                    </div>
                    {/* <link type="image/png" sizes="96x96" rel="icon" href=".../icons8-twitter-96.png"/> */}
                    <div className="contact-section">
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
                    </ul>
                    <div className="version-container">
                        <p>Version FT 0.20</p>
                    </div>
                </div>
            </div>
        
        </div>  
    )
}
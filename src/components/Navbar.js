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
                        <a className="nav-link" aria-current="page" href="/"> Calculate Interest </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/profit/loss"> Calculate Profit & Loss</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="navbar-left d-none d-xl-block">
                <h1>FT Calc</h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculate Interest" aria-current="page" href="/"> Calculate Interest </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Profit/Loss" aria-current="page" href="/profit/loss"> Calculate Profit & Loss</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="Deprecation" aria-current="page" href="/deprecation">Calculate Deprecation</a>
                    </li>
                </ul>
        </div>
        </div>  
    )
}
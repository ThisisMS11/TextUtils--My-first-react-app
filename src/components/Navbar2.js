import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2(props) {

    const [mystyle, setmystyle] = useState({
        backgroundColor: 'white',
        border: 'none'
    })

    const switchcolor = (color) => {

        if (mystyle.backgroundColor === 'white') {
            setmystyle({
                backgroundColor: color
            })
        }
        else {
            setmystyle({
                backgroundColor: 'white'
            })
        }



        // ? in case you want to change the title of  the  page dynamically then :-
        // document.title='new title+' 

    }


    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">


                            {/* for linking with links using react router we use 'Link' instead of 'anchor' tag and 'to' instead /of 'href' */}



                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.abouttext}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* this is terniary operator  */}
            {/* for blue mode */}
            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => props.togglemode('#111c4f')}>
                <input className="form-check-input text-white" style={mystyle} onChange={() => switchcolor('blue')} type="checkbox" role="switch" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">bluedark</label>
            </div>

            {/* for greenmode */}
            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => props.togglemode('green')}>
                <input className="form-check-input text-white" style={mystyle} onChange={() => switchcolor('green')} type="checkbox" role="switch" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">greendark</label>
            </div>


            {/* for redmode */}
            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => props.togglemode('red')}>
                <input className="form-check-input text-white" style={mystyle} onChange={() => switchcolor('red')} type="checkbox" role="switch" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">reddark</label>
            </div>

            {/* for blackmode */}
            <div className={`form-check form-switch mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => props.togglemode('black')}>
                <input className="form-check-input text-white" style={mystyle} onChange={() => switchcolor('black')} type="checkbox" role="switch" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">blackdark</label>
            </div>
        </nav>
    );
}

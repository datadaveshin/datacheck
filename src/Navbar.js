import React, {Component} from 'react';
import "./Navbar.css";

export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar-bar">
                <ul>
                    <li>
                        <a
                          className="Nav-link"
                          href="https://bl1231.als.lbl.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            SIBYLS
                        </a>
                    </li>
                    <li>
                        <a
                          className="Nav-link"
                          href="http://bl1231.als.lbl.gov/htsaxs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            Mail-In
                        </a>
                    </li>
                    <li>
                      <a
                        className="Nav-link"
                        href="http://bl1231.als.lbl.gov/ran"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        SAXS Frameslice
                      </a>
                    </li>
                    <li>
                        <a
                          className="Nav-link"
                          href="https://bl1231.als.lbl.gov/saxs_similarity/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                            SAXS Similarity
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

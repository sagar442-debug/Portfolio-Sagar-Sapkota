import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Navbar() {
    return (
        <>
            <div className="font-poppins text-white flex justify-between">
                <h1>Sagar Portfolio</h1>
                <ul className='text-white flex space-x-14'>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Technologies</a></li>
                    <li><a href="/">About me</a></li>
                </ul>
                <div className="logos flex">
                    <a href="https://facebook.com">
                        <FontAwesomeIcon className='h-7' icon={faSquareTwitter} />

                    </a>

                </div>
            </div>
        </>
    )
}

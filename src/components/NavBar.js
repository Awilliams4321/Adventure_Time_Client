import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props){
    return (
        <nav>
            <Link to="/trails">All Trails</Link>
            <Link to="/trails/new">New Trail</Link>
        </nav>
    )
}
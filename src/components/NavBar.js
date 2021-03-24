import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <nav>
            <Link to="/trails">All Trails</Link>
            <Link to="/trails/new">New Trail</Link>
            <Link to="/trails/favorites">Favorite Trails</Link>
        </nav>
    )
}
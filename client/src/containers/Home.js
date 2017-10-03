import React, { Component } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import Jumbotron from '../components/jumbotron'
import Navigation from '../components/navigation'

const menuSettings = [
    {
        name: 'home',
        hashTag: '#home'
    },
    {
        name: 'what we do',
        hashTag: '#what-we-do'
    },
    {
        name: 'partners',
        hashTag: '#partners',
    },
    {
        name: 'about',
        hashTag: '#about'
    },
    {
        name: 'daily',
        hashTag: '#daily'
    }
]

class Home extends Component {
    render() {
        const { props } = this
        return(
            <div className="home">
                <Navigation menu={menuSettings}/>
                <div className="container">
                </div>
            </div>
        )
    }
}

export default Home

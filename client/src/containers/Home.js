import React, { Component } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import Jumbotron from '../components/jumbotron'
import Navigation from '../components/navigation'
import WhatWeDo from '../components/whatwedo'
import About from '../components/about'
import Team from '../components/team'
import Partners from '../components/partners'
import Daily from '../components/daily'
import Footer from '../components/footer'

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

                <Navigation { ...props } />
                <Jumbotron />
                <WhatWeDo />
                <About />
                <Team />
                <Partners />
                <Daily />
                <Footer />
            </div>
        )
    }
}

export default Home

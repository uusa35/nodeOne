/**
 * Created by usamaahmed on 2/18/17.
 */
import React , { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
export default class MainTemplate extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
            </div>
        );
    }
}
/**
 * Created by usamaahmed on 2/16/17.
 */
import React , { Component } from 'react';
import MainTemplate from './components/MainTemplate';
export default class App extends Component {

    constructor(props, content) {
        super(props, content);
    }

    doClick() {
        alert('i was clicked');
    }
    render() {
        return (
            <div>
                <MainTemplate/>
            </div>
        );
    }
}
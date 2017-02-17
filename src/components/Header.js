/**
 * Created by usamaahmed on 2/18/17.
 */
/**
 * Created by usamaahmed on 2/16/17.
 */
import React , { Component } from 'react';

export default class Header extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src="http://placehold.it/1000x300" alt=""/>
                            <div className="intro-text">
                                <span
                                    className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
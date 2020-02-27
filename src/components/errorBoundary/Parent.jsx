import React, { Component } from 'react'
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

export default class Parent extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div>
                    {/* <Hero name='Superman' />
                <Hero name='batman' /> */}
                    <Hero name='joker' />
                </div>
            </ErrorBoundary>
        )
    }
}

import React, { Component } from 'react';
import Options from '../Options/Options.js'


class Features extends Component {
    render() {
        return Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Options
                        features={this.props.features}
                        feature={feature}
                        selected={this.props.selected}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                        handleUpdate={this.props.handleUpdate} 
                    />
                </fieldset>
            );    
        });
    }
}
 
export default Features;
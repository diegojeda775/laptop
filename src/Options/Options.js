import React, { Component } from 'react';
import slugify from 'slugify';

class Options extends Component {
    
    render() {
        const { feature, features, USCurrencyFormat, handleUpdate } = this.props
        const op = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.props.selected[feature].name}
                        onChange={e => handleUpdate(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            );
        });
        return op;
        
    }

}

export default Options;
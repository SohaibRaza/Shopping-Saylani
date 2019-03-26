import React, { Component } from 'react';

class Items extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <div className="item-image">
                        <img src="" alt=""/>
                    </div>
                    <div>
                        Item Name
                    </div>
                    <div>
                        Price
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Items;
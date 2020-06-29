import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Import extends Component {
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src='../js/custom.js' />);
    }
}

export default Import;
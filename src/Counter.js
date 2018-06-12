import React from 'react';
import { connect } from 'react-redux';


function Counter(props) {
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

//Dispatch Action
function mapDispacthToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('the button works on it!')
            const action = {type: 'INCREMENT' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Counter);
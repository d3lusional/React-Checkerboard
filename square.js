/*
My code
ReactDOM.render(
    React.createElement('div', null, 
        React.createElement('h1, null')
*/

//example
ReactDOM.render(
    React.createElement('div', {style: { height:'300px', display: 'inline-block'}}, 
        React.createElement('h1', { style: { display: 'inline-block', width: '200px', height:'300px', backgroundColor: 'blue', color: 'white' } }, 'White on blue'),
        React.createElement('h1', { style: { display: 'inline-block',  width: '200px', height:'300px', backgroundColor: 'red', color: 'blue' } }, 'Blue on read'),
            React.createElement('h1', { style: { display: 'inline-block', width: '200px', height:'300px', backgroundColor: 'pink', color: 'green' } }, 'White on blue'),
    ),
    document.getElementById('root')
    );

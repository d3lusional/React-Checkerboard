var totalRows = prompt("How many Rows do you want?");


function CheckerBoard (props) {
    let arrCheckers = [];
    console.log("Checker prop:" +props)
    for (let i = 0; i < props.num; i++){
            let boardKey = "b"+i;
            arrCheckers.push(React.createElement(Row, {num:props.num, key:boardKey}))
        }
    

    return React.createElement('div',null, arrCheckers)
  }
  function Row (props) {
      console.log("Row:" +props)
      let arrCell = [];
      for (let i = 0; i < props.num; i++){
          if (i % 2 === 0) {
              arrCell.push(React.createElement(Cell, {color:'red', key:i}))
          } else {
              arrCell.push(React.createElement(Cell, {color:'black', key:i}))
          }
    }
    return React.createElement('div', null, arrCell)
  }
  function Cell (props) {
    return React.createElement('div', {style: {...styles.cell, ...styles.colorA, backgroundColor:props.color,} }, '')

  }
  
  
  // And feel free to use the following object:
  var styles = {
    row: {height: '20px', display:'block'},
    cell: {height: '20px', width: '20px', display:'inline-block', margin:'0'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
  }

ReactDOM.render(
    //    React.createElement(Cell, {color:'red'}),
        React.createElement(CheckerBoard,{num:totalRows}),
        document.getElementById('root')
)
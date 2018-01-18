var totalRows = prompt("How many Rows do you want?");

function CheckerBoard (props) {
    let arrCheckers = [];
    console.log("Checker Props")
    console.log(props)
    for (let i = 0; i < props.num; i++){
            let boardKey = "b"+i;
            console.log("Board Key:" )
            console.log(boardKey)
                arrCheckers.push(React.createElement(Row, {num:props.num, key:boardKey, superKey:i   }))
               // arrCheckers.push(React.createElement(Cell, {color:'red', boardKey}))
            
            }
        
    return React.createElement('div',null, arrCheckers)
  }

  function Row (props) {
      console.log("props superKey:")
      let arrCell = [];
      for (let i = 0; i < props.num; i++){
          console.log("cellKey: " + i)
          console.log(props.superKey+i)
          const IsRed = (props.superKey + i) % 2 === 0
          if (IsRed) {
              arrCell.push(React.createElement(Cell, {color:'black', key:i}))
            } else {
                arrCell.push(React.createElement(Cell, {color:'red', key:i}))
          }
    }
    return React.createElement('div', {style: {...styles.row}}, arrCell)
  }

  
  function Cell (props) {
    return React.createElement('div', {style: {...styles.cell, backgroundColor:props.color,} }, '')
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
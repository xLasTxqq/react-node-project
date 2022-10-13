import React,{useState,useEffect} from 'react'

const Game=()=>{  

  const width = 10
  const height = 10
      

  const [currentCell,setCurrentCell]=useState([])

  const createMap=()=>{
      const cells=[
        // 'red',
        // 'blue',
        // 'green',
        // 'purple',
        // 'yellow',
        // 'gray',
        // 'cyan',
        // 'orange'
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "light",
        "dark",
    ]
    const randomCellAll=[]
    for (let i=0; i<width*height; i++){
      const randomCell = cells[Math.floor(Math.random()*cells.length)]
      randomCellAll.push(randomCell)
    }
    setCurrentCell(randomCellAll)
  }

  useEffect(createMap,[])
  // useEffect(()=>{
  //   createMap()
  // },[])

    // console.log(currentCell)
  return (    
     <div className="d-flex pady min-vh-100 flex-wrap align-items-center justify-content-center">

        {currentCell.map((cells, index) => (

          <img alt='' key={index} className={'bg-'+cells+' w-10 ratio-cube'} />

          ))}
     </div>
     
    )
}

export default Game;
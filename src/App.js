import { useMemo } from "react";
import './App.css';

const data = [[1,1,1] , [0,1,1] , [1,0,1], [1,0,1] ,[1,0,1], [1,0,1] ,[1,0,1]]

function BoxSelect({data}) {
  const boxes = useMemo(() => data.flat(Infinity), [data])

  return (
    <div className="container">

      {
        boxes.map((box, index) => (
          <div key={`${box}-${index}`} className="box" />
        ))
      }


    </div>
  );
}

function App(){
  return <>
    <BoxSelect data={data}/>
  </>
}
export default App;

// https://www.youtube.com/watch?v=DCoIeGt4g7M&t=509s
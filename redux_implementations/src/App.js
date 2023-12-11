import { useEffect } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addData, removeData } from './reducers/dataReducer';
import { addToGlobalState, removeFromGlobalState } from './reducers/globalReducer';
function App() {
  // accessing redux dataList data
  const dispatch=useDispatch()
  const dataList=useSelector(data=>data.dataList)
  const globalState=useSelector(data=>data.globalState)


  useEffect(()=>{
      console.log(dataList)
      console.log(globalState)
  },[])

  const addToList=()=>{
    let last=dataList[dataList?.length-1]
    dispatch(addData(last>0?last+1:1 ))
  }
  const removeFromList=()=>{
    dispatch(removeData())
  }
  const addKeyAndValue=()=>{
    dispatch(addToGlobalState({id:1,name:'john'}))
    console.log(globalState)
  }
  const removeKey=()=>{
    dispatch(removeFromGlobalState('name'))
    console.log(globalState)
  }

  return (
    <div className="App">
      <h1>dataList management</h1>
      <p>{'redux implementations -> adding single element to an state array'}</p>
      <button onClick={addToList}>add data to list</button>
      <button onClick={removeFromList}>remove data from list</button>
      {dataList?.map((item)=>(
        <p>{item}</p>
      ))}

      <hr/>
      <h1>data Object management</h1>
      <p>{'redux implementations -> adding key and value to the data object'}</p>
      <button onClick={addKeyAndValue}>add key and value to object</button>
      <button onClick={removeKey}>remove key from object</button>
      {Object.entries(globalState)?.map(([key,value])=>(
        <p>{key}:{value}</p>
      ))}

    </div>
  );
}

export default App;

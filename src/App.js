import './test.scss';
import React from 'react';


function App() {
  const [todo,setTodo] = React.useState([
                  {title:"Гост 503-81", 
                  text:<div>
                    <img className="gost-503-81" src="/img/503-81-1.png"/>
                    <img className="gost-503-81" src="/img/503-81-2.png"/>
                    <img className="gost-503-81" src="/img/503-81-3.png"/>
                    </div>},
               
                ]); 

 
  const scrollUp = () =>{
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const [searchValue,setSearchValue] = React.useState('');
  const [size,setSize]= React.useState('');
  const [sum,setSum]= React.useState('');

  function result(num1,num2){
    let value1,value2,value3;
    if(num1<12 || num2>28){
      return false;
    }
    if(num2>1){
      value1=num1*num2;
        if(num2==2){
          value2=num2 * 3 + 20;
        }
        else{
          value2=(num2-1) * 3 + 20;
        }
        return value3=(515-(value1+value2))/2;  
    }
    else if(num2==0 || num2==1 || num2==2){
      value1=num1+20; 
      return value3=(515-value1)/2; 
    }
}
  const handleChangeSizeValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize(value);
    }
    if (onlyNumbers.test(value)) {
      setSize(+value)
    }
  }

  const handleChangeSumValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSum(value);
    }
    if (onlyNumbers.test(value)) {
      setSum(+value);
    }
  }
  function clearAll(){
    setSize("");
    setSum("");
  }
  
 
  return (
    <>
      <div className="container">
        <div className='main'>  
        {searchValue? "":<div className='grid'>
            <input className='grid__input-1' value={size} onChange={handleChangeSizeValueInput} placeholder='р' />
            <input className='grid__input-2'value={sum} onChange={handleChangeSumValueInput} placeholder=' к-во ' /> 
            <div className='grid__1'>{result(size,sum)}</div>
            {size ?<img onClick={clearAll} className={size?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" />:""}
          </div>}
          
          <div className='main__block-search'>
              <div className='main__search'>
                <img className='main__search-icon' width={20} height={20} src="/img/search-icon-input.svg" alt=""/>
                <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder='Поиск...'></input> 
                
                {searchValue?<img className='main__search-clear' onClick={()=>setSearchValue('') } width={17} height={17} src="/img/close-search-input.svg" alt=""/>:""}
              </div>
              
          </div>
    
          {todo.filter(obj=>{
            if (obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
              return true;
            }
            else{
              return false;  
            }
          }).map((obj,i)=>(<details key={i}> 
            <summary>{obj.title}</summary> <img onClick={()=>scrollUp()} className='scroll-to-up' src="./img/scroll-to-up.svg"alt=""/>
            {obj.text}
          </details>))}   
        </div>
      </div> 
    </>
    
  );
}
export default App;

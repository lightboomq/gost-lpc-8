import './test.scss';
import React from 'react';


function App() {
  const [todo] = React.useState([
                  {title:"Гост 503-81", 
                  text:<div className='div-503-81'>
                    <img className="gost-503-81" src="/img/503-81-1.png" alt="1"/>
                    <img className="gost-503-81" src="/img/503-81-2.png" alt="2"/>
                    <img className="gost-503-81" src="/img/503-81-3.png" alt="3"/>
                    <h4 className='h4-first-element'>1. На обрезной ленте не допускаются торцевые трещины и зазубрены глубиной более половины предельного отклонения по ширине и заусенцы – более предельного отклонения по толщине.<br/>
                     &nbsp; &nbsp;&nbsp;На необрезанной ленте не допускается рваная кромка глубиной более предельного отклонения по ширине ленты.</h4>
                    <h4 className='h4-first-element'>2. Расслоение ленты не допускается.</h4>
                    <h4 className='h4-first-element'>3. Следы излома (световые линии) на дрессированной ленте 1 и 2-й групп не допускаются. На дрессированной ленте 3 и 4-й 
                    групп поверхности допускаются следы излома, глубиной не более 3 мкм.<br/>
                    &nbsp; &nbsp;&nbsp;На недрессированной ленте всех групп поверхности допускается наличие изломов и полос – линий скольжения. Шероховатость поверхности недрессированной ленты не нормируется.</h4>
                    <h4 className='h4-first-element'>4. Для лент с обрезной кромкой, изготовляемых с контролем серповидности, величина серповидности не должна превышать норм, указанных в табл.3</h4>
                    <h3>Обвязка полосы соломой в 3-х местах.</h3>
                    </div>},          
                ]); 

 
  const scrollUp = () =>{
    window.scrollTo(
      {top:0,behavior:'smooth'});
  };

  const [searchValue,setSearchValue] = React.useState('');
  const [size,setSize]= React.useState('');
  const [sum,setSum]= React.useState('');

  function result(num1,num2){
    let value1,value2;
    if(num1<12 || num2>28){
      return false;
    }
    if(num2>1){
      value1=num1*num2;
        if(num2===2){
          value2=num2 * 3 + 20;
        }
        else{
          value2=(num2-1) * 3 + 20;
        }
        return (515-(value1+value2))/2;  
    }
    else if(num2===0 || num2===1 || num2===2){
      value1=num1+20; 
      return (515-value1)/2; 
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
            {size ?<img onClick={clearAll} className={size?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" alt=""/>:""}
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

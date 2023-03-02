import './test.scss';
import React from 'react';
import NotFound from './NotFound/NotFound';
function App() {
  const [todo] = React.useState([
                  {title:"Гост 503-81",
                   text:<div id='gost-503-1' className='div-503-81'>
                    <img className="img-gost-all" src="/img/503-81-1.png" alt="1"/>
                    <img className="img-gost-all" src="/img/503-81-2.png" alt="2"/>
                    <img id='gost-503-2' className="img-gost-all" src="/img/503-81-3.png" alt="3"/>
                    </div>
                  },
                  {
                    title:"Гост ТУ 14-4-1207-82",
                    text:<div>
                      <p>
                        Настоящие условия распространяются на холоднокатаную ленту из низкоуглеродистой стали, предназначенную для изготовления деталей автомобилей ВАЗ и КамАЗ.<br/>
                      </p>   
                        <p>
                        1. Предельные отклонения по толщине и ширине  должны соответствовать требованиям <a onClick={clearSearch} href="#gost-503-1">ГОСТ 503-81</a> для нормальной и повышенной (Т и Ш) точности изготовления. По требованию потребителя лента может изготовляться высокой точности по толщине (В). Класс точности указывается в заказе. 
                        </p>                                            
                        <p>2. По виду и качеству поверхности лента должна соответствовать 1,2 или 3 группе отделки поверхности по <a onClick={clearSearch}  href='#gost-503-1'>ГОСТ 503–81</a> группа отделки поверхности оговаривается в заказе.</p>
                        <p>3. <span>Серповидность</span> ленты должна соответствовать классу А или Б по <a onClick={clearSearch}  href='#gost-503-2' >ГОСТ 503–81 таблица 3</a> Класс ленты оговаривается в заказе.</p>
                     </div>
                    },
                    {
                      title:"Гост ТУ 14-1-5262-2008",
                      text:<div>
                        <img className="img-gost-all" src="/img/5262.png" alt=""/>
                      </div>  
                    },
                    {
                     title:"Гост 16523-97",
                     text:<div>
                        <p>
                        Настоящий стандарт распространяется на тонколистовой горячекатаный и холоднокатаный прокат из углеродистой стали качественной и обыкновенного качества общего назначения, изготовляемый шириной 500 мм и более, толщиной до 3,9 мм включительно.
                        </p>
                        <p>
                          В части сортамента прокат должен соответствовать требованиям: <a onClick={clearSearch}  href=''>ГОСТ 19903</a> – горячекатаный <a onClick={clearSearch}  href=''>ГОСТ 19904</a> – холоднокатаный (нет госта в выписках)
                        </p>
                      </div>  
                    },
                    {
                     title:"Гост 19903-74",
                     text:<div>
                        <p>
                          Настоящий стандарт распространяется на листовой горячекатаный прокат шириной 500мм и более, изготовляемый в листах толщиной от 0,40 до 160мм и рулонах толщиной  от 1,2 до 12мм.
                        </p>
                        <p>
                          Предельные отклонения по толщине проката, изготавливаемого в листах и рулонах, в любой точке измерений не должны превышать норм, указанных в таблице 3.
                        </p>
                        <img id="19903" className="img-gost-all" src="/img/19903.png"/>
                        <img className="img-gost-all-1" src="/img/19903-1.png"/>
                      </div> 
                    },
                    {
                      title:"Гост 2284-79",
                      text:<div>
                        <p>
                          Настоящий стандарт распространяется на холоднокатаную ленту из углеродистой качественной конструкционной стали, предназначенную для изготовления деталей машин и конструкций.
                        </p>
                        <p>
                          Предельные отклонения по толщине ленты должны соответствовать указанным в таблице 1
                        </p>
                        <img className="img-gost-all" src="/img/2284.png" alt="2284"/>
                        <p>
                          2. По согласованию с потребителем лента изготовляется с двухсторонним 
                          (+ -) предельными отклонениями по толщине с сохранением поля допуска.
	                        Предельные отклонения по ширине ленты должны соответствовать указанным в табл. 2. 
                        </p>
                        <img className="img-gost-all" src="/img/2284-1.png" alt="2284-1"/>
                      </div>
                    },
                    {
                      title:"ТУ 14-101-833-2015",
                      text:<div>
                        <p>
                          Настоящие технические условия распространяются на холоднокатаную ленту из стали марки 18ЮА, предназначенную для изготовления деталей методом глубокой вытяжки и штамповки. 
                        </p>
                        <p>
                          1. Предельные отклонения ленты должны соответствовать повышенной точности по толщине (Т) и ширине (Ш) по <a onClick={clearSearch} href="#gost-503-1">ГОСТ 503-81</a><br/>
                          2. По согласованию потребителя и изготовителя допускается поставка ленты других размеров и предельных отклонений. 
                          3. Серповидность ленты – не более 2 мм на 1 м длины. Допускается поставка до 10% от объема заказа лент с серповидностью до 5 мм на 1 м.<br/>
                          4. Допускается наличие одного сварного шва в рулоне. 
                        </p>
                      </div>    
                  },
                         
                ]); 

 
  const scrollUp = () =>{
    window.scrollTo(
      {top:0,behavior:'smooth'});
  };

  const [searchValue,setSearchValue] = React.useState('');
  const [size,setSize]= React.useState('');
  const [sum,setSum]= React.useState('');

  const [size2,setSize2]= React.useState('');
  const [size3,setSize3]= React.useState('');
  const [size4,setSize4]= React.useState('');
  const [sum2,setSum2]= React.useState('');

  const [size5,setSize5]= React.useState('');
  const [sum3,setSum3]= React.useState('');
  const [size6,setSize6]= React.useState('');
  const [sum4,setSum4]= React.useState('');
  
  
  function result(num1,num2){
    let value1,value2;
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
        return (515-(value1+value2))/2;  
    }
    else if(num2==0 || num2==1 || num2==2){
      value1=num1+20; 
      return (515-value1)/2; 
    }
}

function resultTwo(num1,num2,num3){
  let value1=num1,value2=num2,value3=num3,sum;
  if(!value2){
    return false;
  }
  if(!value3){
    value1=num1+3;
    value2=value1+num2+20;
    sum = (515-value2)/2;
    return sum;
  }
  else{
    value1=num1+3;
    value2=value1+num2+3;
    value3=value2+num3+20;
    sum=(515-value3)/2
    return sum;
  }
}

function resultThree(num1,num2,num3,num4){
  let value1=num1*num2,value2=num3*num4,value3,value4,value5,sum;
   if(!num1 || !num2 || !num3 || !num4){
    return false;
   }
    value3 = value1 + ((num2-1)*3);
    value4 = value2 + ((num4-1)*3);
    value5=value3+value4+20;
    sum=(515-value5)/2;
    return sum;
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
  const handleChangeSize2ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize2(value);
    }
    if (onlyNumbers.test(value)) {
      setSize2(+value)
    }
  }
  const handleChangeSize3ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize3(value);
    }
    if (onlyNumbers.test(value)) {
      setSize3(+value)
    }
  }
  const handleChangeSize4ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize4(value);
    }
    if (onlyNumbers.test(value)) {
      setSize4(+value)
    }
  }
  const handleChangeSize5ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize5(value);
    }
    if (onlyNumbers.test(value)) {
      setSize5(+value)
    }
  }
  const handleChangeSize6ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSize6(value);
    }
    if (onlyNumbers.test(value)) {
      setSize6(+value)
    }
  }
  
  const handleChangeSum3ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSum3(value);
    }
    if (onlyNumbers.test(value)) {
      setSum3(+value);
    }
  }
  const handleChangeSum4ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSum4(value);
    }
    if (onlyNumbers.test(value)) {
      setSum4(+value);
    }
  }

  function clearAll(){
    setSize("");
    setSize2("");
    setSize3("");
    setSize4("");
    setSize5("");
    setSize6("");
    setSum("");
    setSum2("");
    setSum3("");
    setSum4("");
  }
  function clearSearch(){
    setSearchValue("");
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
          
          {searchValue? "":<div className='grid'>
            <input className='grid__input-1' value={size2} onChange={handleChangeSize2ValueInput} placeholder='р1'/>
            <input className='grid__input-2' value={size3} onChange={handleChangeSize3ValueInput} placeholder='р2'/>
            <input className='grid__input-3' value={size4} onChange={handleChangeSize4ValueInput} placeholder='р3'/>
            <div className='grid__1' >{resultTwo(size2,size3,size4,sum2)}</div>
            {size2 || size3 || size4 ?<img onClick={clearAll} className={size2 || size3 || size4 ?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" alt=""/>:""}
          </div>}
          {searchValue? "":<div className='grid'>
            <input className='grid__input-1' value={size5} onChange={handleChangeSize5ValueInput} placeholder='р1'/>
            <input className='grid__input-2' value={sum3} onChange={handleChangeSum3ValueInput} placeholder='к-во'/>
            <input className='grid__input-3' value={size6} onChange={handleChangeSize6ValueInput} placeholder='р2'/>
            <input className='grid__input-2' value={sum4} onChange={handleChangeSum4ValueInput} placeholder='к-во'/>
            <div className='grid__1' >{resultThree(size5,sum3,size6,sum4)}</div>
            {size5 || size6 || sum3 || sum4 ?<img onClick={clearAll} className={size5 || sum3 || size6 || sum4 ?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" alt=""/>:""}
          </div>}
          
          <div className='main__block-search'>
              <div className='main__search'>
                <img className='main__search-icon' width={20} height={20} src="/img/search-icon-input.svg" alt=""/>
                <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder='Поиск...'></input> 
                
                {searchValue?<img className='main__search-clear' onClick={()=>setSearchValue('') } width={17} height={17} src="/img/close-search-input.svg" alt=""/>:""}
              </div>
              
          </div>
    
          {todo.filter(function(obj){
            return obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
          })
          .map((obj,i)=>(<details key={i}> 
            <summary>{obj.title}</summary> <img onClick={()=>scrollUp()} className='scroll-to-up' src="./img/scroll-to-up.svg"alt=""/>
            {obj.text}
          </details>))}
        </div>
      </div> 
    </>
    
  );
}
export default App;

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
                    </div>},
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
                        <img className="img-gost-all" src="/img/2284-79.png" alt="2284"/>
                        <p>
                          2. По согласованию с потребителем лента изготовляется с двухсторонним 
                          (+ -) предельными отклонениями по толщине с сохранением поля допуска.
	                        Предельные отклонения по ширине ленты должны соответствовать указанным в табл. 2. 
                        </p>
                        <img className="img-gost-all" src="/img/2284-79-1.png" alt="2284-1"/>
                      </div>
                    },
                    {
                      title:"ТУ 14-101-833-2015",
                      text:<div>
                        <p>
                          Настоящие технические условия распространяются на холоднокатаную ленту из стали марки 18ЮА, предназначенную для изготовления деталей методом глубокой вытяжки и штамповки. 
                        </p>
                        <p>
                          1. Предельные отклонения ленты должны соответствовать повышенной точности по толщине (Т) и ширине (Ш) по <a onClick={clearSearch} href="#gost-503-1">ГОСТ 503-81 таблица 1 таблица 2</a><br/>
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
          
          <div className='main__block-search'>
              <div className='main__search'>
                <img className='main__search-icon' width={20} height={20} src="/img/search-icon-input.svg" alt=""/>
                <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder='Поиск...'></input> 
                
                {searchValue?<img className='main__search-clear' onClick={()=>setSearchValue('') } width={17} height={17} src="/img/close-search-input.svg" alt=""/>:""}
              </div>
              
          </div>
    
          {todo.filter(obj=>(obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))) 

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

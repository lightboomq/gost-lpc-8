import './test.scss';
import React from 'react';
import NotFound from './NotFound/NotFound';
function App() {
  const [todo] = React.useState([
                  {title:"Гост 503-81",
                   text:<div id='gost-503' className='div-503-81'>
                    <img className="gost-503-81" src="/img/503-81-1.png" alt="1"/>
                    <img className="gost-503-81" src="/img/503-81-2.png" alt="2"/>
                    <img className="gost-503-81" src="/img/503-81-3.png" alt="3"/>
                    <p>1. На обрезной ленте не допускаются торцевые трещины и зазубрены глубиной более половины предельного отклонения по ширине и заусенцы – более предельного отклонения по толщине.<br/>
                    На необрезанной ленте не допускается рваная кромка глубиной более предельного отклонения по ширине ленты.</p>
                    <p>2. Расслоение ленты не допускается.</p>
                    <p>3. Следы излома (световые линии) на дрессированной ленте 1 и 2-й групп не допускаются. На дрессированной ленте 3 и 4-й 
                    групп поверхности допускаются следы излома, глубиной не более 3 мкм.<br/>
                    На недрессированной ленте всех групп поверхности допускается наличие изломов и полос – линий скольжения. Шероховатость поверхности недрессированной ленты не нормируется.</p>
                    <p>4. Для лент с обрезной кромкой, изготовляемых с контролем серповидности, величина серповидности не должна превышать норм, указанных в табл.3</p>
                    </div>},
                  {title:"ТУ 14-4-1207-82",
                   text:<div>
                      <p>
                        Настоящие условия распространяются на холоднокатаную ленту из низкоуглеродистой стали, предназначенную для изготовления деталей автомобилей ВАЗ и КамАЗ.<br/>
                      </p>
                      <p>
                        Примеры условных обозначений:<br/> Лента из стали марки 08кп, особомягкая, повышенной точности изготовления по толщине и ширине, 2-й группы отделки поверхности, серповидностью класса А, толщиной 1,2 мм, шириной 100 мм:<br/>  Лента 08кп – ОМ – Т – Ш – 2 – А – 1,2x100  ТУ – 14 – 101 – 1207 – 82 
                      </p>
                      <p><span>1.Сортамент:</span><br/></p>
                        1.1 По состоянию материала лента изготовляется:<br/>
                        Особо глубокой вытяжки - ОВГ<br/>
                        Весьма глубокой вытяжки - ВГ<br/>
                        Особо мягкая - ОМ<br/>
                        Мягкая - М<br/>
                        Полунагартованная - ПН<br/>
                        Нагартованная - Н<br/>
                        Высоконагартованная	- ВН<br/>
                        <p>
                        1.2 Лента из стали марок 08Ю 08 08кп 08пс 10 10кп 10пс изготавливается размерами:<br/>
                        По толщине <span className='span-text-green'>от 1,0 до 4,0 мм.</span><br/>
                        По ширине <span className='span-text-green'>от 10 до 450 мм.</span><br/>
                        </p>
                        <p>
                        Лента из стали марки 15кп изготавливается размерами:<br/>
                        по толщине  <span className='span-text-green'>от 2,0 до 4,0 мм</span><br/>
                        по ширине <span className='span-text-green'>от 48 до 450 мм.  </span>
                        </p>
                        <p>
                        1.3 Предельные отклонения по толщине и ширине  должны соответствовать требованиям <a href="#gost-503">ГОСТ 503-81</a> для нормальной и повышенной (Т и Ш) точности изготовления. По требованию потребителя лента может изготовляться высокой точности по толщине (В). Класс точности указывается в заказе. 
                        </p>
                        <p><span>2 Технические требования:</span><br/></p>                       
                        2.1 Лента изготовляется из стали марок, указанных в <a href="#grid-gost-14-4-1207-82-table">табл 1.</a><br/> Выбор марки стали для ленты ОМ, М, ПН, ВН, производиться предприятием изготовителем, для ленты ОВГ и ВГ марки стали должны соответствовать заказу.
                        <br/>
                        <p>Таблица 1 - Лента изготовляемая из стали марок</p>
                        <div id='grid-gost-14-4-1207-82-table' className='grid-gost-14-4-1207-82'>
                          <div>Состояние материала</div> <div>Марка стали</div> <div className='div-last-child2'>Хим.состав</div>
                          <div>ОВГ</div> <div>08Ю</div> <div className='div-last-child2'>Гост 9045-80</div>
                          <div>ВГ</div> <div>08Ю 08кп 08пс</div> <div className='div-last-child2'>Гост 9045-80</div>
                          <div>ОМ</div> <div>08кп 08пс 10кп</div> <div className='div-last-child2'>Гост 1050-74</div>
                          <div>М</div> <div>08 08кп 08пс<br/>10 10кп 10пс</div> <div className='div-last-child2'>Гост 1050-74</div>
                          <div>ПН Н ВН</div> <div>08 08кп 08пс<br/>10 10кп</div> <div className='div-last-child2'>Гост 1050-74</div>
                          <div className='div-last-child'>ВГ</div> <div className='div-last-child'>15кп </div> <div className='div-last-child1'>Гост 1050-74</div>
                        </div>
                        <p>2.2 Лента ОВГ, ВГ, ОМ, М поставляется в дрессированном состоянии.</p>
                        <p>2.3 По виду и качеству поверхности лента должна соответствовать 1,2 или 3 группе отделки поверхности по <a href='#gost-503'>ГОСТ 503–81</a> группа отделки поверхности оговаривается в заказе.</p>
                        <p>2.4 <span>Серповидность</span> ленты должна соответствовать классу А или Б по <a href='#gost-503'>ГОСТ 503–81</a> Класс ленты оговаривается в заказе.</p>
                        <p>2.5 Лента поставляется с обрезными кромками</p>
                        <p>2.6 Лента ОВГ, ВГ, ОМ, и  М поставляется с контролем микроструктуры.</p>
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
  const [open,setOpen] = React.useState(false);

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
            if(obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
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

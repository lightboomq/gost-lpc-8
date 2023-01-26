import './test.scss';
import React from 'react';

function App() {
  const [todo,setTodo] = React.useState([
                  {title:"Гост 503-71", 
                  text:<div><p>Лента холоднокатаная из низкоуглеродистой стали должна изготовляться в соответствии с требованиями настоящего стандарта по технологическим регламентам, утвержденным в установленном порядке.</p><br/><p className='p-margin-top'>Лента особомягкая повышенного качества должна изготовляться из стали марок 08кп и 08пс по ГОСТ 9045. Лента остальных состояний материала, а также лента особомягкая обыкновенного качества должна изготовлять</p></div>},
                  {title:"Гост 7566-94",
                   text:<div><p>Примечание - При пользовании настоящим стандартом целесообразно проверить действие ссылочных стандартов в информационной системе общего пользования - на официальном сайте Федерального агентства по техническому регулированию и метрологии в сети</p> <br/><p className='p-margin-top'>Интернет или по ежегодному информационному указателю "Национальные стандарты", который опубликован по состоянию на 1 января текущего года, и по выпускам</p></div>},
                  {title:"Гост 14350-69",
                   text:<div><p>Настоящий стандарт устанавливает применяемые в науке, технике и производстве термины и определения понятий в области гнутых профилей проката, изготовленных методом профилирования на профилегибочных агрегатах из черных и цветных металлов и сплавов.</p> <br/><p className='p-margin-top'>Стандарт не устанавливает термины и определения в области сортамента гнутых профилей, изготовляемых методом штамповки и протяжки.</p> </div>},
                  {title:"Гост 535-2005",
                   text:<div><p>Механические свойства проката при растяжении и работа удара должны соответствовать нормам, приведенным в таблице <br/>Б.1 Механические характеристики проката толщиной свыше 200 мм устанавливают по согласованию изготовителя и потребителя. <br/>Б.2. Поверхность проката должна быть гладкой и не иметь дефектов поверхности, которые влияют на дальнейшую обработку проката или на его использование по назначению.<br/>Б.3. Отдельные дефекты могут быть удалены изготовителем путем зачистки при условии, что толщина не должна выходить за пределы минусовых отклонений, которые определяют в соответствии с международными стандартами на сортовой и фасонный прокат, при отсутствии предельных отклонений в международных стандартах, толщина проката не должна уменьшаться локально больше чем на 6 % от номинального размера.<br/>Б.4. Если нет других указаний, дефекты глубиной, превышающей предельные отклонения по толщине проката, могут быть заварены и тогда наплавленный металл подлежит следующим ограничениям:</p></div>},
                  {title:"Тест",
                   text:<div><p>Металлургия начала развиваться ещё в эпоху каменного века. Есть несколько исторических вех её развития. Согласно археологическим раскопкам, наши древние предки уже в 6 в. до н.э. активно использовали железо, попавшее на Землю в составе метеоритов. Люди постепенно осваивали обработку серебра и олова.
                   В эпоху бронзового века (5500 лет назад) люди научились получать из горных пород олово и медь, из которых у них случайно вышла бронза. Во времена железного века (1200 лет назад) из руды стали извлекать железо. Его главными добытчиками считают древних римлян, преуспевших в искусстве ковки, а четь изобретений технологий металлообработки и добычи принадлежит китайцам.
                   </p><p className='p-margin-top'><br/>Независимо от того, в каком уголке земного шара развивалась металлургия, все люди пользовались классическим сыродутным методом, с помощью которого осуществлялась выплавка меди и свинца.
                   Далее последовала эпоха, называемая этапом цементации. Железо стали закаливать, оно превратилось в металл гораздо прочнее бронзы. Однако процесс освоения людьми этой технологии занял около тысячи лет.
                   В период Средневековья высота плавильных печей уже составляла три метра, а работали они с применением энергии, получаемой через воду. Эти печи назывались штукофенами и стали стимулом для того, чтобы чёрная металлургия вышла на очередной виток развития. В эпоху Возрождения появились новые виды печей, которые назвали блауофенами. </p><br/><p className='p-margin-top'>После них появились доменные печи громадных размеров. Они работали 24 часа в сутки, выпуская до полутора тысяч тонн чугуна отменного качества.
                   В конце XIX, начале XX века появились новые технологии производства металлов. Речь идёт о бессемеровском, томасовском и, наконец, мартеновском способах. Они помогли людям в разы увеличить производственные объёмы с выпуском металлов от шести тонн в час. Спустя 50 лет появились безостановочная разливка стали и метод кислородного дутья. На современном этапе учёные активно развивают разные технологии обогащения руд и производства стали в электрических печах.</p></div>}, 
                ]); 

 
  const scrollUp = () =>{
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const [searchValue,setSearchValue] = React.useState('');
  const [size,setSize]= React.useState('');
  const [sum,setSum]= React.useState('');

  const [sizeG1,setSizeG1]= React.useState('');
  const [sizeG2,setSizeG2]= React.useState('');
  const [sizeG3,setSizeG3]= React.useState('');
  const [sumG1,setSumG1]= React.useState('');
  
  
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
  const handleChangeSizeG1ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSizeG1(value);
    }
    if (onlyNumbers.test(value)) {
      setSizeG1(+value)
    }
  }
  const handleChangeSizeG2ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSizeG2(value);
    }
    if (onlyNumbers.test(value)) {
      setSizeG2(+value)
    }
  }
  const handleChangeSizeG3ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSizeG3(value);
    }
    if (onlyNumbers.test(value)) {
      setSizeG3(+value)
    }
  }
  const handleChangeSumG1ValueInput = (event) => {
    const onlyNumbers = /^[0-9\b]+$/
    const value = event.target.value
    if (onlyNumbers.test(value) || value === '') {
      setSumG1(value);
    }
    if (onlyNumbers.test(value)) {
      setSumG1(+value);
    }
  }
  function clearAll(){
    setSize("");
    setSum("");
  }
  function clearAllG1(){
    setSizeG1("");
    setSizeG2("");
    setSizeG3("");
    setSumG1("");
  }
  function resultG1(num1,num2,num3,num4){
    let value1,value2,value3;
    if(!num4 || num4>3){
      return false;
    }
    value1=(num1 || 0) + (num2 || 0) + (num3 || 0) 
    if(num4=2){
      value2=(num4 || 0) * 3 + 20;
    }
    else{
      value2=((num4 || 0) - 1) * 3 + 20
    }
    value3=(515-(value1+value2)) / 2;
    return value3;        
  }
 
  return (
    <>
      <div className="container">
        <div className='main'>
          <div className='main__block-search'>
              <div className='main__search'>
                <img className='main__search-icon' width={20} height={20} src="/img/search-icon-input.svg" alt=""/>
                <input value={searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder='Поиск...'></input> 
                
                {searchValue?<img className='main__search-clear' onClick={()=>setSearchValue('') } width={17} height={17} src="/img/close-search-input.svg" alt=""/>:""}
              </div>
              
          </div>
        
          {searchValue? "":<div className='grid'>
            <input className='grid__input-1' value={size} onChange={handleChangeSizeValueInput} placeholder='Р' />
            <input className='grid__input-2'value={sum} onChange={handleChangeSumValueInput} placeholder=' П' /> 
            <div className='grid__1'>{result(size,sum)}</div>
            {size ?<img onClick={clearAll} className={size?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" />:""}
          </div>}

          {searchValue? "":<div className='gridG1'>
            <input className='grid__input-size-G1' value={sizeG1} onChange={handleChangeSizeG1ValueInput} placeholder='Р1' />
            <input className='grid__input-size-G2' value={sizeG2} onChange={handleChangeSizeG2ValueInput} placeholder='Р2' />
            <input className='grid__input-size-G3' value={sizeG3} onChange={handleChangeSizeG3ValueInput} placeholder='Р3' />
            <input className='grid__input-sum-G1'  value={sumG1} onChange={handleChangeSumG1ValueInput} placeholder='П' /> 
            <div className='grid__1-result-G1'>{resultG1(sizeG1,sizeG2,sizeG3,sumG1)}</div>
            {sizeG1 ?<img onClick={clearAllG1} className={sizeG1 || sizeG2 || sizeG3?'grid__4':'grid__1'} width={30} height={30} src="/img/close-input.svg" />:""}
          </div>}
            
          
          
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

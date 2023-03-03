import "./manual.scss"

function Manual({manualProps,setManualProps}){
    return(
        <div className={manualProps?'manual active':'manual'}>
            <div className="close-manual-block">
                <img className="close-manual" width={35} height={35} onClick={()=>setManualProps(false)} src='/img/close-manual.svg'/>
            </div>
            <strong>Инструкция вычисления </strong>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 1-го типа<br/><strong>3x70(5)</strong>
            </div>
            <img src="/img/type1.png"/>
           <span className="span-margin-top">Корень = 66.5</span> 
        </div>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 2-го типа(Горбатка)<br/><strong>3x100(1)+120(1)</strong>
            </div>
            <img src="/img/type2.png"/>
            <span className="span-margin-top">Корень = 136</span>
        </div>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 3-го типа(Горбатка)<br/><strong>3x100(1)+115(1)+90(1)</strong>
            </div>
            <img src="/img/type3.png"/>
            <span className="span-margin-top">Корень = 92</span>
        </div>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 4-го типа(Горбатка)<br/><strong>3x115(1)+120(2)</strong>
            </div>
            <img src="/img/type4.png"/>
            <span className="span-margin-top">Корень = 67</span>
        </div>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 5-го типа(Горбатка)<br/><strong>3x36(6)+40(5)</strong>
            </div>
            <img src="/img/type5.png"/>
            <span className="span-margin-top">Корень = 26</span>
        </div>
        <div className="div-border">
            <div className="div-margin-top">Условный размер 6-го типа(Горбатка)<br/><strong>3x25(5)+100(1)</strong>
            </div>
            <img src="/img/type6.png"/>
            <span className="span-margin-top">Корень = 127.5</span>
        </div>
         
        </div>
    )
}



export default Manual;
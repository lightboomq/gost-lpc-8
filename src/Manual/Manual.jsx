import "./manual.scss"

function Manual({manualProps,setManualProps}){
    return(
        <div className={manualProps?'manual active':'manual'}>
            <strong>Инструкция вычисления разделительного ролика</strong>
        <div className="div-border">
            <div>Условный размер 1-го типа<br/><strong>3x70(5)</strong>
            </div>
            <img src="/img/type1.png"/>
            Корень = 66.5
        </div>
        <div className="div-border">
            <div>Условный размер 2-го типа(Горбатка)<br/><strong>3x100(1)+120(1)</strong>
            </div>
            <img src="/img/type2.png"/>
            Корень = 136
        </div>
        <div className="div-border">
            <div>Условный размер 3-го типа(Горбатка)<br/><strong>3x100(1)+115(1)+90(1)</strong>
            </div>
            <img src="src/assets/type3.png"/>
            Корень = 92
        </div>
        <div className="div-border">
            <div>Условный размер 4-го типа(Горбатка)<br/><strong>3x115(1)+120(2)</strong>
            </div>
            <img src="/img/type4.png"/>
            Корень = 67
        </div>
        <div className="div-border">
            <div>Условный размер 5-го типа(Горбатка)<br/><strong>3x36(6)+40(5)</strong>
            </div>
            <img src="/img/type5.png"/>
            Корень = 26
        </div>
        <div className="div-border">
            <div>Условный размер 6-го типа(Горбатка)<br/><strong>3x25(5)+100(1)</strong>
            </div>
            <img src="/img/type6.png"/>
            Корень = 127.5
        </div>
         {/*<img width={35} height={35} onClick={()=>setManualProps(false)} src='/img/close-manual.svg'/>*/}
        </div>
    )
}



export default Manual;
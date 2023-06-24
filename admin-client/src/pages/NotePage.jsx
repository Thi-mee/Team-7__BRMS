import style from '../styles/note.module.css'

const NotePage = () => {

    return (
        <div className={style.note}>
            <div className={style.topbar}>
                <div className={style.backbtn}>
                
                </div>
                <div className={style.actions}>
                    <div className={style.share}>
                    
                    </div>
                    <div className={style.delete}>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default NotePage
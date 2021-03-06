import Nav from '../components/Nav'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import style from '../styles/GameLog.module.scss'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	
})

QuillNoSSRWrapper.displayName = 'QuillNoSSRWrapper'

const Logs = () => {
    return (
        <>
        
            <div className={style.container}>
                <h1 className={style.title}>game logs</h1>
                <QuillNoSSRWrapper className={style.quill}  theme="snow" />
            </div>
            <div className={style.btn_hold}>
                <button className={style.btn}>save game</button>
            </div>

        </>
    )
}

export default Logs

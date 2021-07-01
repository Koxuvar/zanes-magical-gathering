import Image from 'next/image';

const Image = (props) => {
    console.log(props)
    return (
        <div>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height}></Image>
        </div>
    )
}

export default Image
import Places from "./Places";

export default function PlaceList({info}) {
    return (
        <div style={style}>
            {info.map((p) => {
                return (
                        <Places {...p} key={p.id}/>
                )
            })}
        </div>
    )
}

const style = {
    display: 'flex',
}
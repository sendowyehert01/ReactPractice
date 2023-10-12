export default function Greeter({person}) {
    return (
        <div>
            {person.map((names) => {
                return (
                        <h1 key={names.id}
                        style={{color: names.present ? 'red' : 'black' }}> {names.name} {names.lastname}</h1>
                )
            })}
        </div>
    )
}
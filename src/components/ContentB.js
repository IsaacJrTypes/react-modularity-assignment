

// Create contentB
export default function ContentB({children}) {
    return (
        <>
        <div>
            <h1>Neighbor Content</h1>
            <p> Hi, I am your friendly neighborhood Content!</p>
            {children}
        </div>
        </>
    )
}
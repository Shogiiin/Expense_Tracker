import './History.css'

function History(props) {

    // eslint-disable-next-line react/prop-types
    let ExpenseHistory = props.ExpenseHistory

    window.onload = function() {
        const hc = document.getElementById("hc")

        for(let i in ExpenseHistory) {
            let item = document.createElement("div")
            item.id = i
            item.innerHTML = "Hello"
            item.className = "history-item"
            hc.appendChild(item)
        }
    }
    return(
        <>
            <h5>History</h5>
            <hr></hr>

            <div id='hc' className='history-container'>

            </div>
        </>
    )
}

export default History
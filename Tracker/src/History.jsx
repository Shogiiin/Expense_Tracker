import './History.css'

function History(props) {

    // eslint-disable-next-line react/prop-types
    let ExpenseHistory = props.History

    window.onload = function() {
        const hc = document.getElementById("hc")

        for(let i in ExpenseHistory) {
            let item = document.createElement("div")
            item.id = i+"a"

            if(ExpenseHistory[i].price < 0) {
                item.className = "history-item item-red"
            } else { item.className = "history-item item-green" }

            hc.appendChild(item)

            // eslint-disable-next-line react/prop-types
            let item_name = ExpenseHistory[i].name
            let item_name_field = document.createElement("p")
            item_name_field.id = i+"b"
            item_name_field.innerHTML = item_name
            item_name_field.className = "history-item-name"

            // eslint-disable-next-line react/prop-types
            let item_price = ExpenseHistory[i].price
            let item_price_field = document.createElement("p")
            item_price_field.id = i+"c"
            item_price_field.innerHTML = "$"+item_price
            item_price_field.className = "history-item-price"

            document.getElementById(i+"a").appendChild(item_name_field)
            document.getElementById(i+"a").appendChild(item_price_field)

            console.log("heyo")
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
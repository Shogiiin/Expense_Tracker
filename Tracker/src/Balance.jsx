import './Balance.css'

function Balance(props) {

    // eslint-disable-next-line react/prop-types
    let income = props.income
    // eslint-disable-next-line react/prop-types
    let expense = props.expense

    return(
        <>
            <p>YOUR BALANCE</p>

            <div><b>${income+expense}</b></div>

            <div className="balance-detail-container">
                <div className='income'>
                    <h4>INCOME</h4>
                    <p className='income-num'>+$+{income}</p>
                </div>
                <div className="vr"></div>
                <div className='expense'>
                    <h4>EXPENSE</h4>
                    <p className='expense-num'>-${expense}</p>
                </div>
            </div>
        </>
    )
}

export default Balance
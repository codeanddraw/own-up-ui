import Table from 'react-bootstrap/Table'

/**
 * Renders the complete Table Container
 * @param {props} quotesList contains the quotes array received from API
 * @return {JSX} table div
 */
function TableContainer({ quotesList }) {
  let classname = 'ownUp'
  
  if (quotesList === undefined || quotesList.quotes === undefined )
    return <h3 className={`${classname}-TableMessage`}> Please search to display data </h3>

  else if (quotesList.quotes.length === 0)
    return <h3 className={`${classname}-TableMessage`}> No data </h3>

  else if (quotesList.quotes === "ERROR")
    return <h3 className={`${classname}-TableMessage`}> Error in retrieving data </h3>

  else {
    let quotes = quotesList.quotes
    return <div className={`${classname}-TableContainer`}>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>LENDER</th>
            <th>PRODUCT</th>
            <th>RATE</th>
            <th>CLOSING COSTS</th>
            <th>MONTHLY PAYMENT</th>
            <th>APR</th>
          </tr>
        </thead>
        <tbody>
          {quotes && quotes.map((item, index) => {
            return <tr key={index}>
              <td>{item.lenderName}</td>
              <td>{item.loanType}</td>
              <td>{item.interestRate}</td>
              <td>{item.closingCosts}</td>
              <td>{Number(item.monthlyPayment).toFixed(2)}</td>
              <td>{Number(item.apr).toFixed(2)}</td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  }
}

export default TableContainer;

import Table from 'react-bootstrap/Table'

function TableContainer({ quotesList }) {
  let classname = 'ownUp'
  let quotes = (quotesList.quotes && quotesList.quotes[quotesList.quotes.length-1]) || []

  return (
    <div className={`${classname}-TableContainer`}>
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
              <td>{item.monthlyPayment}</td>
              <td>{item.apr}</td>
            </tr>
          })}

        </tbody>
      </Table>



    </div>
  );
}

export default TableContainer;

import Table from 'react-bootstrap/Table'

function TableContainer() {
  let classname = 'ownUp'

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
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>

       

    </div>
  );
}

export default TableContainer;

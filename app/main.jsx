import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const App = () => {
  return <Grid style={{
    height: '400px'
  }} data={products}>
        <Column field="ProductID" title="ID" width="40px" />
        <Column field="ProductName" title="Name" width="250px" />
        <Column field="Category.CategoryName" title="CategoryName" />
        <Column field="UnitPrice" title="Price" />
        <Column field="UnitsInStock" title="In stock" />
        <Column field="Discontinued" cell={props => <td>
              <input disabled={true} type="checkbox" checked={props.dataItem[props.field || '']} />
            </td>} />
      </Grid>;
};

ReactDOM.render(<App />, document.querySelector('my-app'));
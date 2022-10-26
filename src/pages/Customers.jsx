import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page, Selection, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        toolbar={['Delete']}
        width="auto"
        dataSource={customersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Toolbar, Sort, Selection, Edit, Filter ]} />
      </GridComponent>
    </div>
  )
}

export default Customers
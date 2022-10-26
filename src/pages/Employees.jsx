import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Inject, Sort } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        toolbar={['Search']}
        width="auto"
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar, Sort ]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
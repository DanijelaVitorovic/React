import React from 'react';

import TableRow from './TableRow';
import { Table as BootstrapTable } from 'react-bootstrap';

// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function Table(props) {
  const { config, id, items, translations } = props || {};
  const { columns } = config || {};

  const renderItem = (item, index) => (
    <TableRow index={++index} key={item.id} item={item} config={config} />
  );

  const renderItemsList = () => items?.map(renderItem);

  const renderHeader = (column) => {
    const { key, width, className, condition } = column || {};

    if (condition && !condition()) {
      return null;
    }

    return (
      <th width={width} className={className} key={key}>
        {translations[key]}
      </th>
    );
  };

  return (
    <BootstrapTable responsive hover id={`table_${id}`}>
      <thead>
        <tr>
          <th width="3%">#</th>
          {columns.map(renderHeader)}
        </tr>
      </thead>
      <tbody>{renderItemsList()}</tbody>
    </BootstrapTable>
  );
}

export default Table;

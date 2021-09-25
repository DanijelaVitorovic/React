import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
  }

  filterTable() {
    var input, filter, table, tr, td, i, j, cell, noSearchColums;
    const { tableId } = this.props || {};

    input = document.getElementById(
      tableId ? `searchInput_${tableId}` : 'searchInput'
    );
    filter = input.value.toUpperCase();
    table = this.props.tableId
      ? document.getElementById(this.props.tableId)
      : document.getElementById('table');
    tr = table.tBodies[0].getElementsByTagName('tr');
    noSearchColums = this.props.noSearchColums;

    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = 'none';
      td = tr[i].getElementsByTagName('td');

      for (var j = 0; j < td.length - noSearchColums; j++) {
        cell = tr[i].getElementsByTagName('td')[j];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
            break;
          }
        }
      }
    }
  }

  render() {
    var param = this.props.param;
    const { tableId } = this.props || {};

    return (
      <div className="row text">
        <div className="Filter col-md-12">
          // <span className="searchIcon align-self-center p-2">
          //   // <img src="/images/pretraga.png" id="searchImg" />
          // </span>
          <input
            type="text"
            className="searchPlaceholder col-12 p-2"
            id={tableId ? `searchInput_${tableId}` : 'searchInput'}
            onKeyUp={this.filterTable.bind(this)}
            placeholder="Претрага..."
            value={param}
          />
        </div>
      </div>
    );
  }
}

export default SearchFilter;

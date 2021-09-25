import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import SearchFilter from '../SearchFilter';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

const TableCard = (props) => {
  const {
    title,
    shouldRenderAdd,
    addAction,
    tooltipText,
    tableId,
    children,
    noSearchColums,
    shouldRenderSearch,
  } = props || {};

  return (
    <Card.Header>
      <Row>
        <Col className="col-md-8">
          <Card.Title as="h3">{title}</Card.Title>
        </Col>

        {shouldRenderAdd
          ? !shouldRenderSearch && (
              <Col className="col-md-3">
                <SearchFilter
                  noSearchColums={noSearchColums}
                  tableId={`table_${tableId}`}
                  id={`filter_${tableId}`}
                />
              </Col>
            )
          : !shouldRenderSearch && (
              <Col className="col-md-4">
                <SearchFilter
                  noSearchColums={noSearchColums}
                  tableId={`table_${tableId}`}
                  id={`filter_${tableId}`}
                />
              </Col>
            )}
        {shouldRenderAdd && (
          <Col
            className={
              !shouldRenderSearch ? 'addUser col-md-1' : 'addUser col-md-4'
            }
          >
            <Tooltip title={tooltipText} placement="top" arrow>
              <Link onClick={addAction} to="#">
                <i className="fas fa-plus fa-2x" />
              </Link>
            </Tooltip>
          </Col>
        )}
      </Row>
      {children}
    </Card.Header>
  );
};

export default TableCard;

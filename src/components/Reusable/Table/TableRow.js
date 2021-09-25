import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const cellTypes = {
  value: 'value',
  action: 'action',
  subobject: 'subobject',
  condition_action: 'condition_action',
  actionWhenKeyIsAction: 'actionWhenKeyIsAction',
  date: 'date',
};

function TableRow(props) {
  const { item, index, config } = props || {};
  const { columns } = config || {};

  const renderCell = (column) => {
    const { key, type, condition, onClick, subobjectData, icon, path } =
      column || {};

    if (condition && !condition()) {
      return null;
    }

    const conditionActionContent = (
      onClickAction,
      entity,
      icon,
      tooltipTitle
    ) => {
      return (
        <td className="text-center" key={key}>
          <Link onClick={onClickAction ? () => onClickAction(entity) : null}>
            <Tooltip title={tooltipTitle} placement="top" arrow>
              <i className={icon} />
            </Tooltip>
          </Link>
        </td>
      );
    };

    switch (type) {
      case cellTypes.value:
        return <td key={key}>{item[key]}</td>;
      // case cellTypes.subobject:
      //   let subobjectValue = item[key];
      //   subobject.forEach((s) => (subobjectValue = subobjectValue?.[s]));
      //   return <td>{subobjectValue}</td>;
      case cellTypes.subobject:
        let subobjectValues = '';
        for (let i = 0; i < subobjectData.length; i++) {
          let entity = item[key];
          if (subobjectData[i].length > 1) {
            subobjectData[i].forEach((d) => (entity = entity?.[d]));
            entity && (subobjectValues = subobjectValues.concat(entity + ' '));
          } else {
            if (item[key]?.[subobjectData[i]]) {
              subobjectValues =
                subobjectValues.concat(item[key]?.[subobjectData[i]]) + ' ';
            }
          }
        }
        return <td>{subobjectValues}</td>;
      case cellTypes.action:
        return (
          <td className="text-center" key={key}>
            <Link
              onClick={onClick ? () => onClick(item) : null}
              to={path} //ako se prosledi putanja, onda ce nas odvesti tamo, a u suprostno ce se desiti samo onClick akcija
            >
              <i className={icon} />
            </Link>
          </td>
        );
      case cellTypes.actionWhenKeyIsAction:
        const onClickWhenKeyIsAction = item[key] || {};
        return (
          <td className="text-center">
            <Link onClick={() => onClickWhenKeyIsAction(item)}>
              <i className={icon} />
            </Link>
          </td>
        );
      case cellTypes.condition_action:
        const { actions, actionCondition } = column || {};

        //_ca je za konstante za tip condition_action.

        const { onClick_ca, icon_ca, tooltipTitle_ca } = actionCondition(item)
          ? actions[0]
          : actions[1] || {};

        return conditionActionContent(
          onClick_ca,
          item,
          icon_ca,
          tooltipTitle_ca || ''
        );

      case cellTypes.date:
        return (
          <td
            style={{
              fontWeight: 'bold',
              color: '#4CAF50',
              backgroundPosition: 'center',
              marginLeft: '5%',
            }}
            key={key}
          >
            {item[key]}
          </td>
        );

      default:
        return <td />;
    }
  };

  return (
    <tr>
      <td>{index}</td>
      {columns.map(renderCell)}
    </tr>
  );
}

export default TableRow;

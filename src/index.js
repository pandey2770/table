import * as React from "react";
import { Component } from "react";

export class Table extends Component {
  render() {
    const { config, data } = this.props;
    return (
      <table>
        <thead>
          <tr>{config.rows.map(row => <th>{row.label}</th>)}</tr>
        </thead>
        <tbody>
          {data &&
            data.map(dataRow => (
              <tr>{config.rows.map(row => <td>{dataRow[row.key]}</td>)}</tr>
            ))}
        </tbody>
      </table>
    );
  }
}

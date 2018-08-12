import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Table } from "../src";

const tableConfig = {
  rows: [
    {
      label: "HINDI",
      key: "hindi"
    },
    {
      label: "ENGLISH",
      key: "english"
    }
  ]
};

const data = [
  {
    hindi: 20,
    english: 30
  }
];

storiesOf("Table", module).add("to Storybook", () => (
  <Table config={tableConfig} data={data} />
));

storiesOf("Table2", module).add("to Storybook", () => (
  <Table config={tableConfig} />
));

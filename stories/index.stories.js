import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Table } from "../src";

storiesOf("Table", module).add("to Storybook", () => <Table />);

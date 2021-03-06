/**
 * Copyright (c) NAVER Corp.
 * egjs-infinitegrid projects are licensed under the MIT license
 */
import InfiniteGrid, * as modules from "./index";

for (const name in modules) {
	InfiniteGrid[name] = modules[name];
}

module.exports = InfiniteGrid;

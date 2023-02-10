//npm - global command comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any procject
//np, install -g <packageName>

//package.json
//manual approach
//npm init(step by step)
//npm init -y(default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
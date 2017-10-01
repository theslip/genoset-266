var g = require('gql')
var gs266 = g.or([
  g.exact('rs9341296', 'CT'),
  g.exact('rs13304168', 'CT'),
  g.exact('rs1118473', 'AG'),
  g.exact('rs150173', 'AC'),
  g.exact('rs1558843', 'AC'),
  g.exact('rs16980426', 'GT'),
  g.exact('rs17222419', 'CT'),
  g.exact('rs16980601', 'AG'),
  g.exact('rs2032604', 'GT'),
  g.exact('rs2032624', 'AC'),
  g.exact('rs35567891', 'AG'),
  g.exact('rs9786379', 'AG'),
  g.exact('rs9786550', 'CG'),
  g.exact('rs9786832', 'AT'),
])

module.exports = function(dna) {
  return gs266(dna)
}

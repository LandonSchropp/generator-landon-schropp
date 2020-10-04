module.exports = {
  aliases: {
    _: "lodash",
  },
  danglingCommas: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/'/g, '"');
  },
  maxLineLength: 100
};

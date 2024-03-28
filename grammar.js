module.exports = grammar({
  name: "CIRCOM",

  rules: {
    program: ($) => seq(repeat($.statements), optional($.main)),

    main: ($) => "main",

    statements: ($) => seq("include", "\n"),
  },
});

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "." }); // kopieert inhoud van public naar root

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "dist"
    }
  };
};

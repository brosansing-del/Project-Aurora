module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/Project-Aurora/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

const getNavLinkClass = (currentMatchesNames, name) => ({
  "nav-link": true,
  active: currentMatchesNames.value.some((s) => s === name)
});

const numberFilter = (num) => Number(num).toLocaleString();

const parseContent = (post) => {
  if (!post.content) return "";
  let flag = false;
  post.content = post.content.replaceAll(/\n/gi, "<br>");
  post.content = post.content.replaceAll(
    /!\[img src='[^\]]*'[^\]]*\]/gi,
    (match) => {
      const imgSrcMatches = match.match(/src='([^']*)'/i)
      const imagePath = imgSrcMatches ? imgSrcMatches[1] : "";
      const imgWidthMatches = match.match(/src='([^']*)'/i)
      const width = imgWidthMatches ? imgWidthMatches[1] : "";
      let image = "";
      if (imagePath!=="") {
        try {
          image = require(`@/assets/${imagePath}`);
        } catch (error) {
          image = imagePath;
        }
        if (!flag) post.coverimg = image;
      }
      return `<img src="${image}" width="${width}" class="img-fluid" />`;
    }
  );
  return post.content;
};
export { getNavLinkClass, numberFilter, parseContent };

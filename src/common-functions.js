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
    /!\[img src='[^\]]*' [^\]]*\]/gi,
    (match) => {
      const imagePath = match.match(/src='([^']*)'/i)[1] ?? "";
      const width = match.match(/width='([^']*)'/i)[1] ?? "";
      const image = require(`@/assets/${imagePath}`);
      if (imagePath !== "" && !flag) post.coverimg = image;
      return `<img src="${image}" width="${width}" class="img-fluid" />`;
    }
  );
  return post.content;
};
export { getNavLinkClass, numberFilter, parseContent };

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const resultsDirectory = path.join(process.cwd(), 'results');

function getResultData(fileName) {
  const filePath = path.join(resultsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const resultSlug = fileName.replace(/\.md$/, '');

  const resultData = {
    slug: resultSlug,
    ...data,
    content: content,
  };

  return resultData;
}

export function getAllResults() {
  const resultFiles = fs.readdirSync(resultsDirectory);

  const allResults = resultFiles.map((resultFile) => {
    return getResultData(resultFile);
  });

  const sortedResults = allResults.sort((resultA, resultB) =>
    resultA.money > resultB.money ? -1 : 1
  );

  return sortedResults;
  // return allResults;
}

export function getFeaturedResults() {
  const allResults = getAllResults();

  const featuredResults = allResults.filter((result) => result.isFeatured);

  return featuredResults;
}

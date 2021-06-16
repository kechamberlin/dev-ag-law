import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const practicesDirectory = path.join(process.cwd(), 'practices');

export function getPracticesFiles() {
  return fs.readdirSync(practicesDirectory);
}

export function getPracticeData(practiceIdentifier) {
  const practiceSlug = practiceIdentifier.replace(/\.md$/, '');
  const filePath = path.join(practicesDirectory, `${practiceSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const practiceData = {
    slug: practiceSlug,
    ...data,
    content: content,
  };

  return practiceData;
}

export function getPractices() {
  const practiceFiles = getPracticesFiles();

  const practices = practiceFiles.map((practiceFile) => {
    return getPracticeData(practiceFile);
  });

  const sortedPractices = practices.sort((practiceA, practiceB) =>
    practiceA.title > practiceB.title ? -1 : 1
  );

  return sortedPractices;
}

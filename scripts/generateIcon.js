const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const axios = require('axios');

async function generateIcon() {
  const githubIconUrl = 'https://github.com/erickcestari.png';
  const outputDir = path.resolve(__dirname, '../public/icons');
  const outputPath = path.join(outputDir, 'github-icon.png');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const response = await axios.get(githubIconUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    await sharp(buffer)
      .resize(460, 460)
      .toFile(outputPath);

    console.log('Icon generated and saved to:', outputPath);
  } catch (error) {
    console.error('Error generating icon:', error);
  }
}

generateIcon();

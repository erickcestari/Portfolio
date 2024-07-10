import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const size = {
  width: 460,
  height: 460,
};
export const contentType = 'image/png';

export default function Icon() {
  const githubIconUrl = 'https://github.com/erickcestari.png';

  return new ImageResponse(
    (
      <img
        src={githubIconUrl}
        alt="GitHub Icon"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    ),
    {
      ...size,
    }
  );
}

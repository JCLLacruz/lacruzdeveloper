// next.config.mjs usando ES Modules
import path from 'path';

export default {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
};

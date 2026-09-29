import { defineConfig } from 'orval';

export default defineConfig({
  maryama: {
    input: {
      target: process.env.ORVAL_API_URL ?? 'http://localhost:3000/docs-json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/api/generated/endpoints',
      schemas: 'src/api/generated/models',
      client: 'react-query',
      httpClient: 'axios',
      clean: true,
      override: {
        mutator: {
          path: 'src/utils/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
});

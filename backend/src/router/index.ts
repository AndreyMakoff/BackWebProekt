import { trpc } from "../lib/trpc.ts";
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { createIdeaTrpcRoute } from "./createIdea/index.ts";
import { getIdeaTrpcRoute } from "./getIdea/index.ts";
import { getIdeasTrpcRoute } from "./getIdeas/index.ts";
// @endindex
export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createIdea: createIdeaTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  // @endindex
});

export type TrpcRouter = typeof trpcRouter;

import { helpers } from '#/trpc/trpc.server';

export async function onBeforeRender() {
  console.log(process.cwd())

  await helpers.greet.prefetch('world');
}

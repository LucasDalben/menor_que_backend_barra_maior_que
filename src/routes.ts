import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, options:FastifyPluginOptions ) {

    fastify.get('/testando', async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: 'testado'}
    })
}
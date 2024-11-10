/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.JobTeamInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.createMany(input as any))),

        create: procedure.input($Schema.JobTeamInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.create(input as any))),

        deleteMany: procedure.input($Schema.JobTeamInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.deleteMany(input as any))),

        delete: procedure.input($Schema.JobTeamInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.delete(input as any))),

        findFirst: procedure.input($Schema.JobTeamInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobTeam.findFirst(input as any))),

        findMany: procedure.input($Schema.JobTeamInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobTeam.findMany(input as any))),

        findUnique: procedure.input($Schema.JobTeamInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).jobTeam.findUnique(input as any))),

        updateMany: procedure.input($Schema.JobTeamInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.updateMany(input as any))),

        update: procedure.input($Schema.JobTeamInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobTeam.update(input as any))),

        count: procedure.input($Schema.JobTeamInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobTeam.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.JobTeamCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.JobTeamCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobTeamGetPayload<T>, Context>) => Promise<Prisma.JobTeamGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.JobTeamDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.JobTeamDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobTeamGetPayload<T>, Context>) => Promise<Prisma.JobTeamGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.JobTeamFindFirstArgs, TData = Prisma.JobTeamGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.JobTeamFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobTeamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobTeamFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobTeamFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobTeamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobTeamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.JobTeamFindManyArgs, TData = Array<Prisma.JobTeamGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.JobTeamFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.JobTeamGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobTeamFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobTeamFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.JobTeamGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.JobTeamGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.JobTeamFindUniqueArgs, TData = Prisma.JobTeamGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.JobTeamFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobTeamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobTeamFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.JobTeamFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobTeamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobTeamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.JobTeamUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.JobTeamUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobTeamUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobTeamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobTeamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobTeamUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobTeamUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobTeamGetPayload<T>, Context>) => Promise<Prisma.JobTeamGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.JobTeamCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobTeamCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.JobTeamCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.JobTeamCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.JobTeamCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.JobTeamCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.JobTeamCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobTeamCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

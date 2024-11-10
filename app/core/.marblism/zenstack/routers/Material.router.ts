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

        createMany: procedure.input($Schema.MaterialInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.createMany(input as any))),

        create: procedure.input($Schema.MaterialInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.create(input as any))),

        deleteMany: procedure.input($Schema.MaterialInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.deleteMany(input as any))),

        delete: procedure.input($Schema.MaterialInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.delete(input as any))),

        findFirst: procedure.input($Schema.MaterialInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).material.findFirst(input as any))),

        findMany: procedure.input($Schema.MaterialInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).material.findMany(input as any))),

        findUnique: procedure.input($Schema.MaterialInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).material.findUnique(input as any))),

        updateMany: procedure.input($Schema.MaterialInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.updateMany(input as any))),

        update: procedure.input($Schema.MaterialInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).material.update(input as any))),

        count: procedure.input($Schema.MaterialInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).material.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MaterialCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MaterialCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialGetPayload<T>, Context>) => Promise<Prisma.MaterialGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MaterialDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MaterialDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialGetPayload<T>, Context>) => Promise<Prisma.MaterialGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MaterialFindFirstArgs, TData = Prisma.MaterialGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MaterialFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaterialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MaterialFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaterialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaterialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MaterialFindManyArgs, TData = Array<Prisma.MaterialGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MaterialFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MaterialGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MaterialFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MaterialGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MaterialGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MaterialFindUniqueArgs, TData = Prisma.MaterialGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MaterialFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaterialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MaterialFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaterialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaterialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MaterialUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MaterialUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialGetPayload<T>, Context>) => Promise<Prisma.MaterialGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MaterialCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MaterialCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MaterialCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MaterialCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MaterialCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MaterialCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MaterialCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MaterialCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

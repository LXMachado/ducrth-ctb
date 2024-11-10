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

        createMany: procedure.input($Schema.MaterialOrderInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.createMany(input as any))),

        create: procedure.input($Schema.MaterialOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.create(input as any))),

        deleteMany: procedure.input($Schema.MaterialOrderInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.MaterialOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.delete(input as any))),

        findFirst: procedure.input($Schema.MaterialOrderInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).materialOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.MaterialOrderInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).materialOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.MaterialOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).materialOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.MaterialOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.updateMany(input as any))),

        update: procedure.input($Schema.MaterialOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).materialOrder.update(input as any))),

        count: procedure.input($Schema.MaterialOrderInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).materialOrder.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MaterialOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MaterialOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialOrderGetPayload<T>, Context>) => Promise<Prisma.MaterialOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MaterialOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MaterialOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialOrderGetPayload<T>, Context>) => Promise<Prisma.MaterialOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MaterialOrderFindFirstArgs, TData = Prisma.MaterialOrderGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MaterialOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaterialOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialOrderFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MaterialOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaterialOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaterialOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MaterialOrderFindManyArgs, TData = Array<Prisma.MaterialOrderGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MaterialOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MaterialOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialOrderFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MaterialOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MaterialOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MaterialOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MaterialOrderFindUniqueArgs, TData = Prisma.MaterialOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MaterialOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MaterialOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MaterialOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MaterialOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MaterialOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MaterialOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MaterialOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MaterialOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MaterialOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MaterialOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MaterialOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MaterialOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MaterialOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MaterialOrderGetPayload<T>, Context>) => Promise<Prisma.MaterialOrderGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MaterialOrderCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MaterialOrderCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MaterialOrderCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MaterialOrderCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MaterialOrderCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MaterialOrderCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MaterialOrderCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MaterialOrderCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

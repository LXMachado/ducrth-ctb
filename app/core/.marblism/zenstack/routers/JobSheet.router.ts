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

        createMany: procedure.input($Schema.JobSheetInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.createMany(input as any))),

        create: procedure.input($Schema.JobSheetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.create(input as any))),

        deleteMany: procedure.input($Schema.JobSheetInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.deleteMany(input as any))),

        delete: procedure.input($Schema.JobSheetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.delete(input as any))),

        findFirst: procedure.input($Schema.JobSheetInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobSheet.findFirst(input as any))),

        findMany: procedure.input($Schema.JobSheetInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobSheet.findMany(input as any))),

        findUnique: procedure.input($Schema.JobSheetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).jobSheet.findUnique(input as any))),

        updateMany: procedure.input($Schema.JobSheetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.updateMany(input as any))),

        update: procedure.input($Schema.JobSheetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).jobSheet.update(input as any))),

        count: procedure.input($Schema.JobSheetInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).jobSheet.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.JobSheetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.JobSheetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobSheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobSheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobSheetGetPayload<T>, Context>) => Promise<Prisma.JobSheetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.JobSheetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.JobSheetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobSheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobSheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobSheetGetPayload<T>, Context>) => Promise<Prisma.JobSheetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.JobSheetFindFirstArgs, TData = Prisma.JobSheetGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.JobSheetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobSheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobSheetFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobSheetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobSheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobSheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.JobSheetFindManyArgs, TData = Array<Prisma.JobSheetGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.JobSheetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.JobSheetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobSheetFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobSheetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.JobSheetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.JobSheetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.JobSheetFindUniqueArgs, TData = Prisma.JobSheetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.JobSheetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobSheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobSheetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.JobSheetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobSheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobSheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.JobSheetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.JobSheetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobSheetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobSheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobSheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobSheetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobSheetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobSheetGetPayload<T>, Context>) => Promise<Prisma.JobSheetGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.JobSheetCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobSheetCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.JobSheetCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.JobSheetCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.JobSheetCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.JobSheetCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.JobSheetCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobSheetCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

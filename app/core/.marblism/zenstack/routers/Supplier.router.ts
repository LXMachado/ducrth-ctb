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

        createMany: procedure.input($Schema.SupplierInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.createMany(input as any))),

        create: procedure.input($Schema.SupplierInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.create(input as any))),

        deleteMany: procedure.input($Schema.SupplierInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.deleteMany(input as any))),

        delete: procedure.input($Schema.SupplierInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.delete(input as any))),

        findFirst: procedure.input($Schema.SupplierInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).supplier.findFirst(input as any))),

        findMany: procedure.input($Schema.SupplierInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).supplier.findMany(input as any))),

        findUnique: procedure.input($Schema.SupplierInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).supplier.findUnique(input as any))),

        updateMany: procedure.input($Schema.SupplierInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.updateMany(input as any))),

        update: procedure.input($Schema.SupplierInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).supplier.update(input as any))),

        count: procedure.input($Schema.SupplierInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).supplier.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SupplierCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SupplierCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SupplierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SupplierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SupplierGetPayload<T>, Context>) => Promise<Prisma.SupplierGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SupplierDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SupplierDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SupplierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SupplierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SupplierGetPayload<T>, Context>) => Promise<Prisma.SupplierGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SupplierFindFirstArgs, TData = Prisma.SupplierGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SupplierFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SupplierGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SupplierFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SupplierFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SupplierGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SupplierGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SupplierFindManyArgs, TData = Array<Prisma.SupplierGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SupplierGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SupplierFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SupplierGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SupplierGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SupplierFindUniqueArgs, TData = Prisma.SupplierGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SupplierFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SupplierGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SupplierFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SupplierFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SupplierGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SupplierGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SupplierUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SupplierUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SupplierUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SupplierGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SupplierGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SupplierUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SupplierUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SupplierGetPayload<T>, Context>) => Promise<Prisma.SupplierGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SupplierCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SupplierCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SupplierCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SupplierCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SupplierCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SupplierCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SupplierCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SupplierCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}

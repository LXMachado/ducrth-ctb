/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createSupplierRouter from "./Supplier.router";
import createMaterialRouter from "./Material.router";
import createCustomerRouter from "./Customer.router";
import createTeamRouter from "./Team.router";
import createTeamMemberRouter from "./TeamMember.router";
import createJobRouter from "./Job.router";
import createJobTeamRouter from "./JobTeam.router";
import createJobSheetRouter from "./JobSheet.router";
import createMaterialOrderRouter from "./MaterialOrder.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SupplierClientType } from "./Supplier.router";
import { ClientType as MaterialClientType } from "./Material.router";
import { ClientType as CustomerClientType } from "./Customer.router";
import { ClientType as TeamClientType } from "./Team.router";
import { ClientType as TeamMemberClientType } from "./TeamMember.router";
import { ClientType as JobClientType } from "./Job.router";
import { ClientType as JobTeamClientType } from "./JobTeam.router";
import { ClientType as JobSheetClientType } from "./JobSheet.router";
import { ClientType as MaterialOrderClientType } from "./MaterialOrder.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        supplier: createSupplierRouter(router, procedure),
        material: createMaterialRouter(router, procedure),
        customer: createCustomerRouter(router, procedure),
        team: createTeamRouter(router, procedure),
        teamMember: createTeamMemberRouter(router, procedure),
        job: createJobRouter(router, procedure),
        jobTeam: createJobTeamRouter(router, procedure),
        jobSheet: createJobSheetRouter(router, procedure),
        materialOrder: createMaterialOrderRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    supplier: SupplierClientType<AppRouter>;
    material: MaterialClientType<AppRouter>;
    customer: CustomerClientType<AppRouter>;
    team: TeamClientType<AppRouter>;
    teamMember: TeamMemberClientType<AppRouter>;
    job: JobClientType<AppRouter>;
    jobTeam: JobTeamClientType<AppRouter>;
    jobSheet: JobSheetClientType<AppRouter>;
    materialOrder: MaterialOrderClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}

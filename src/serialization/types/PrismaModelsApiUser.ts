/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsApiUser: core.serialization.ObjectSchema<
    serializers.PrismaModelsApiUser.Raw,
    SuperAgent.PrismaModelsApiUser
> = core.serialization.object({
    id: core.serialization.string(),
    token: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
    agents: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgent))
        .optional(),
    llms: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsLlm))
        .optional(),
    datasources: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsDatasource))
        .optional(),
    tools: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsTool))
        .optional(),
    workflows: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsWorkflow))
        .optional(),
});

export declare namespace PrismaModelsApiUser {
    interface Raw {
        id: string;
        token?: string | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        agents?: serializers.PrismaModelsAgent.Raw[] | null;
        llms?: serializers.PrismaModelsLlm.Raw[] | null;
        datasources?: serializers.PrismaModelsDatasource.Raw[] | null;
        tools?: serializers.PrismaModelsTool.Raw[] | null;
        workflows?: serializers.PrismaModelsWorkflow.Raw[] | null;
    }
}
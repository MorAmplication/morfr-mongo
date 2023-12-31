/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateVikaArgs } from "./CreateVikaArgs";
import { UpdateVikaArgs } from "./UpdateVikaArgs";
import { DeleteVikaArgs } from "./DeleteVikaArgs";
import { VikaCountArgs } from "./VikaCountArgs";
import { VikaFindManyArgs } from "./VikaFindManyArgs";
import { VikaFindUniqueArgs } from "./VikaFindUniqueArgs";
import { Vika } from "./Vika";
import { User } from "../../user/base/User";
import { VikaService } from "../vika.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vika)
export class VikaResolverBase {
  constructor(
    protected readonly service: VikaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "read",
    possession: "any",
  })
  async _vikasMeta(
    @graphql.Args() args: VikaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vika])
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "read",
    possession: "any",
  })
  async vikas(@graphql.Args() args: VikaFindManyArgs): Promise<Vika[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vika, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "read",
    possession: "own",
  })
  async vika(@graphql.Args() args: VikaFindUniqueArgs): Promise<Vika | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vika)
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "create",
    possession: "any",
  })
  async createVika(@graphql.Args() args: CreateVikaArgs): Promise<Vika> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vika)
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "update",
    possession: "any",
  })
  async updateVika(@graphql.Args() args: UpdateVikaArgs): Promise<Vika | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Vika)
  @nestAccessControl.UseRoles({
    resource: "Vika",
    action: "delete",
    possession: "any",
  })
  async deleteVika(@graphql.Args() args: DeleteVikaArgs): Promise<Vika | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(@graphql.Parent() parent: Vika): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

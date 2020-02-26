/*! For license information please see a5dbadf0.f7552cd0.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(6),r=(n(0),n(162)),l=(n(167),n(168),{title:"Resolvers",sidebar_label:"Resolvers"}),i={id:"graphql/resolvers",title:"Resolvers",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/graphql/resolvers.mdx",permalink:"/nestjs-query/docs/graphql/resolvers",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/graphql/resolvers.mdx",sidebar_label:"Resolvers",sidebar:"docs",previous:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"},next:{title:"Queries",permalink:"/nestjs-query/docs/graphql/queries"}},p=[{value:"CRUDResolver",id:"crudresolver",children:[]},{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[{value:"Create and Update DTOs.",id:"create-and-update-dtos",children:[]},{value:"Disabling Endpoints.",id:"disabling-endpoints",children:[]},{value:"Guards, Pipes, Filters, and Interceptors",id:"guards-pipes-filters-and-interceptors",children:[]},{value:"Default Filter",id:"default-filter",children:[]},{value:"Default Paging",id:"default-paging",children:[]},{value:"Default Sort",id:"default-sort",children:[]}]},{value:"Individual Resolvers",id:"individual-resolvers",children:[{value:"<code>CreateResolver</code>",id:"createresolver",children:[]},{value:"<code>ReadResolver</code>",id:"readresolver",children:[]},{value:"<code>UpdateResolver</code>",id:"updateresolver",children:[]},{value:"<code>DeleteResolver</code>",id:"deleteresolver",children:[]}]},{value:"Custom Methods",id:"custom-methods",children:[]}],s={rightToc:p},c="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"crudresolver"},"CRUDResolver"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," is the easiest way to get started. You can extend it to automatically add crud methods to your\ngraphql schema."),Object(r.b)("p",null,"Resolvers work the same as they do in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nestjs.com/graphql/resolvers-map"}),Object(r.b)("inlineCode",{parentName:"a"},"@nestjs/graphql"))," by annotating\nyour class with ",Object(r.b)("inlineCode",{parentName:"p"},"@Resolver"),"."),Object(r.b)("p",null,"For example you can create a resolver for the DTO defined above with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"The methods that will be exposed for the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemDTO")," are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItem")," - Find a single ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")," by id."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItems")," - Filter, sort, and page ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createOneTodoItem")," - Create a single ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createManyTodoItems")," - Create multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateOneTodoItem")," - Update a single ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")," by id."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateManyTodoItems")," - Update multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems")," using a filter."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteOneTodoItem")," - Delete a single ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")," by id."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteManyTodoItems")," - Delete multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems")," using a filter.")),Object(r.b)("p",null,"You can read more about the methods in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./queries"}),"Queries")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./mutations"}),"Mutations")," docs."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"The Crud Resolver accepts a number of options to control your endpoints."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"CreateDTOClass")," - The input DTO to use for create mutations. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#create-and-update-dtos"}),"Create and Update DTOs"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"UpdateDTOClass")," - The input DTO to use for update mutations. See ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#create-and-update-dtos"}),"Create and Update DTOs"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"create")," - In addition to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#resolveroptions"}),Object(r.b)("inlineCode",{parentName:"a"},"ResolverOptions"))," you can also specify the following"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CreateDTOClass")," - The input DTO to use for create mutations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CreateOneInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for create one mutations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CreateManyInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for create many mutations."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"read")," - In addition to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#resolveroptions"}),Object(r.b)("inlineCode",{parentName:"a"},"ResolverOptions"))," you can also specify the following"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"QueryArgs")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"ArgsType")," to use to filter records in ",Object(r.b)("inlineCode",{parentName:"li"},"queryMany")," endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Connection")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"ObjectType")," to return from the ",Object(r.b)("inlineCode",{parentName:"li"},"queryMany")," endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultResultSize=10")," - The default number of results to return"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maxResultsSize=50")," - The maximum number of results an end user can specify to return from a query."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultSort=[]")," - The default sort to use when querying for records."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultFilter={}")," - The default filter to use when querying for records."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"update")," - In addition to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#resolveroptions"}),Object(r.b)("inlineCode",{parentName:"a"},"ResolverOptions"))," you can also specify the following"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UpdateDTOClass")," - The input DTO to use for update mutations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UpdateOneInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for update one mutations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UpdateManyInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for update many mutations."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"delete")," - In addition to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#resolveroptions"}),Object(r.b)("inlineCode",{parentName:"a"},"ResolverOptions"))," you can also specify the following"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DeleteOneInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for delete one mutations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DeleteManyInput")," - The ",Object(r.b)("inlineCode",{parentName:"li"},"InputType")," to use for delete many mutations."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"relations")," - See the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./relations"}),"relations docs"),"."))),Object(r.b)("h4",{id:"resolveroptions"},Object(r.b)("inlineCode",{parentName:"h4"},"ResolverOptions")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", ",Object(r.b)("inlineCode",{parentName:"p"},"read"),", ",Object(r.b)("inlineCode",{parentName:"p"},"update"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," options above all accept the following options."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dtoName")," - Set to override the default name (the name passed to ",Object(r.b)("inlineCode",{parentName:"li"},"@ObjectType")," or the name of the class)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled=false")," - Set to true to disable all endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"guards=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/guards"}),"guards")," to add to all endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interceptors=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/interceptors"}),"interceptors")," to add to all endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pipes=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/pipes"}),"pipes")," to add to all endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filters=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/exception-filters"}),"filters")," to add to all endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"one"),", ",Object(r.b)("inlineCode",{parentName:"li"},"many")," - Both the ",Object(r.b)("inlineCode",{parentName:"li"},"one")," and ",Object(r.b)("inlineCode",{parentName:"li"},"many")," accept the following options:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled=false")," - Set to true to disable the endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"guards=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/guards"}),"guards")," to add to the endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interceptors=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/interceptors"}),"interceptors")," to add to the endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pipes=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/pipes"}),"pipes")," to add to the endpoint."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filters=[]")," - An array of ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nestjs.com/exception-filters"}),"filters")," to add to the endpoint.")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"create-and-update-dtos"},"Create and Update DTOs."),Object(r.b)("p",null,"There may be times when you want to specify certain validation or only allow certain fields when updating or\ncreating records."),Object(r.b)("p",null,"To allow for this you can specify a ",Object(r.b)("inlineCode",{parentName:"p"},"CreateDTOClass")," and ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateDTOClass")," when extending ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("p",null,"In this example we'll create a new ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemInputDTO")," that adds validation and limits the fields you can modify."),Object(r.b)("p",null,"Assume we have the following class ",Object(r.b)("inlineCode",{parentName:"p"},"todo-item-input.dto.ts")," which omits the ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"created"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"updated")," fields from\nthe original DTO."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { Field, InputType } from 'type-graphql';\nimport { IsString, Length } from 'class-validator';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @Field()\n  // ensure it is a string field\n  @IsString()\n  // min length of 5 and max of 5 characters\n  @Length(5, 50)\n  title!: string;\n\n  @Field()\n  completed!: boolean;\n}\n")),Object(r.b)("p",null,"We can then update our resolver to"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemInputDTO } from './dto/create-todo-item.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"disabling-endpoints"},"Disabling Endpoints."),Object(r.b)("p",null,"There may be scenarios where you wish to disable certain methods."),Object(r.b)("p",null,"Using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"}),"options")," describe above we can disable different actions."),Object(r.b)("p",null,"In this example we disable all ",Object(r.b)("inlineCode",{parentName:"p"},"create")," endpoints"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  create: { disabled: true },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("p",null,"You can also disable individual endpoints."),Object(r.b)("p",null,"In this example we disable all ",Object(r.b)("inlineCode",{parentName:"p"},"many")," mutations. This will prevent ",Object(r.b)("inlineCode",{parentName:"p"},"createManyTodoItems"),", ",Object(r.b)("inlineCode",{parentName:"p"},"updateManyTodoItems"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"deleteManyTodoItems")," from being exposed in the graphql schema."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," The same pattern applies for disabling the ",Object(r.b)("inlineCode",{parentName:"p"},"one")," endpoints."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  create: { many: { disabled: true } },\n  update: { many: { disabled: true } },\n  delete: { many: { disabled: true } },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"guards-pipes-filters-and-interceptors"},"Guards, Pipes, Filters, and Interceptors"),Object(r.b)("p",null,"In this section we'll just demonstrate using a ",Object(r.b)("inlineCode",{parentName:"p"},"guard")," but the same pattern applies for ",Object(r.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"filters")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"interceptors")),Object(r.b)("p",null,"To set up a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nestjs.com/guards"}),"guard")," for endpoint you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"guards")," option."),Object(r.b)("p",null,"Assume we have the following auth guard that checks for a certain header and value."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  CanActivate,\n  ExecutionContext,\n  Injectable,\n  Logger,\n} from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { GqlExecutionContext } from '@nestjs/graphql';\nimport { AUTH_HEADER_NAME } from './constants';\nimport { config } from './config';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  private logger = new Logger(AuthGuard.name);\n\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const ctx = GqlExecutionContext.create(context);\n    const req = ctx.getContext().request;\n    this.logger.log(`Req = ${req.headers}`);\n    return req.headers[AUTH_HEADER_NAME] === config.auth.header;\n  }\n}\n")),Object(r.b)("p",null,"We can then add it to each of our mutation endpoints"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { AuthGuard } from '../auth.guard';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\nconst guards = [AuthGuard];\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  create: { guards },\n  update: { guards },\n  delete: { guards },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("p",null,"Now any requests that go to a ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", ",Object(r.b)("inlineCode",{parentName:"p"},"update")," or ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," method will require the guard."),Object(r.b)("p",null,"You can also apply to individual methods using the ",Object(r.b)("inlineCode",{parentName:"p"},"one")," and ",Object(r.b)("inlineCode",{parentName:"p"},"many")," fields. For example lets put a guard on all many\nmutations."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { AuthGuard } from '../auth.guard';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\nconst guards = [AuthGuard];\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  create: { many: { guards } },\n  update: { many: { guards } },\n  delete: { many: { guards } },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"default-filter"},"Default Filter"),Object(r.b)("p",null,"When querying the default filter is empty. You can specify a default filter by using the ",Object(r.b)("inlineCode",{parentName:"p"},"read.defaultFilter")," option."),Object(r.b)("p",null,"In this example we specify the default filter to be ",Object(r.b)("inlineCode",{parentName:"p"},"completed IS TRUE"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  read: { defaultFilter: { completed: { is: true } } },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"default-paging"},"Default Paging"),Object(r.b)("p",null,"By default all results will be limited to 10 records, with a max of 50 records returned."),Object(r.b)("p",null,"To override the default you can override the following options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"read.defaultResultSize")," - The default number of results to return."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"read.maxResultSize")," - The maximum number of results an end user can specify to return.")),Object(r.b)("p",null,"In this example we specify the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultResultSize")," to 5 and ",Object(r.b)("inlineCode",{parentName:"p"},"maxResultsSize")," to 20."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  read: { defaultResultSize: 5, maxResultsSize: 20 },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"default-sort"},"Default Sort"),Object(r.b)("p",null,"When querying the default sort is based on the persistence layer. You can override the default by providing the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultSort")," option."),Object(r.b)("p",null,"In this example we specify the default sort to be by ",Object(r.b)("inlineCode",{parentName:"p"},"title"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  read: { defaultSort: [{ field: 'title', direction: SortDirection.ASC }] },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("h2",{id:"individual-resolvers"},"Individual Resolvers"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package exposes each part of ",Object(r.b)("inlineCode",{parentName:"p"},"CRUD")," into individual mixins and resolvers allowing you\nto pick and choose what functionality you want to expose."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," All examples below can be achieved with the options exposed through the ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),Object(r.b)("h3",{id:"createresolver"},Object(r.b)("inlineCode",{parentName:"h3"},"CreateResolver")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CreateResolver")," will only expose the ",Object(r.b)("inlineCode",{parentName:"p"},"createOne")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createMany")," endpoints. The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"}),"options")," described for\n",Object(r.b)("inlineCode",{parentName:"p"},"create")," can be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"CreateResolver")),Object(r.b)("p",null,"For example the following resolver will expose the ",Object(r.b)("inlineCode",{parentName:"p"},"createOneTodoItem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createManyTodoItems")," mutations."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { CreateResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CreateResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"readresolver"},Object(r.b)("inlineCode",{parentName:"h3"},"ReadResolver")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ReadResolver")," will only expose the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findById")," endpoints. The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"}),"options")," described for ",Object(r.b)("inlineCode",{parentName:"p"},"read"),"\ncan be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"ReadResolver")),Object(r.b)("p",null,"For example the following resolver will expose the ",Object(r.b)("inlineCode",{parentName:"p"},"todoItems")," and ",Object(r.b)("inlineCode",{parentName:"p"},"todoItem")," queries."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { ReadResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends ReadResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"updateresolver"},Object(r.b)("inlineCode",{parentName:"h3"},"UpdateResolver")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateResolver")," will only expose the ",Object(r.b)("inlineCode",{parentName:"p"},"updateOne")," and ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany")," endpoints. The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"}),"options")," described for\n",Object(r.b)("inlineCode",{parentName:"p"},"update")," can be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateResolver")),Object(r.b)("p",null,"For example the following resolver will expose the ",Object(r.b)("inlineCode",{parentName:"p"},"updateOneTodoItem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"updateManyTodoItems")," mutations."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { UpdateResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\n\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends UpdateResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"deleteresolver"},Object(r.b)("inlineCode",{parentName:"h3"},"DeleteResolver")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DeleteResolver")," will only expose the ",Object(r.b)("inlineCode",{parentName:"p"},"deleteOne")," and ",Object(r.b)("inlineCode",{parentName:"p"},"deleteMany")," endpoints. The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"}),"options")," described for\n",Object(r.b)("inlineCode",{parentName:"p"},"delete")," can be passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"DeleteResolver")),Object(r.b)("p",null,"For example the following resolver will expose the ",Object(r.b)("inlineCode",{parentName:"p"},"updateOneTodoItem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"updateManyTodoItems")," mutations."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"import { DeleteResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends DeleteResolver(TodoItemDTO) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"custom-methods"},"Custom Methods"),Object(r.b)("p",null,"You can also create custom methods that build on the methods added by CRUDResolver."),Object(r.b)("p",null,"Lets create a new query endpoint that only returns completed ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItems"),"."),Object(r.b)("p",null,"First create a file named ",Object(r.b)("inlineCode",{parentName:"p"},"types.ts"),". And add the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { ConnectionType, QueryArgsType } from '@nestjs-query/query-graphql';\nimport { ArgsType } from 'type-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemConnection = ConnectionType(TodoItemDTO);\n\n@ArgsType()\nexport class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}\n")),Object(r.b)("p",null,"In the code above we export two types. ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemConnection")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemQuery"),". Because of the way ",Object(r.b)("inlineCode",{parentName:"p"},"type-graphql")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"nest")," work we need to extend the ",Object(r.b)("inlineCode",{parentName:"p"},"QueryArgsType")," so that it will know the type to serialize into."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," ",Object(r.b)("inlineCode",{parentName:"p"},"ConnectionType")," will return the same Class each time you call it for a given type to prevent\nduplicate type errors when generating the graphql schema."),Object(r.b)("p",null,"In your resolver you can now create a new ",Object(r.b)("inlineCode",{parentName:"p"},"completedTodoItems")," method with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"// Set the return type to the TodoItemConnection\n@Query(() => TodoItemConnection)\ncompletedTodoItems(@Args() query: TodoItemQuery): Promise<ConnectionType<TodoItemDTO>> {\n  // add the completed filter the user provided filter\n  const filter: Filter<TodoItemDTO> = {\n    ...query.filter,\n    ...{ completed: { is: true } },\n  };\n\n  // call the original queryMany method with the new query\n  return this.queryMany({ ...query, ...{ filter } });\n}\n")),Object(r.b)("p",null,"Lets break this down so you know what is going on."),Object(r.b)("p",null,"In the above code we annotate the new method with"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"@Query(() => TodoItemConnection)\n")),Object(r.b)("p",null,"The return type passed to query lets graphql know what the generated schema type is."),Object(r.b)("p",null,"The next piece to pay attention to is"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"completedTodoItems(@Args() query: TodoItemQuery)\n")),Object(r.b)("p",null,"We use the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemQuery")," we created for the arguments type and annotate with ",Object(r.b)("inlineCode",{parentName:"p"},"@Args")," when you look at the generated\nschema in it will look like."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-graphql"}),"completedTodoItems(\n  paging: CursorPaging = {}\n  filter: TodoItemFilter = {}\n  sorting: [TodoItemSort!] = []\n): TodoItemConnection!\n")),Object(r.b)("p",null,"Notice how there is not a query arg but instead the you see the fields of ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemQuery")," that is because we used\n",Object(r.b)("inlineCode",{parentName:"p"},"@Args")," without a name."),Object(r.b)("p",null,"The next piece is"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"// add the completed filter the user provided filter\nconst filter: Filter<TodoItemDTO> = {\n  ...query.filter,\n  ...{ completed: { is: true } },\n};\n")),Object(r.b)("p",null,"Here we do a shallow copy of the ",Object(r.b)("inlineCode",{parentName:"p"},"filter")," and add ",Object(r.b)("inlineCode",{parentName:"p"},"completed: { is: true }"),". This will override any completed arguments\nthat an end user may have provided to ensure we always query for completed todos."),Object(r.b)("p",null,"Finally we call the ",Object(r.b)("inlineCode",{parentName:"p"},"queryMany")," method from the ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," with the new filter set on the query."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"// call the original queryMany method with the new query\nreturn this.queryMany({ ...query, ...{ filter } });\n")))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,u=d["".concat(l,".").concat(b)]||d[b]||m[b]||r;return n?a.a.createElement(u,i({ref:t},s,{components:n})):a.a.createElement(u,i({ref:t},s))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},163:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var l=a.apply(null,o);l&&e.push(l)}else if("object"===r)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},167:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(163),l=n.n(r),i=n(84),p=n.n(i);const s={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:r,values:i}=e,[c,d]=Object(o.useState)(r),b=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":c===e,className:l()("tab-item",p.a.tabItem,{"tab-item--active":c===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===c)[0]))}},168:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);